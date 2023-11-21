import { useEffect, useState } from 'react';
import classes from './Cast.module.css'
import { useFetching } from 'hooks/useFetching';
import { useParams } from 'react-router-dom';
import { MoviesService } from 'api/MoviesService';
import person from '../../img/person.png';
import LoaderComp from 'components/LoaderComp/LoaderComp';
import ErrorComp from 'components/ErrorComp/ErrorComp';

const Cast = () => {
    const [cast, setCast] = useState([])
    const {movieId} = useParams()
    const [fetchCast, isLoading, error] = useFetching(async () => {
        const data = await MoviesService.getMovieCastById(movieId)
        setCast(data.cast)
    })

    useEffect(() => {
        fetchCast()
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
                    <ul className={classes.castList}>
                        {
                            cast.map(({cast_id, profile_path, name, character}) => 
                                <li key={cast_id} className={classes.actorItem}>
                                    <img 
                                        src={profile_path 
                                            ? 'https://image.tmdb.org/t/p/original' + profile_path 
                                            : person} 
                                        alt={name}
                                        className={classes.actorImg}
                                    />
                                    <p className={classes.actorName}>{name}</p>
                                    <p className={classes.actorCharacter}>Role: {character ? character : 'no info'}</p>
                                </li>    
                            )
                        }
                    </ul>
            }
        </div>
    )
}

export default Cast;