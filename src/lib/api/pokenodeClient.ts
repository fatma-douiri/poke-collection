import { PokemonClient } from "pokenode-ts";
import { pokemonSchema } from "../validations/pokemon.schema";
import { cache } from "react";

const api = new PokemonClient();

export const getPokemonsList = cache(async () => {
  try {
    const response = await api.listPokemons(0, 20);
    return response.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
});

export const getPokemonDetailsById = cache(async (id: number) => {
  try {
    const response = await api.getPokemonById(id);

    const validation = pokemonSchema.safeParse(response);
    if (!validation.success) {
      if (process.env.NODE_ENV !== "test") {
        console.error("Validation failed:", validation.error);
      }
      return null;
    }

    const { id: validatedId, name, sprites } = validation.data;
    const imageUrl = sprites?.front_default ?? "";

    return {
      id: validatedId,
      name,
      imageUrl,
    };
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error(`Error fetching Pokémon details for ID (${id}):`, error);
    }
    throw error;
  }
});
