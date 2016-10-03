import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({ pokemon, router }) => {
  const url = `/pokemon/${pokemon.id}`;

  const handleClick = (url) => {
    router.push(url);
  }

  return (
    <li className="pokemon-index-item" onClick={handleClick.bind(null, url)}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name}/>
      <span>{pokemon.name}</span>
    </li>
  );
}

export default withRouter(PokemonIndexItem);
