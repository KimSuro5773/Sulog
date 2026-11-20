import { mergeClassNames } from "@/lib/merge-class-names";

type EmptyStateProps = Omit<React.ComponentProps<"div">, "title"> & {
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function EmptyState({
  icon,
  title,
  description,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={mergeClassNames(
        "flex flex-col items-center gap-2 px-5 py-10 text-center",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="mb-2 flex size-11 items-center justify-center rounded-full bg-neutral-weak text-neutral-subtle [&>svg]:size-5"
      >
        {icon}
      </span>
      <p className="text-body-strong wrap-anywhere text-neutral">{title}</p>

      {description && (
        <p className="max-w-105 text-body-sm text-neutral-muted">
          {description}
        </p>
      )}
    </div>
  );
}
