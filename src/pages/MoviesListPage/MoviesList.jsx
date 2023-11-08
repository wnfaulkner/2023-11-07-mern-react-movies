import './MoviesList.css'
import { useState } from "react";

import MovieCard from './MovieCard'

export default function MoviesList ({ movies }) {
  return(
    <ul className="movies-list">
      {
        movies.map(
          (m, idx) => (
            <MovieCard movie={m} key={idx} />
          )
        )
      }
    </ul>
  )
}