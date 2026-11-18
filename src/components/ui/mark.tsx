import { mergeClassNames } from "@/lib/merge-class-names";

type MarkProps = React.ComponentProps<"mark">;

export function Mark({ className, ...props }: MarkProps) {
  return (
    <mark
      data-slot="mark"
      className={mergeClassNames(
        "bg-transparent font-semibold text-brand",
        className,
      )}
      {...props}
    />
  );
}
