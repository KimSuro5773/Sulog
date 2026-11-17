import { mergeClassNames } from "@/lib/merge-class-names";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={mergeClassNames(
        "animate-pulse rounded-sm bg-neutral-weak motion-reduce:animate-none",
        className,
      )}
      {...props}
      aria-hidden="true"
    />
  );
}
