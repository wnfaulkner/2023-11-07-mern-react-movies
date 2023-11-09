import './MovieCard.css'
import { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage.jsx";

export default function MovieCard ({ movie, idx }) {
  const navigate = useNavigate();
  

  function handleClick() {
    navigate(`/movies/${movie.title}`, {state: {movie}}) 
    // return(
    //   <Routes>
    //     <Route path='movies/:{movieName}' element={<MovieDetailsPage movie={movie} />} />
    //   </Routes>
    // )
  }

  return(
    <li className="movie-card" onClick={handleClick} style={{ backgroundImage: `url(${movie.posterPath})` }}>
      <div className="movie-details">
        <div className="movie-detail">{movie.title}</div>
        <div className="movie-detail">Release Date: {movie.releaseDate}</div>
      </div>
    </li>
  )
}