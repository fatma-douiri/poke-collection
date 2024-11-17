import { NamedAPIResource } from "pokenode-ts";
import { TPokemon } from "@/types/pokemon";

export const mapToPokemon = (pokemon: NamedAPIResource): TPokemon => {
  const pokemonId = parseInt(pokemon.url.split("/")[6]);
  return {
    pokemonId,
    name: pokemon.name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
  };
};
