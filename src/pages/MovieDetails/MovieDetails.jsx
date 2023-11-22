import classes from './MovieDetails.module.css'
import { Suspense, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useFetching } from 'hooks/useFetching'
import { MoviesService } from 'api/MoviesService'
import LoaderComp from 'components/LoaderComp/LoaderComp'
import ErrorComp from 'components/ErrorComp/ErrorComp'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {movieId} = useParams()
    const location = useLocation()
    const [fetchMovieDetails, isLoading, error] = useFetching(async () => {
        const data = await MoviesService.getMovieDetailsById(movieId)
        setMovieDetails(data)
    })

    useEffect(() => {
        fetchMovieDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    return (
        <div className='container'>
            <Link 
                to={location.state.from}
                className={classes.goBackLink}
            >Go back</Link>
            {
                isLoading
                ?
                <LoaderComp/>
                :
                error
                    ?
                    <ErrorComp message={error}/>
                    :
                    <div>
                        <div className={classes.moviesDetailsContainer}>
                            <img 
                                src={'https://image.tmdb.org/t/p/original' + movieDetails.poster_path} 
                                alt={movieDetails.title}
                                className={classes.movieImg}
                            />
                            <div className={classes.movieDetailsContent}>
                                <h3 className={classes.movieTitle}>{movieDetails.title}</h3>
                                <p className={classes.movieInfo}>
                                    User Score: {Math.round(movieDetails.vote_average * 10)}%
                                </p>
                                <h4 className={classes.movieSecondTitle}>Overview</h4>
                                <p className={classes.movieInfo}>{movieDetails.overview}</p>
                                <h4 className={classes.movieSecondTitle}>Genres</h4>
                                <p className={classes.movieInfo}>
                                    {   
                                        movieDetails.genres 
                                        ?
                                        movieDetails.genres.map(({name}) => name).join(', ')
                                        :
                                        ' no info'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className={classes.additionalInfoContainer}>
                            <h3 className={classes.additionalInfoTitle}>Additional information</h3>
                            <ul className={classes.additionalInfoList}>
                                <li className={classes.additionalInfoItem}>
                                    <Link 
                                        to={'cast'}
                                        className={classes.additionalInfoLink} 
                                        state={location.state}
                                    >Cast</Link>
                                </li>
                                <li className={classes.additionalInfoItem}>
                                    <Link 
                                        className={classes.additionalInfoLink} 
                                        to={'reviews'}
                                        state={location.state}
                                    >Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <Suspense fallback={<LoaderComp/>}>
                            <Outlet/>
                        </Suspense>
                    </div>
            }
        </div>
    )
}

export default MovieDetails;