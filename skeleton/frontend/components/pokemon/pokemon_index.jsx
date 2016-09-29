import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger
    let pokemonLis = [];
    if (typeof this.props.pokemon !== "undefined") {
      pokemonLis = this.props.pokemon.map((pokemon) => {
        return (<li key={pokemon.id}>{pokemon.name}</li>);
      });
    }



    return (
      <section className="pokedex">
        <ul>
          {pokemonLis}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
