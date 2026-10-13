import { footer, site } from "@/content/site";

/** Compact footer: text monogram (no second WebGL instance), descriptor, year. */
export function SiteFooter() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="flex flex-wrap items-baseline gap-2 text-sm text-muted">
          <span className="font-mono text-ink">{site.monogram}</span>
          <span aria-hidden="true" className="text-muted">
            /
          </span>
          <span>{footer.descriptor}</span>
        </p>
        <p className="text-xs text-muted">
          © {site.year} {site.name}
        </p>
      </div>
    </footer>
  );
}
