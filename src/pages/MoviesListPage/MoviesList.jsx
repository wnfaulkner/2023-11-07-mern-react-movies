import './MoviesList.css'
// import React from "react";

import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
  
  return (
    <ul className="movies-list">
      {movies.map((m, idx) => (
        <MovieCard movie={m} key={idx} />
      ))}
    </ul>
  );
}