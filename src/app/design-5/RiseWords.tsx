import { Fragment } from "react";
import s from "./contemporary.module.css";

/**
 * Sets a headline so each word rises out of its own mask on load.
 * The words stay real text in reading order; only their transform animates,
 * and the page shows them in place when motion is reduced or CSS is missing.
 */
export default function RiseWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={s.riseMask}>
            <span className={s.riseWord} style={{ ["--i" as string]: i }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
