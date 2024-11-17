import { cn } from "@/lib/utils";
import { APP } from "@/constants";
import { Button } from "../ui/Button";

type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  className?: string;
};

export function Pagination({
  currentPage,
  totalPages,
  onNextPage,
  className,
  onPreviousPage,
}: TPaginationProps) {
  return (
    <div className={cn("flex flex-col items-center mt-6 px-6", className)}>
      <div className="flex items-center justify-center gap-4 w-full">
        <Button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className={cn(
            "disabled:bg-oktee-card/50 text-white/80",
            "text-sm px-3 py-1.5 md:px-4 md:py-2",
            "min-w-[80px] md:min-w-[100px]",
          )}
        >
          {APP.POKEMON.PAGINATION.PREVIOUS}
        </Button>

        <span className="text-oktee-text/60 text-sm md:text-base min-w-[80px] text-center">
          {APP.POKEMON.PAGINATION.PAGE_DISPLAY(currentPage, totalPages)}
        </span>

        <Button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={cn(
            "disabled:bg-oktee-card/50 text-white/80",
            "text-sm px-3 py-1.5 md:px-4 md:py-2",
            "min-w-[80px] md:min-w-[100px]",
          )}
        >
          {APP.POKEMON.PAGINATION.NEXT}
        </Button>
      </div>
    </div>
  );
}
