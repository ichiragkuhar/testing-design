import styles from "./Thread.module.css";

export const STEPS = [
  "Unknown",
  "Discovered",
  "Built in private markets",
  "Chosen",
  "Preserved",
  "Entrusted",
] as const;

/**
 * The argument's running thread. Each section carries every step so far,
 * so earlier steps stay in view as the reader moves down the page.
 */
export default function Thread({ at, className }: { at: number; className?: string }) {
  return (
    <div className={`${styles.thread} ${className ?? ""}`}>
      <ol aria-label="The argument so far">
        {STEPS.slice(0, at + 1).map((step, i) => (
          <li key={step} aria-current={i === at ? "step" : undefined}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
