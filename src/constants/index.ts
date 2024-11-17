export const APP = {
  NAME: "Poke APP",
  DESCRIPTION: "Pokemon collection application",
  PAGES: {
    BROWSE: {
      title: "Browse Page",
      label: "The browse",
      description: "Explore Pokémon and add them to your collection!",
    },
    COLLECTION: {
      title: "Collection Page",
      label: "My collection",
      description: "Here are all the Pokémon you've added to your collection!",
      emptyDescription: "Your collection is empty. Go browse some Pokémon!",
    },
  },
  POKEMON: {
    ACTIONS: {
      ADD: "Add",
      DELETE: "Delete",
    },
    PAGINATION: {
      NEXT: "Next",
      PREVIOUS: "Previous",
      ITEMS_PER_PAGE: 8,
      PAGE_DISPLAY: (current: number, total: number) =>
        `Page ${current}/${total}`,
    },
  },
} as const;

export type TPage = keyof typeof APP.PAGES;
