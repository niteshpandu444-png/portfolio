import VectorWordmark from "@/components/ui/vector-wordmark";
import { navItems, site } from "@/content/site";

/**
 * Minimal header: NK. Vector Wordmark on the left (single WebGL instance),
 * primary navigation on the right, plus a skip link for keyboard users.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hair bg-void/90 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-hair focus:bg-void focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
        <a
          href="#top"
          aria-label={`${site.fullName} — Home`}
          className="shrink-0 rounded-sm"
        >
          <span className="block h-9 w-[96px] sm:h-11 sm:w-[112px]">
            <VectorWordmark
              text={site.monogram}
              background="#000000"
              textColor="#FFFFFF"
              shade="#A1A4A5"
              accent="#9281F7"
              handles={{ labels: false }}
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm px-2 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-2.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
