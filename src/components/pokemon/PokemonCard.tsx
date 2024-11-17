import Image from "next/image";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

type TPokemonCardProps = {
  name: string;
  imageUrl: string;
  onAction: () => void;
  actionLabel: string;
  className?: string;
};

export function PokemonCard({
  name,
  imageUrl,
  onAction,
  actionLabel,
  className,
}: TPokemonCardProps) {
  return (
    <div
      className={cn(
        "bg-oktee-card rounded-card p-4 flex flex-col items-center",
        "aspect-square",
        className,
      )}
    >
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="pixelated"
          unoptimized
        />
      </div>
      <h3 className="text-oktee-text font-medium mt-2 capitalize text-center">
        {name}
      </h3>
      <Button
        onClick={onAction}
        className={cn("mt-4 w-full", "hover:scale-105 transition-transform")}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
