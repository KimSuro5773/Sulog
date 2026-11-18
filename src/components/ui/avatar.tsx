import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cva } from "class-variance-authority";
import Image from "next/image";

import { mergeClassNames } from "@/lib/merge-class-names";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden rounded-full bg-neutral-weak font-semibold text-neutral-muted select-none",
  {
    variants: {
      size: {
        sm: "size-6 text-[0.625rem]",
        md: "size-8 text-caption",
        lg: "size-14 text-[1.25rem]",
      },
    },
  },
);

const imageSizes = { sm: 24, md: 32, lg: 56 } as const;

type AvatarProps = Omit<
  AvatarPrimitive.Root.Props,
  "className" | "children"
> & {
  name: string;
  src?: string;
  size?: keyof typeof imageSizes;
  className?: string;
};

export function Avatar({
  name,
  src,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={mergeClassNames(avatarVariants({ size }), className)}
      {...props}
      aria-hidden="true"
    >
      <AvatarPrimitive.Fallback className="absolute inset-0 flex items-center justify-center">
        {getInitial(name)}
      </AvatarPrimitive.Fallback>
      {src && (
        <AvatarPrimitive.Image
          keepMounted
          className="absolute inset-0 size-full object-cover data-error:invisible data-loading:invisible"
          render={
            <Image
              src={src}
              alt=""
              width={imageSizes[size]}
              height={imageSizes[size]}
            />
          }
        />
      )}
    </AvatarPrimitive.Root>
  );
}

function getInitial(name: string) {
  const [initial = ""] = Array.from(name.trim());
  return initial.toUpperCase();
}
