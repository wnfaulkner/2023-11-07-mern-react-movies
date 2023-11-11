// ActorCard
import './ActorCard.css'

export default function ActorCard ({ actor }) {
    return (
        <div className="actor-card" >
            <p className="actor-name">{actor}</p>
        </div>
    )
}