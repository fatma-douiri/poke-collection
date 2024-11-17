import { TPokemon } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";
import { cn } from "@/lib/utils";

type TPokemonGridProps = {
  pokemons: TPokemon[];
  onPokemonAction: (pokemon: TPokemon) => Promise<void>;
  actionLabel: string;
  className?: string;
};

export function PokemonGrid({
  pokemons,
  onPokemonAction,
  actionLabel,
  className,
}: TPokemonGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
        "auto-rows-fr",
        className,
      )}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.pokemonId}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
          onAction={() => onPokemonAction(pokemon)}
          actionLabel={actionLabel}
        />
      ))}
    </div>
  );
}
