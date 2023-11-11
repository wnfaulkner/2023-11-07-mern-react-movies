// ActorsList
import './ActorsList.css'
import ActorCard from './ActorCard.jsx'

export default function ActorsList ({ actors }) {

  
  return(
    <div className="actors-list">
      {actors.map((actor, idx) => (
          <ActorCard key={idx} actor={actor}/>
        ))}
    </div>
  )
}