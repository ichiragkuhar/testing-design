import { Fragment } from "react";
import s from "./monument.module.css";

/**
 * Content columns standing between pillars: a pillar (with capital and base)
 * at each side and between every pair. Pillars are decorative and hidden
 * from assistive tech; on small screens they lie down as horizontal lintels.
 */
export default function Colonnade<T>({
  items,
  render,
  getKey,
  as: Tag = "ul",
}: {
  items: readonly T[];
  render: (item: T) => React.ReactNode;
  getKey: (item: T) => string;
  as?: "ul" | "div";
}) {
  const Item = Tag === "ul" ? "li" : "div";
  return (
    <Tag className={s.colonnade} style={{ ["--cols" as string]: items.length }}>
      <Item className={s.pillar} aria-hidden="true" />
      {items.map((item) => (
        <Fragment key={getKey(item)}>
          <Item className={s.bay}>{render(item)}</Item>
          <Item className={s.pillar} aria-hidden="true" />
        </Fragment>
      ))}
    </Tag>
  );
}
