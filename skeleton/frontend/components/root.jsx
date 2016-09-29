import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';

const allPokemon = (store) => () => {
  return store.dispatch(requestAllPokemon());
}


const singlePokemon = (store) => (nextState) => {
  return store.dispatch(requestPokemon(nextState.params.id));
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route
        path='/'
        component={PokemonIndexContainer}
        onEnter={allPokemon(store)}>
        <Route
          path='pokemon/:id'
          component={PokemonDetailContainer}
          onEnter={singlePokemon(store)}>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
