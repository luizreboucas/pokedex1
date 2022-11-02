import './Card.css';

const Card = ({pokemon}) => {
    return(
        <div className='card'>
          <header className="nome">{pokemon.name}</header>
          <img className="foto" src={pokemon.sprites.front_default}></img>
        </div>
    )
}

export default Card;