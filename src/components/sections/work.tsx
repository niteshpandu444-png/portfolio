import { OutlineLink } from "@/components/ui/outline-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, work } from "@/content/site";

/**
 * Selected work. Renders entries from src/content/site.ts when supplied and an
 * intentional empty state until then — the layout does not need rebuilding.
 */
export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-hair"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          label="SELECTED WORK"
          title={work.heading}
          titleId="work-heading"
          description={work.description}
        />

        {projects.length > 0 ? (
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.id}
                className="rounded-2xl border border-hair bg-void p-6 transition-colors duration-150 hover:border-accent/60"
              >
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-3 text-lg text-ink">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm transition-colors duration-150 hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-hair bg-void p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.18em] text-accent">
              {work.emptyState.label}
            </p>
            <p className="mt-3 text-lg text-ink">{work.emptyState.title}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {work.emptyState.description}
            </p>
          </div>
        )}

        <div className="mt-6">
          <OutlineLink href={work.githubLink.href} external>
            {work.githubLink.label}
          </OutlineLink>
        </div>
      </div>
    </section>
  );
}
