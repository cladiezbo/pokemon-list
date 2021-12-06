import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonsEffects, PokemonsFacade, pokemonsReducer } from './+pokemons';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pokemons', pokemonsReducer),
    EffectsModule.forFeature([
      PokemonsEffects
    ])
  ],
})
export class NgrxPokemonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxPokemonsModule,
      providers: [PokemonsFacade]
    };
  }
}
