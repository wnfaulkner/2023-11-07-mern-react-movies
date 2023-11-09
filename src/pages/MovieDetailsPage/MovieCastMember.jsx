import './MovieCastMember.css'

export default function MovieCastMember ({ castMember }) {

  
  return(
    <p className="cast-member-list-element">      
      {castMember}
    </p>
  )
}