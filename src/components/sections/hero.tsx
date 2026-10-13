import { Cube } from "@/components/ui/cube";
import { OutlineLink } from "@/components/ui/outline-link";
import { hero } from "@/content/site";

/** Hero: editorial text layout beside a decorative CSS 3D cube. */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-hair">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-accent">
            {hero.label}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-editorial text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            {hero.supportingText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OutlineLink href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </OutlineLink>
            <OutlineLink href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </OutlineLink>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center md:pt-4">
          <Cube />
        </div>
      </div>
    </section>
  );
}
