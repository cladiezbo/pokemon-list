import { createAction, props, union } from '@ngrx/store';
import { PokemonData } from 'src/app/core/interfaces/ngrx/transaction';

export const loadNames = createAction(
  '[transaccion transaccions-list] loadNames',
  props<{ page: number }>()
);

export const setNames = createAction(
  '[transaccion transaccions-list] setNames',
  props<{ pokemonData: PokemonData[] }>()
);

const all = union({
  loadNames,
  setNames
});

export type TransactionsActionTypes = typeof all;
