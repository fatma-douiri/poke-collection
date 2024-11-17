import {
  getPokemonDetailsById,
  getPokemonsList,
} from "@/lib/api/pokenodeClient";
import { PokemonClient } from "pokenode-ts";

jest.mock("pokenode-ts", () => ({
  PokemonClient: jest.fn().mockImplementation(() => ({
    listPokemons: jest.fn().mockResolvedValue({
      count: 2,
      next: null,
      previous: null,
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    }),
    getPokemonById: jest.fn(),
  })),
}));

describe("pokenodeClient API functions", () => {
  let mockGetPokemonById: jest.Mock;

  beforeEach(() => {
    mockGetPokemonById = (PokemonClient as jest.Mock).mock.results[0].value
      .getPokemonById;
    mockGetPokemonById.mockReset();
  });

  describe("getPokemonsList", () => {
    it("should fetch and return the list of pokemons", async () => {
      const pokemons = await getPokemonsList();
      expect(pokemons).toHaveLength(2);
      expect(pokemons[0].name).toBe("pikachu");
    });
  });

  describe("getPokemonDetailsById", () => {
    it("should fetch and return pokemon details", async () => {
      mockGetPokemonById.mockResolvedValueOnce({
        id: 25,
        name: "pikachu",
        sprites: { front_default: "https://example.com/pikachu.png" },
      });

      const pokemon = await getPokemonDetailsById(25);
      expect(pokemon).toEqual({
        id: 25,
        name: "pikachu",
        imageUrl: "https://example.com/pikachu.png",
      });
    });

    it("should handle invalid pokemon data", async () => {
      mockGetPokemonById.mockResolvedValueOnce({
        id: "invalid",
        name: "",
        sprites: null,
      });

      const pokemon = await getPokemonDetailsById(25);
      expect(pokemon).toBeNull();
    });
  });
});
