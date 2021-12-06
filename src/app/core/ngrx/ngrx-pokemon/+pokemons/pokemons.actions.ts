import { createAction, props, union } from '@ngrx/store';
import { PokemonResponse } from 'src/app/core/interfaces/ngrx/pokemons';

export const loadNames = createAction(
  '[transaccion transaccions-list] loadNames',
  props<{ page: number }>()
);

export const setNames = createAction(
  '[transaccion transaccions-list] setNames',
  props<{ items: PokemonResponse }>()
);

export const searchByName = createAction(
  '[transaccion transaccions-list] searchByName',
  props<{ search: string }>()
);

const all = union({
  loadNames,
  setNames,
  searchByName
});

export type PokemonsActionTypes = typeof all;
