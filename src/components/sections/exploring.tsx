import { SectionHeading } from "@/components/ui/section-heading";
import { exploring } from "@/content/site";

/** Four compact learning areas, presented as study in progress. */
export function Exploring() {
  return (
    <section aria-labelledby="exploring-heading" className="border-b border-hair">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          label="CURRENTLY EXPLORING"
          title={exploring.heading}
          titleId="exploring-heading"
          description={exploring.description}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {exploring.areas.map((area) => (
            <li
              key={area.index}
              className="rounded-2xl border border-hair bg-void p-5"
            >
              <p className="font-mono text-xs text-accent">{area.index}</p>
              <h3 className="mt-3 text-lg text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
