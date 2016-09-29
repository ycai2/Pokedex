import { receiveAllPokemon, REQUEST_ALL_POKEMON } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util';

const PokemonMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      const success = pokemon => dispatch(receiveAllPokemon(pokemon));
      // const success = pokemon => console.log(pokemon);
      fetchAllPokemon(success);
      break;
    default:
      return next(action);
  }
}

export default PokemonMiddleware;
