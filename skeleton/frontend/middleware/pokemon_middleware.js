import { receiveAllPokemon, REQUEST_ALL_POKEMON, REQUEST_POKEMON, receivePokemon } from '../actions/pokemon_actions';
import { fetchAllPokemon, fetchPokemon } from '../util/api_util';

const PokemonMiddleware = ({ dispatch }) => (next) => (action) => {
  let success;
  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      success = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(success);
      break;
    case REQUEST_POKEMON:
      success = pokemon => dispatch(receivePokemon(pokemon));
      fetchPokemon(action.id, success);
      break;
    default:
      return next(action);
  }
}

export default PokemonMiddleware;
