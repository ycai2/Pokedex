import { connect } from 'react-redux';
import {
  receiveAllPokemon,
  requestAllPokemon
} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

// const mapStateToProps = state => ({
//   pokemon: state.pokemon
// });
const mapStateToProps = state => {
  return ({
    pokemon: state
  });
};

const mapDispatchToProps = dispatch => ({
  receiveAllPokemon: pokemon => dispatch(receiveAllPokemon(pokemon)),
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

const PokemonIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);

export default PokemonIndexContainer;
