type CubeProps = {
  /** Visual size of the cube in CSS length units (default 9rem). */
  size?: string;
};

/**
 * Decorative CSS 3D cube: pure-black faces, thin graphite edges, one slow
 * rotation. Hidden from assistive technologies and frozen under
 * prefers-reduced-motion (see globals.css).
 */
export function Cube({ size }: CubeProps) {
  const customSize = size
    ? ({
        "--nk-size": size,
        "--nk-half": `calc(${size} / 2)`,
      } as React.CSSProperties)
    : undefined;

  return (
    <div className="nk-scene" aria-hidden="true" style={customSize}>
      <div className="nk-cube">
        <div className="nk-cube__face nk-cube__face--back" />
        <div className="nk-cube__face nk-cube__face--bottom" />
        <div className="nk-cube__face nk-cube__face--left" />
        <div className="nk-cube__face nk-cube__face--right" />
        <div className="nk-cube__face nk-cube__face--top" />
        <div className="nk-cube__face nk-cube__face--front" />
      </div>
    </div>
  );
}
