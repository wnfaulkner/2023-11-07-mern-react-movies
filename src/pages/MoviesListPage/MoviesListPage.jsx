import './MoviesListPage.css'
import { useState } from 'react'

import MoviesList from './MoviesList.jsx'
// import { MovieCard } from './MovieCard.jsx'

export default function MoviesListPage ({ movies }) {
  console.log({movies})
  return(
    <>
      <h1>Movies</h1>
      <MoviesList movies={movies} />
    </>

  )
}