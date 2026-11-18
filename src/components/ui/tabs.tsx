"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva } from "class-variance-authority";

import { mergeClassNames } from "@/lib/merge-class-names";

type TabsProps = Omit<TabsPrimitive.Root.Props, "className"> & {
  className?: string;
};

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root data-slot="tabs" className={className} {...props} />
  );
}

const tabsListVariants = cva(
  "group/tabs-list relative flex scrollbar-none overflow-x-auto",
  {
    variants: {
      layout: {
        hug: "gap-6",
        fill: "",
      },
      divider: {
        true: "shadow-[inset_0_-1px_0_var(--stroke-neutral-muted)]",
        false: "",
      },
    },
  },
);

type TabsListProps = Omit<TabsPrimitive.List.Props, "className"> & {
  size?: "sm" | "md";
  layout?: "hug" | "fill";
  divider?: boolean;
  className?: string;
};

export function TabsList({
  className,
  size = "sm",
  layout = "hug",
  divider = false,
  children,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-size={size}
      data-layout={layout}
      className={mergeClassNames(
        tabsListVariants({ layout, divider }),
        className,
      )}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        renderBeforeHydration
        className="absolute bottom-0 left-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) bg-brand-solid transition-[translate,width] duration-base ease-standard motion-reduce:transition-none"
      />
    </TabsPrimitive.List>
  );
}

type TabsTriggerProps = Omit<TabsPrimitive.Tab.Props, "className"> & {
  className?: string;
};

export function TabsTrigger({
  className,
  children,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={mergeClassNames(
        "inline-flex scroll-mx-gutter items-center justify-center rounded-sm font-medium whitespace-nowrap text-neutral-subtle transition-[color] duration-fast select-none group-data-[layout=fill]/tabs-list:flex-1 group-data-[layout=fill]/tabs-list:px-3 group-data-[size=md]/tabs-list:min-h-11 group-data-[size=md]/tabs-list:text-body group-data-[size=sm]/tabs-list:min-h-hit group-data-[size=sm]/tabs-list:text-label hover:text-neutral focus-visible:-outline-offset-2 data-active:font-semibold data-active:text-neutral data-disabled:pointer-events-none data-disabled:text-disabled",
        className,
      )}
      {...props}
    >
      <span className="grid justify-items-center">
        <span className="col-start-1 row-start-1">{children}</span>
        <span
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 font-semibold"
        >
          {children}
        </span>
      </span>
    </TabsPrimitive.Tab>
  );
}

type TabsContentProps = Omit<TabsPrimitive.Panel.Props, "className"> & {
  className?: string;
};

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={className}
      {...props}
    />
  );
}
