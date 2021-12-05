import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TransactionsActions from './transactions.actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonResponse, PokemonData } from 'src/app/core/interfaces/ngrx/transaction';

/**
 * Initial value to limit parameter
 */
const INITIAL_LIMIT = 20;

/**
 * Initial value to offset parameter
 */
 const INITIAL_OFFSET = 0;

@Injectable()
export class TransactionsEffects {
  /**
   * Url base from used appi
   *
   */
  private path = 'https://pokeapi.co/api/v2/pokemon';

  /**
   * Effect to load the names
   *
   */
  loadNames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionsActions.loadNames),
      mergeMap(({ page }) => this.loadNames(page))
    );
  });

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) { }

  /**
   * Get name list
   */
  loadNames(page: number): Observable<TransactionsActions.TransactionsActionTypes> {
    let offset = INITIAL_OFFSET;
    let limit = INITIAL_LIMIT;
    let params = new HttpParams();
    params = params.append('offset', `${offset}`);
    params = params.append('limit', `${limit}`);
    return this.httpClient.get(`${this.path}`, { params: params }).pipe(
      map((items: PokemonResponse) => {
        return TransactionsActions.setNames({ pokemonData: items.results });
      }),
      catchError(() => of(TransactionsActions.setNames({ pokemonData: [] }))
      ))
  }
}
