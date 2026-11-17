import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { Children } from "react";

import { Spinner } from "@/components/ui/spinner";
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

const spinnerSizeClassNames = {
  sm: "size-4",
  md: "size-4.5",
  lg: "size-5",
} as const;

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    loading?: boolean;
  };

function replaceLabelWithSpinner(
  children: React.ReactNode,
  spinnerClassName: string,
) {
  return Children.map(children, (child) =>
    typeof child === "string" || typeof child === "number" ? (
      <span className="relative inline-flex items-center justify-center">
        <span className="opacity-0">{child}</span>
        <Spinner className={`absolute inset-0 m-auto ${spinnerClassName}`} />
      </span>
    ) : (
      child
    ),
  );
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  loading = false,
  disabled,
  focusableWhenDisabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      disabled={disabled || loading}
      focusableWhenDisabled={focusableWhenDisabled || loading}
      aria-busy={loading || undefined}
      className={mergeClassNames(
        buttonVariants({ variant, size, fullWidth }),
        className,
      )}
      {...props}
    >
      {loading
        ? replaceLabelWithSpinner(children, spinnerSizeClassNames[size ?? "md"])
        : children}
    </ButtonPrimitive>
  );
}
