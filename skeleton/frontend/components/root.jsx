import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon } from '../actions/pokemon_actions';

const allPokemon = (store) => {
  return store.dispatch(requestAllPokemon());
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route
        path='/'
        component={PokemonIndexContainer}
        onEnter={allPokemon(store)}>
      </Route>
    </Router>
  </Provider>
);

export default Root;
