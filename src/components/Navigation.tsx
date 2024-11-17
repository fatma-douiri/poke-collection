"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { NAVIGATION_LINKS } from "@/constants/routes";
import { isActivePage } from "@/lib/utils/routing";
import { APP } from "@/constants";

export function Navigation() {
  const pathname = usePathname();
  const { isCollection } = isActivePage(pathname);

  const labelMenu = isCollection
    ? APP.PAGES.COLLECTION.label
    : APP.PAGES.BROWSE.label;

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4">
        {NAVIGATION_LINKS.map(({ href, title }) => (
          <Link key={href} href={href}>
            <Button
              variant={pathname === href ? "secondary" : "primary"}
              disabled={pathname === href}
            >
              {title}
            </Button>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden group">
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <span>{labelMenu}</span>
          <span className="transition-transform duration-200 group-hover:rotate-180">
            ▼
          </span>
        </div>

        <div
          className={`
            absolute right-0 
            mt-2
            bg-oktee-card/95 
            backdrop-blur-sm
            rounded-xl 
            shadow-lg
            z-50
            transition-all 
            duration-200
            opacity-0 
            invisible
            group-hover:opacity-100 
            group-hover:visible
            group-hover:translate-y-0
            -translate-y-2
          `}
        >
          <nav className="p-2 flex flex-col gap-1 min-w-[180px]">
            {NAVIGATION_LINKS.map(({ href, title }) => (
              <Link key={href} href={href}>
                <Button
                  variant={pathname === href ? "secondary" : "primary"}
                  disabled={pathname === href}
                  className="w-full justify-center"
                >
                  {title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
