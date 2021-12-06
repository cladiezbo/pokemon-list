import { Action, createReducer, on } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/interfaces/ngrx/pokemons';
import * as PokemonsActions from './pokemons.actions';

export const pokemonsInitialState: PokemonsState = {
  pokemonData: null,
  searchByName: ""
};

const pokemonsReducerCreator = createReducer(
  pokemonsInitialState,
  on(PokemonsActions.setNames, (state, { items }) => ({
    ...state,
    pokemonData: items
  })),
  on(PokemonsActions.searchByName, (state, { search }) => ({
    ...state,
    searchByName: search
  }))
);

export function pokemonsReducer(state: PokemonsState, action: Action) {
  return pokemonsReducerCreator(state, action);
}
