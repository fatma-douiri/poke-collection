import { cn } from "@/lib/utils";

type TContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentContainer({
  children,
  className,
}: TContentContainerProps) {
  return (
    <div
      className={cn(
        "bg-oktee-card/30 backdrop-blur-sm rounded-2xl",
        "min-h-[500px] overflow-y-auto flex-grow",
        "shadow-2xl shadow-black/20",
        "border border-white/5",
        className,
      )}
    >
      <div className="p-6">{children}</div>
    </div>
  );
}
