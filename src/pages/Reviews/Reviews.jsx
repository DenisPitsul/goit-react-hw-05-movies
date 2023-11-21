import { useEffect, useState } from 'react'
import classes from './Reviews.module.css'
import { useParams } from 'react-router-dom'
import { useFetching } from 'hooks/useFetching'
import { MoviesService } from 'api/MoviesService'
import LoaderComp from 'components/LoaderComp/LoaderComp'
import ErrorComp from 'components/ErrorComp/ErrorComp'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams()
    const [fetchCast, isLoading, error] = useFetching(async () => {
        const data = await MoviesService.getMovieReviewsById(movieId)
        setReviews(data.results)
    })

    useEffect(() => {
        fetchCast()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                isLoading
                ?
                <LoaderComp/>
                :
                error
                    ?
                    <ErrorComp message={error}/>
                    :
                    reviews.length > 0
                        ?
                        <ul className={classes.reviewsList}>
                            {
                                reviews.map(({id, author, content}) => 
                                    <li key={id} className={classes.reviewItem}>
                                        <h3 className={classes.reviewAuthorName}>{author}</h3>
                                        <p className={classes.reviewText}>{content}</p>
                                    </li>    
                                )
                            }
                        </ul>
                        :
                        <p className={classes.noInfoText}>We don't have any reviews for this movie.</p>
            }
        </div>
    )
}

export default Reviews;