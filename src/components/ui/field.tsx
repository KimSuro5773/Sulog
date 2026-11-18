import { Field as FieldPrimitive } from "@base-ui/react/field";
import { CircleAlert } from "lucide-react";

import { mergeClassNames } from "@/lib/merge-class-names";

export const fieldControlClassName =
  "w-full min-w-0 rounded-md border border-neutral-weak bg-neutral-weak px-4 text-body text-neutral transition-[border-color,box-shadow] duration-fast placeholder:text-neutral-subtle enabled:not-focus:not-data-invalid:hover:border-neutral-weak-hover focus:border-(--stroke-focus-ring) focus:shadow-[inset_0_0_0_0.5px_var(--stroke-focus-ring)] focus:outline-hidden data-invalid:border-critical data-invalid:shadow-[inset_0_0_0_0.5px_var(--stroke-critical)] disabled:border-neutral-subtle disabled:text-disabled disabled:placeholder:text-disabled";

type FieldProps = Omit<FieldPrimitive.Root.Props, "className"> & {
  className?: string;
};

export function Field({ className, ...props }: FieldProps) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={mergeClassNames(
        "flex flex-wrap items-start gap-x-4 gap-y-2",
        className,
      )}
      {...props}
    />
  );
}

type FieldDescriptionProps = Omit<
  FieldPrimitive.Description.Props,
  "className"
> & {
  className?: string;
};

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={mergeClassNames(
        "min-w-0 flex-1 text-caption text-neutral-subtle",
        className,
      )}
      {...props}
    />
  );
}

type FieldErrorProps = Omit<FieldPrimitive.Error.Props, "className"> & {
  className?: string;
};

export function FieldError({
  className,
  children,
  match = true,
  ...props
}: FieldErrorProps) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      match={match}
      className={mergeClassNames(
        "flex min-w-0 flex-1 gap-1.5 text-caption text-critical",
        className,
      )}
      {...props}
    >
      <span className="flex h-lh shrink-0 items-center">
        <CircleAlert className="size-4" aria-hidden="true" />
      </span>
      {children}
    </FieldPrimitive.Error>
  );
}

type FieldCountProps = Omit<
  FieldPrimitive.Description.Props,
  "className" | "children"
> & {
  current: number;
  max: number;
  className?: string;
};

export function FieldCount({
  current,
  max,
  className,
  ...props
}: FieldCountProps) {
  return (
    <FieldPrimitive.Description
      data-slot="field-count"
      className={mergeClassNames(
        "ml-auto shrink-0 text-caption text-neutral-subtle tabular-nums",
        current > max && "text-critical",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true">
        {current} / {max}
      </span>
      <span className="sr-only">
        최대 {max}자 중 {current}자 입력
      </span>
    </FieldPrimitive.Description>
  );
}
