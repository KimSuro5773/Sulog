"use client";

import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { Spinner } from "@/components/ui/spinner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-center"
      className="z-toast!"
      icons={{
        success: <CircleCheck className="text-positive" />,
        error: <CircleAlert className="text-critical" />,
        warning: <TriangleAlert className="text-warning" />,
        info: <Info className="text-informative" />,
        loading: <Spinner className="text-neutral-subtle" size="sm" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex w-(--width) items-start gap-2 rounded-md border border-neutral-subtle bg-layer-floating p-4 font-sans text-caption-strong text-neutral shadow-md data-[expanded=false]:data-[front=false]:*:opacity-0",
          icon: "relative flex size-5 shrink-0 items-center justify-center [&>svg]:size-5",
          loader: "flex",
          content: "flex min-w-0 flex-1 flex-col gap-0.5",
          description: "text-caption text-neutral-muted",
        },
      }}
      {...props}
    />
  );
}
