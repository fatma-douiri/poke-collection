import { ROUTES } from "@/constants/routes";

export function isActivePage(pathname: string | null) {
  return {
    isBrowse: pathname === ROUTES.BROWSE,
    isCollection: pathname === ROUTES.COLLECTION,
  };
}
