import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/site";

/** About: concise, authentic student-builder positioning beside a portrait. */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-b border-hair"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          label="ABOUT"
          title={about.heading}
          titleId="about-heading"
        />
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-2xl space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
          </div>
          <figure className="mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-none">
            <Image
              src="/images/about/nitesh.jpg"
              alt="Portrait of Nitesh Kumar"
              width={400}
              height={580}
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 256px"
              className="h-auto w-full rounded-2xl border border-hair object-cover object-top"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
