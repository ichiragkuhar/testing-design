/**
 * The vault dial: graduated rings in gold hairline. The outer ring turns
 * with the page scroll and the inner ring counter-turns (CSS scroll-driven
 * animation; static where unsupported or with reduced motion).
 */

function ticks(count: number, r: number, short: number, long: number, every: number) {
  let d = "";
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const len = i % every === 0 ? long : short;
    const x1 = Math.cos(a) * r;
    const y1 = Math.sin(a) * r;
    const x2 = Math.cos(a) * (r - len);
    const y2 = Math.sin(a) * (r - len);
    d += `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  return d;
}

const OUTER_TICKS = ticks(120, 98, 2.2, 5.5, 10);
const INNER_TICKS = ticks(60, 82, 1.6, 3.6, 5);

export default function VaultDial({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor">
        <g data-ring="outer">
          <circle r={99} strokeWidth="0.35" />
          <path d={OUTER_TICKS} strokeWidth="0.3" />
          <circle r={91.5} strokeWidth="0.3" />
          <path d="M0 -99 L0 -88" strokeWidth="0.9" />
        </g>
        <g data-ring="inner">
          <circle r={83} strokeWidth="0.3" />
          <path d={INNER_TICKS} strokeWidth="0.25" />
          <circle r={76} strokeWidth="0.25" strokeDasharray="0.6 1.8" />
        </g>
      </g>
    </svg>
  );
}
