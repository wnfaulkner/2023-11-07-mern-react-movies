import './ActorsListPage.css'
import { useState } from 'react'
import ActorsList from './ActorsList'

export default function ActorsListPage ({ user, movies }) {
  const allActors = movies.flatMap(movie => movie.cast);
  const allActorsUnique = new Set(allActors)
  const actors = Array.from(allActorsUnique).sort()
  //console.log(allActors.length, actors.length)
  //const actors = ['test','test2', 'test3']
  return(
    <>
      <h1>Actors</h1>
      <ActorsList actors={actors}/>
    </>
  )
}
