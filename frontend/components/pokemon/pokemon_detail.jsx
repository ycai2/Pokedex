import React from 'react';
import { withRouter } from 'react-router';
import { allToys } from '../../reducers/selectors';

const PokemonDetail = ({ pokemon, router, children }) => {
  const handleClick = (url) => {
    router.push(url);
  };

  const toys = allToys(pokemon).map((toy) => {
    return (<li key={toy.id} onClick={handleClick.bind(null, `pokemon/${pokemon.id}/toys/${toy.id}`)}>{toy.name}</li>);
  });

  return (
    <section className="pokemon-detail">
      <ul>
        <img src={pokemon.image_url} alt={pokemon.name}/>
          <li><h2>{pokemon.name}</h2></li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: &#34;{pokemon.moves}&#34;</li>
        <section className="toys">
          <h3>Toys</h3>
          <ul className="toy-list">
            {toys}
          </ul>
          {children}
        </section>
      </ul>
    </section>
  );

};

export default withRouter(PokemonDetail);
