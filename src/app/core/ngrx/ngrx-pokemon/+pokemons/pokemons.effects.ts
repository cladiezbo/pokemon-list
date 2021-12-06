import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PokemonsActions from './pokemons.actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonResponse } from 'src/app/core/interfaces/ngrx/pokemons';

/**
 * Initial value to limit parameter
 */
const INITIAL_LIMIT = 20;

@Injectable()
export class PokemonsEffects {
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
      ofType(PokemonsActions.loadNames),
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
  loadNames(page: number): Observable<PokemonsActions.PokemonsActionTypes> {
    let offset = page === 0 ? page : INITIAL_LIMIT * (page + 1) - INITIAL_LIMIT;
    let params = new HttpParams();
    params = params.append('offset', `${offset}`);
    params = params.append('limit', `${INITIAL_LIMIT}`);
    return this.httpClient.get(`${this.path}`, { params: params }).pipe(
      map((items: PokemonResponse) => {
        return PokemonsActions.setNames({ items });
      }),
      catchError(() => of(PokemonsActions.setNames({ items: null }))
      ))
  }
}
