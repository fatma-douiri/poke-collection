import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-lg transition-colors font-medium",
          variant === "primary"
            ? "bg-oktee-primary text-white hover:bg-oktee-primary/90"
            : "bg-oktee-card text-oktee-text hover:bg-oktee-card/90",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
