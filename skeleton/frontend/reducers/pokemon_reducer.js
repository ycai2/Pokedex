import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = [];

const PokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonReducer;
