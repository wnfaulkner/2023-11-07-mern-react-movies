import './MovieDetailsPage.css'
import { useLocation } from "react-router-dom";

import MovieCastMember from './MovieCastMember'

export default function MovieDetailsPage () {

  const { state } = useLocation();
  const movie = state.movie;
  const movieCast = movie.cast
  
  return(
    <>
      <img src={movie.posterPath} className="movie-details-poster" />
      <div>
        <h1>{movie.title}</h1>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Cast:</p>
        <div>
          {movieCast.map((castMember, idx) => (
            <MovieCastMember castMember={castMember} key={idx} />
          ))}
          
        </div>
      </div>
    </>
  )
}