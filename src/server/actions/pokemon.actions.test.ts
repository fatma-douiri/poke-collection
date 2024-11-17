import {
  addPokemonToCollection,
  removePokemonFromCollection,
  getAllCollectionPokemons,
} from "./pokemon.actions";
import { db } from "@/lib/db";

// Mock the db module
jest.mock("@/lib/db", () => ({
  db: {
    insert: jest.fn(),
    delete: jest.fn(),
    select: jest.fn(),
  },
}));

describe("Pokemon actions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should add pokemon to collection", async () => {
    const mockPokemon = {
      pokemonId: 1,
      name: "Bulbasaur",
      imageUrl: "bulbasaur.png",
    };

    (db.insert as jest.Mock).mockReturnValue({
      values: jest.fn().mockResolvedValue(mockPokemon),
    });

    const result = await addPokemonToCollection(
      mockPokemon.pokemonId,
      mockPokemon.name,
      mockPokemon.imageUrl,
    );

    expect(db.insert).toHaveBeenCalled();
    expect(result).toEqual(mockPokemon);
  });

  it("should remove pokemon from collection", async () => {
    const pokemonId = 1;

    (db.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockResolvedValue({ success: true }),
    });

    const result = await removePokemonFromCollection(pokemonId);

    expect(db.delete).toHaveBeenCalled();
    expect(result).toEqual({ success: true });
  });

  it("should get all pokemon from collection", async () => {
    const mockPokemons = [
      { pokemonId: 1, name: "Bulbasaur", imageUrl: "bulbasaur.png" },
      { pokemonId: 4, name: "Charmander", imageUrl: "charmander.png" },
    ];

    (db.select as jest.Mock).mockReturnValue({
      from: jest.fn().mockResolvedValue(mockPokemons),
    });

    const result = await getAllCollectionPokemons();

    expect(db.select).toHaveBeenCalled();
    expect(result).toEqual(mockPokemons);
  });
});
