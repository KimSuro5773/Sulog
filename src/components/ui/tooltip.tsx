import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

export function TooltipProvider(props: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider {...props} />;
}

type TooltipProps = Omit<TooltipPrimitive.Root.Props, "children"> & {
  label: string;
  children: React.ReactElement;
};

export function Tooltip({ label, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...props}>
      <TooltipPrimitive.Trigger render={children} />
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner
          side="bottom"
          sideOffset={8}
          className="z-toast"
        >
          <TooltipPrimitive.Popup
            data-slot="tooltip"
            aria-hidden="true"
            className="max-w-60 rounded-sm bg-layer-floating px-2.5 py-1.5 text-caption font-medium text-neutral shadow-md"
          >
            {label}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
