import { z } from "zod";

export const PokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});
export type PokemonList = z.infer<typeof PokemonListSchema>;

export const pokemonSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string().min(1),
  sprites: z
    .object({
      front_default: z.string().url().optional(),
    })
    .optional(),
});

export type Pokemon = z.infer<typeof pokemonSchema>;
