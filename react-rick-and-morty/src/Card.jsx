import "./Card.css"

function Card({character}) {
  return (
    <div className= "card">
        <aside>
          <img src={character?.image} alt={character?.name} />
        </aside>
      <div className="container">
        <p>ID: {character?.id}</p>
        <p>Name: {character?.name}</p>
        <p>Gender: {character?.gender}</p>
        <p>Status: {character?.status}</p>
        <p>Species:{character?.species}</p>
      </div>
    </div>
  );
}

export default Card;