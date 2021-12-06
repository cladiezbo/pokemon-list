import { Component, OnInit } from '@angular/core';
import { PokemonsFacade } from 'src/app/core/ngrx/ngrx-pokemon';

@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: ['./pokemons-table.component.scss']
})
export class PokemonsTableComponent implements OnInit {
  /**
   * List of columns names to show in template
   *
   */
  displayedColumns = ['name'];

  /**
   * Value of the search
   */
  searchValue: string;


  constructor(public pokemonsFacade: PokemonsFacade) { }

  ngOnInit() {
    this.pokemonsFacade.loadPokemonNames(0);
  }

  /**
   * Apply the filters with the value of the input
   */
  applyFilter($event) {
    this.searchValue = ($event.target as HTMLInputElement).value;
    this.pokemonsFacade.searchByName(this.searchValue.toLowerCase());
  }
}
