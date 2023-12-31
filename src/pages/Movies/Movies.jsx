import classes from './Movies.module.css'
import { useEffect, useState } from 'react'
import { useFetching } from 'hooks/useFetching'
import { MoviesService } from 'api/MoviesService'
import { Link, useSearchParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import LoaderComp from 'components/LoaderComp/LoaderComp'
import ErrorComp from 'components/ErrorComp/ErrorComp'

const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState([])
    const [searchParams, setSeerchParams] = useSearchParams()
    const [fetchSearchedMovies, isLoading, error] = useFetching(async (searchText) => {
        const data = await MoviesService.getMoviesByQuery(searchText)
        setSearchedMovies(data.results)
    })

    useEffect(() => {
        if(searchParams.get('query'))
            fetchSearchedMovies(searchParams.get('query'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams])

    const onSearchSubmit = (searchText) => {
        fetchSearchedMovies(searchText)
        setSeerchParams({query: searchText})
    }

    return (
        <div className='container'>
            <Formik
                initialValues={{
                    searchText: ''
                }}
                onSubmit={(values, actions) => {
                    onSearchSubmit(values.searchText)
                    actions.resetForm()
                }}
            >
                <Form className={classes.moviesForm}>
                    <Field 
                        type='text'
                        name='searchText'
                        required
                        placeholder='Search movie'
                        className={classes.moviesFormInput}
                    />
                    <button type='submit' className={classes.moviesFormBtn}>Search</button>
                </Form>
            </Formik>
            {
                isLoading
                ?
                <LoaderComp/>
                :
                error
                    ?
                    <ErrorComp message={error}/>
                    :
                    searchedMovies.length > 0
                        ?
                        <ul className={classes.moviesList}>
                            {
                                searchedMovies.map(({id, original_title}) => 
                                    <li key={id} className={classes.moviesItem}>
                                        <Link 
                                            className={classes.movieslink} 
                                            to={'/movies/' + id}
                                            state={{from: '/movies?query=' + searchParams.get('query')}}
                                        >{original_title}</Link>
                                    </li>    
                                )
                            }
                        </ul>
                        :
                        <p className={classes.noInfoText}>No movies</p>
            }
        </div>
    )
}

export default Movies;