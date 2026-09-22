"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DESIGNS, within } from "./nav";
import styles from "./DesignSwitcher.module.css";

/* Review tool for sharing the home-page directions. Hide it with NEXT_PUBLIC_DESIGN_SWITCHER=off. */

/** Split a path into the active design and the page within it, so switching keeps the page. */
function locate(pathname: string) {
  const match = DESIGNS.find((d) => d.base && (pathname === d.base || pathname.startsWith(d.base + "/")));
  const active = match ?? DESIGNS[0];
  const page = active.base ? pathname.slice(active.base.length) || "/" : pathname;
  return { active, page };
}

export default function DesignSwitcher() {
  const pathname = usePathname();
  const { active, page } = locate(pathname);
  return (
    <nav className={styles.switcher} aria-label="Design options">
      <span className={styles.label}>Design</span>
      {DESIGNS.map((d) => (
        <Link
          key={d.n}
          href={within(d.base, page)}
          prefetch={false}
          className={styles.option}
          aria-current={d.n === active.n ? "page" : undefined}
        >
          <span className={styles.n}>{d.n}</span>
          <span className={styles.name}>{d.name}</span>
        </Link>
      ))}
    </nav>
  );
}
