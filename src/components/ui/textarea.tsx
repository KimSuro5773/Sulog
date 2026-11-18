import { Field as FieldPrimitive } from "@base-ui/react/field";

import { fieldControlClassName } from "@/components/ui/field";
import { mergeClassNames } from "@/lib/merge-class-names";

type TextareaProps = Omit<
  FieldPrimitive.Control.Props,
  "className" | "render"
> & {
  className?: string;
};

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <FieldPrimitive.Control
      data-slot="textarea"
      render={<textarea />}
      className={mergeClassNames(
        fieldControlClassName,
        "max-h-45 min-h-24 resize-y py-3",
        className,
      )}
      {...props}
    />
  );
}
