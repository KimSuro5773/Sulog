import { CodeXml, Mail } from "lucide-react";

import { iconButtonVariants } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { mergeClassNames } from "@/lib/merge-class-names";

const socialLinks = [
  { href: "https://github.com/KimSuro5773", label: "GitHub", Icon: CodeXml },
  { href: "mailto:kimsuro1123@gmail.com", label: "이메일", Icon: Mail },
];

const socialLinkClassName = mergeClassNames(
  iconButtonVariants(),
  "text-neutral-subtle hover:text-neutral-subtle active:text-neutral-subtle",
);

export function Footer() {
  return (
    <footer className="bg-neutral-subtle">
      <div className="mx-auto flex max-w-list flex-col gap-2 px-gutter py-8 tablet:gap-5 tablet:py-12">
        <div className="flex flex-col gap-1">
          <p className="text-footer-title text-neutral-subtle">Sulog</p>
          <p className="text-body text-neutral-subtle">
            배운 것을 기록하는 개발 블로그입니다.
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-caption text-neutral-subtle">
            © 2026 Sulog. All rights reserved.
          </p>
          <ul className="flex shrink-0 gap-1">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <Tooltip label={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (새 창)`}
                    className={socialLinkClassName}
                  >
                    <Icon />
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
