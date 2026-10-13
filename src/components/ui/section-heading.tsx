type SectionHeadingProps = {
  /** Small monospace technical label, rendered in the violet accent. */
  label: string;
  title: string;
  titleId: string;
  description?: string;
};

/** Shared section header: mono label, editorial serif heading, body copy. */
export function SectionHeading({
  label,
  title,
  titleId,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.18em] text-accent">{label}</p>
      <h2
        id={titleId}
        className="mt-4 font-editorial text-3xl leading-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-body">{description}</p>
      ) : null}
    </div>
  );
}
