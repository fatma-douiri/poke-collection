import { APP } from "@/constants";

export const ROUTES = {
  BROWSE: "/browse",
  COLLECTION: "/collection",
} as const;

export const NAVIGATION_LINKS = [
  {
    href: ROUTES.BROWSE,
    title: APP.PAGES.BROWSE.title,
  },
  {
    href: ROUTES.COLLECTION,
    title: APP.PAGES.COLLECTION.title,
  },
] as const;
