import { cva, type VariantProps } from "class-variance-authority";

import { mergeClassNames } from "@/lib/merge-class-names";

export const spinnerVariants = cva(
  "inline-block shrink-0 animate-[spin_800ms_linear_infinite] rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SpinnerProps = Omit<React.ComponentProps<"span">, "children"> &
  VariantProps<typeof spinnerVariants>;

export function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <span
      data-slot="spinner"
      className={mergeClassNames(spinnerVariants({ size }), className)}
      {...props}
      aria-hidden="true"
    />
  );
}
