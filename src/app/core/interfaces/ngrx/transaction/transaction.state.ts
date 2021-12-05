export interface TransactionState {
  pokemonData: PokemonData[];
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
