import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva } from "class-variance-authority";

import { mergeClassNames } from "@/lib/merge-class-names";

export const chipVariants = cva(
  "inline-flex h-7 shrink-0 items-center justify-center rounded-full px-3 text-caption whitespace-nowrap transition-[background-color,color] duration-fast select-none data-disabled:pointer-events-none data-disabled:bg-neutral-weak data-disabled:text-disabled",
  {
    variants: {
      selected: {
        true: "bg-brand-weak text-brand",
        false: "bg-neutral-weak text-neutral-muted hover:text-neutral",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

type ChipProps = Omit<
  TogglePrimitive.Props,
  "className" | "pressed" | "defaultPressed" | "onPressedChange"
> & {
  selected?: boolean;
  onSelectedChange?: TogglePrimitive.Props["onPressedChange"];
  className?: string;
};

export function Chip({
  className,
  selected = false,
  onSelectedChange,
  ...props
}: ChipProps) {
  return (
    <TogglePrimitive
      data-slot="chip"
      pressed={selected}
      onPressedChange={onSelectedChange}
      className={mergeClassNames(chipVariants({ selected }), className)}
      {...props}
    />
  );
}
