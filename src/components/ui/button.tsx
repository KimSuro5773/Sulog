import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { mergeClassNames } from "@/lib/merge-class-names";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-label whitespace-nowrap transition-[background-color,color] duration-fast select-none data-disabled:pointer-events-none motion-safe:active:scale-98 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-solid text-on-brand-solid hover:bg-brand-solid-hover active:bg-brand-solid-pressed data-disabled:bg-disabled data-disabled:text-disabled",
        secondary:
          "bg-brand-weak text-brand hover:bg-brand-weak-hover hover:text-brand-hover active:bg-brand-weak-pressed active:text-brand-hover data-disabled:bg-disabled data-disabled:text-disabled",
        ghost:
          "text-neutral-muted hover:bg-neutral-weak active:bg-neutral-weak-pressed data-disabled:text-disabled",
      },
      size: {
        sm: "h-8 px-3 [&_svg:not([class*='size-'])]:size-4",
        md: "h-10 px-4 [&_svg:not([class*='size-'])]:size-4.5",
        lg: "h-12 px-6 [&_svg:not([class*='size-'])]:size-5",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={mergeClassNames(
        buttonVariants({ variant, size, fullWidth }),
        className,
      )}
      {...props}
    />
  );
}
