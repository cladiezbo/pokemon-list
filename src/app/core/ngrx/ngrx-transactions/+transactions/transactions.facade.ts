import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TransactionsActions from './transactions.actions';
import { GlobalState } from 'src/app/core/interfaces';
import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/core/interfaces/ngrx/transaction';

@Injectable()
export class TransactionsFacade {
  /**
   *  Selector of name list from state
   */
  nameList$: Observable<PokemonData[]> = this.store.select(store => store.transactions.pokemonData);

  constructor(private store: Store<GlobalState>) {}

  /**
   * Load names
   *
   */
  loadPokemonNames(page: number) {
    this.store.dispatch(TransactionsActions.loadNames({page}));
  }
}
