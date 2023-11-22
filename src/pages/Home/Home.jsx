import classes from './Home.module.css'
import { useEffect, useState } from 'react'
import { useFetching } from 'hooks/useFetching'
import { MoviesService } from 'api/MoviesService'
import { Link } from 'react-router-dom'
import LoaderComp from 'components/LoaderComp/LoaderComp'
import ErrorComp from 'components/ErrorComp/ErrorComp'

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [fetchTrendingMovies, isLoading, error] = useFetching(async () => {
        const data = await MoviesService.getTrandingMovies()
        setTrendingMovies(data.results)
    })

    useEffect(() => {
        fetchTrendingMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='container'>
            <h2 className={classes.homeTitle}>Trending today</h2>
            {
                isLoading
                ?
                <LoaderComp/>
                :
                error
                    ?
                    <ErrorComp message={error}/>
                    :
                    <ul className={classes.homeList}>
                    {
                        trendingMovies.map(({id, original_title}) => 
                            <li key={id} className={classes.homeItem}>
                                <Link 
                                    className={classes.homelink} 
                                    to={'/movies/' + id}
                                    state={{from: '/'}}
                                >{original_title}</Link>
                            </li>    
                        )
                    }
            </ul>
            }
        </div>
    )
}

export default Home;