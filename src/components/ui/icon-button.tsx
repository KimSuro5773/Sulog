import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { mergeClassNames } from "@/lib/merge-class-names";

export const iconButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full transition-[background-color,color] duration-fast select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-solid text-on-brand-solid hover:bg-brand-solid-hover active:bg-brand-solid-pressed data-disabled:bg-disabled data-disabled:text-disabled",
        secondary:
          "bg-brand-weak text-brand hover:bg-brand-weak-hover hover:text-brand-hover active:bg-brand-weak-pressed active:text-brand-hover data-disabled:bg-disabled data-disabled:text-disabled",
        ghost:
          "text-neutral-muted hover:bg-neutral-weak hover:text-neutral active:bg-neutral-weak-pressed active:text-neutral data-disabled:text-disabled",
      },
      size: {
        sm: "size-8",
        md: "size-hit",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  },
);

type IconButtonProps = Omit<ButtonPrimitive.Props, "className" | "aria-label"> &
  VariantProps<typeof iconButtonVariants> & {
    "aria-label": string;
    className?: string;
  };

export function IconButton({
  className,
  variant,
  size,
  ...props
}: IconButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="icon-button"
      className={mergeClassNames(
        iconButtonVariants({ variant, size }),
        className,
      )}
      {...props}
    />
  );
}
