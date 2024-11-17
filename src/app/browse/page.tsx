"use client";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";
import { Pagination } from "@/components/pokemon/Pagination";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { usePokemons } from "@/hooks/usePokemon/usePokemons";
import { APP } from "@/constants";
import { usePagination } from "@/hooks/usePagination/usePagination";
import { AsyncBoundary } from "@/components/ui/AsyncBoundary";

function BrowseContent() {
  const { filteredPokemons, addToCollection } = usePokemons();
  const {
    paginatedItems: paginatedPokemons,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = usePagination({
    items: filteredPokemons,
  });

  return (
    <>
      <PokemonGrid
        pokemons={paginatedPokemons}
        onPokemonAction={addToCollection}
        actionLabel={APP.POKEMON.ACTIONS.ADD}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={goToNextPage}
          onPreviousPage={goToPreviousPage}
        />
      )}
    </>
  );
}

export default function BrowsePage() {
  return (
    <ContentContainer>
      <div className="h-full flex flex-col ">
        <h1 className="text-xl font-bold text-oktee-text mb-4">
          {APP.PAGES.BROWSE.title}
        </h1>
        <div className="text-oktee-text/60 mb-6">
          {APP.PAGES.BROWSE.description}
        </div>

        <AsyncBoundary>
          <BrowseContent />
        </AsyncBoundary>
      </div>
    </ContentContainer>
  );
}
