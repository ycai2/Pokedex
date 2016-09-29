import { connect } from 'react-redux';
import {
  receiveAllPokemon,
  requestAllPokemon
} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => {
  return ({
    pokemon: state.pokemon
  });
};

const PokemonIndexContainer = connect(
  mapStateToProps
)(PokemonIndex);

export default PokemonIndexContainer;
