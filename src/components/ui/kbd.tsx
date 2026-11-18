import { mergeClassNames } from "@/lib/merge-class-names";

type KbdProps = React.ComponentProps<"kbd"> & {
  label?: string;
};

export function Kbd({ className, label, children, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={mergeClassNames(
        "inline-flex min-w-5 items-center justify-center rounded-sm bg-neutral-weak px-1.5 font-mono text-[0.75rem] leading-5 whitespace-nowrap text-neutral-subtle",
        className,
      )}
      {...props}
    >
      {label ? (
        <>
          <span aria-hidden="true">{children}</span>
          <span className="sr-only">{label}</span>
        </>
      ) : (
        children
      )}
    </kbd>
  );
}
