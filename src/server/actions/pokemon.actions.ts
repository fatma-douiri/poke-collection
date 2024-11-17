"use server";

import { db } from "@/lib/db";
import { pokemonCollection } from "@/lib/db/schema";
import { TPokemon } from "@/types/pokemon";
import { eq } from "drizzle-orm";

export async function addPokemonToCollection(
  pokemonId: number,
  name: string,
  imageUrl: string,
) {
  try {
    const result = await db.insert(pokemonCollection).values({
      pokemonId,
      name,
      imageUrl,
    });
    return result;
  } catch (error) {
    console.error("Error adding Pokemon to collection:", error);
    throw new Error("Failed to add Pokemon to collection");
  }
}

export async function removePokemonFromCollection(pokemonId: number) {
  try {
    const result = await db
      .delete(pokemonCollection)
      .where(eq(pokemonCollection.pokemonId, pokemonId));
    return result;
  } catch (error) {
    console.error("Error removing Pokemon from collection:", error);
    throw new Error("Failed to remove Pokemon from collection");
  }
}

export async function getAllCollectionPokemons(): Promise<TPokemon[]> {
  try {
    const result = await db.select().from(pokemonCollection);
    return result;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw new Error("Failed to fetch collection");
  }
}
