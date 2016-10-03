import { RECEIVE_ALL_POKEMON, receiveAllPokemon, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  pokemon: [],
  currentPokemon: {}
};

const PokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState.pokemon = action.pokemon;
      return newState;
    case RECEIVE_POKEMON:
      newState.currentPokemon = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
