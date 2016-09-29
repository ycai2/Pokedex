import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = (props) => {
  let pokemonItems = [];
  if (props.pokemon) {
    pokemonItems = props.pokemon.map((pokemon) => {
      return (<PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    });
  }

  return (
    <section className="pokedex">
      <ul>
        {pokemonItems}
      </ul>
    </section>
  );
};

export default PokemonIndex;
