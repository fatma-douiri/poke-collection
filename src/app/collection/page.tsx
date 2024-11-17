"use client";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { usePokemons } from "@/hooks/usePokemon/usePokemons";
import { APP } from "@/constants";
import { Pagination } from "@/components/pokemon/Pagination";
import { usePagination } from "@/hooks/usePagination/usePagination";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { AsyncBoundary } from "@/components/ui/AsyncBoundary";

function CollectionContent() {
  const { collection, removeFromCollection } = usePokemons();
  const {
    paginatedItems: paginatedCollection,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = usePagination({
    items: collection,
  });

  if (collection.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-oktee-text/40">
        {APP.PAGES.COLLECTION.emptyDescription}
      </div>
    );
  }

  return (
    <>
      <PokemonGrid
        pokemons={paginatedCollection}
        onPokemonAction={removeFromCollection}
        actionLabel={APP.POKEMON.ACTIONS.DELETE}
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

export default function CollectionPage() {
  return (
    <ContentContainer>
      <div className="h-full flex flex-col">
        <h1 className="text-xl font-bold text-oktee-text mb-4">
          {APP.PAGES.COLLECTION.title}
        </h1>
        <div className="text-oktee-text/60 mb-6">
          {APP.PAGES.COLLECTION.description}
        </div>

        <AsyncBoundary>
          <CollectionContent />
        </AsyncBoundary>
      </div>
    </ContentContainer>
  );
}
