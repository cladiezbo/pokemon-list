import { Action, createReducer, on } from '@ngrx/store';
import { TransactionState } from 'src/app/core/interfaces/ngrx/transaction';
import * as TransactionActions from './transactions.actions';

export const transactionsInitialState: TransactionState = {
  pokemonData: []
};

const transactionsReducerCreator = createReducer(
  transactionsInitialState,
  on(TransactionActions.setNames, (state, { pokemonData }) => ({
    ...state,
    pokemonData
  })));

export function transactionsReducer(state: TransactionState, action: Action) {
  return transactionsReducerCreator(state, action);
}
