import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface SpanRootProps extends ComponentProps<"div"> {
  error?: boolean;
  className?: string;
}

export function DivRoot({ error = false, className, ...props }: SpanRootProps) {
  return (
    <div
      data-error={error}
      className={cn(
        "group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger",
        className
      )}
      {...props}
    />
  );
}

interface SpanIconProps extends ComponentProps<"span"> {}

export function SpanIcon({ ...props }: SpanIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  );
}
