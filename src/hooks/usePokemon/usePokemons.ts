import { use, useEffect } from "react";
import { getPokemonsList } from "@/lib/api/pokenodeClient";
import { TPokemon } from "@/types/pokemon";
import {
  addPokemonToCollection,
  getAllCollectionPokemons,
  removePokemonFromCollection,
} from "@/server/actions/pokemon.actions";
import { useState } from "react";
import { mapToPokemon } from "@/lib/utils/mapToPokemon";

export function usePokemons() {
  const pokemonsData = use(getPokemonsList());
  const [collection, setCollection] = useState<TPokemon[]>([]);

  useEffect(() => {
    getAllCollectionPokemons()
      .then(setCollection)
      .catch((error) => {
        console.error("Error fetching collection:", error);
        throw error;
      });
  }, []);

  const pokemons = pokemonsData.map(mapToPokemon);

  const addToCollection = async (newPokemon: TPokemon) => {
    try {
      await addPokemonToCollection(
        newPokemon.pokemonId,
        newPokemon.name,
        newPokemon.imageUrl,
      );
      setCollection((prevCollection) => [...prevCollection, newPokemon]);
    } catch (error) {
      console.error("Error adding Pokemon:", error);
      throw error;
    }
  };

  const removeFromCollection = async (pokemon: TPokemon) => {
    try {
      await removePokemonFromCollection(pokemon.pokemonId);
      setCollection((prevCollection) =>
        prevCollection.filter((p) => p.pokemonId !== pokemon.pokemonId),
      );
    } catch (error) {
      console.error("Error removing Pokemon:", error);
      throw error;
    }
  };

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      !collection.some(
        (collected) => collected.pokemonId === pokemon.pokemonId,
      ),
  );

  return {
    collection,
    filteredPokemons,
    addToCollection,
    removeFromCollection,
  };
}
