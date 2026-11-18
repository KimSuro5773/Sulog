import { Input as InputPrimitive } from "@base-ui/react/input";

import { fieldControlClassName } from "@/components/ui/field";
import { mergeClassNames } from "@/lib/merge-class-names";

type InputProps = Omit<InputPrimitive.Props, "className"> & {
  icon?: React.ReactNode;
  className?: string;
};

export function Input({ icon, className, ...props }: InputProps) {
  const input = (
    <InputPrimitive
      data-slot="input"
      className={mergeClassNames(
        fieldControlClassName,
        "peer h-13 [&::-webkit-search-cancel-button]:appearance-none",
        icon && "pl-12",
        className,
      )}
      {...props}
    />
  );

  if (!icon) return input;

  return (
    <span className="relative flex w-full items-center">
      {input}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 flex text-neutral-subtle peer-disabled:text-disabled [&>svg]:size-5"
      >
        {icon}
      </span>
    </span>
  );
}
