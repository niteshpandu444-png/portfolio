import { SectionHeading } from "@/components/ui/section-heading";
import { contact, contactChannels } from "@/content/site";

/** Contact: invitation copy plus verified channels only. */
export function Contact() {
  const availableChannels = contactChannels.filter(
    (channel) => channel.value !== null,
  );
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-b border-hair"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          label="CONTACT"
          title={contact.heading}
          titleId="contact-heading"
          description={contact.description}
        />
        {availableChannels.length > 0 ? (
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {availableChannels.map((channel) => (
              <div
                key={channel.label}
                className="rounded-2xl border border-hair bg-void p-5"
              >
                <dt className="font-mono text-xs tracking-[0.14em] text-muted">
                  {channel.label}
                </dt>
                <dd className="mt-2 break-words text-sm text-body">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-sm transition-colors duration-150 hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
