import { connect } from 'react-redux';
import {
  receivePokemon,
  requestPokemon
} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return ({
    pokemon: state.currentPokemon
  });
};

const PokemonDetailContainer = connect(
  mapStateToProps
)(PokemonDetail);

export default PokemonDetailContainer;
