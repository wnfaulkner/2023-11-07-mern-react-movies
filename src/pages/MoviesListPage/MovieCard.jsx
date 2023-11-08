import './MovieCard.css'
import { useState } from "react";

export default function MovieCard ({ movie, idx }) {
  return(
    <li className="movie-card" style={{ backgroundImage: `url(${movie.posterPath})` }}>
      <div className="movie-details">
        <div className="movie-detail">{movie.title}</div>
        <div className="movie-detail">Release Date: {movie.releaseDate}</div>
      </div>
    </li>
  )
}