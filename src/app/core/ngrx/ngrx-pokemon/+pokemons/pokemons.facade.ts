import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PokemonsActions from './pokemons.actions';
import { GlobalState } from 'src/app/core/interfaces';
import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/core/interfaces/ngrx/pokemons';
import { pokemonFilterSelector, totalPokemonDataSelector } from './pokemons.selector';

@Injectable()
export class PokemonsFacade {
  /**
   *  State name list selector
   */
  pokemonsName$: Observable<PokemonData[]> = this.store.pipe(select(pokemonFilterSelector));

  /**
   *  Total pokemon data selector
   */
  totalPokemonData$: Observable<number> = this.store.pipe(select(totalPokemonDataSelector));

  constructor(private store: Store<GlobalState>) { }

  /**
   * Load pokemon names
   *
   */
  loadPokemonNames(page: number) {
    this.store.dispatch(PokemonsActions.loadNames({ page }));
  }

  /**
   * Apply the search by name
   *
   */
  searchByName(search: string) {
    this.store.dispatch(PokemonsActions.searchByName({ search }));
  }
}
