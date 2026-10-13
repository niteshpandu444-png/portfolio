import type { ReactNode } from "react";

type OutlineLinkProps = {
  href: string;
  children: ReactNode;
  /** External destinations open in a new tab with safe rel attributes. */
  external?: boolean;
};

/** Outlined action link — 6px corners, hairline border, restrained hover. */
export function OutlineLink({
  href,
  children,
  external = false,
}: OutlineLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-md border border-hair px-5 py-2.5 text-sm text-ink transition-colors duration-150 hover:border-accent hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}
