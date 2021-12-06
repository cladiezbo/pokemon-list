export interface PokemonsState {
  pokemonData: PokemonResponse;
  searchByName: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}
