import { createSelector } from "@ngrx/store";
import { GlobalState } from "src/app/core/interfaces";
import { PokemonResponse } from "src/app/core/interfaces/ngrx/pokemons";

const pokemonData = (state: GlobalState) => state.pokemons.pokemonData;

const searchByNameSelector = (state: GlobalState) => state.pokemons.searchByName;

export const pokemonFilterSelector = createSelector(pokemonData, searchByNameSelector, getPokemonSearchName);

export const totalPokemonDataSelector = createSelector(pokemonData, getTotalPokemon);


function getPokemonSearchName(pokemonData: PokemonResponse, searchByName: string) {
    return pokemonData && pokemonData.results ? pokemonData.results.filter((pokemon) => {
        if (pokemon.name.includes(searchByName)) {
            return pokemon;
        }
    }) : null
}

function getTotalPokemon(pokemonData: PokemonResponse) {
    return pokemonData && pokemonData.count ? pokemonData.count : 0;
}