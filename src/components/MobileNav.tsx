"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

/**
 * Small-screen navigation for a design, built on <details> so it opens and
 * closes with keyboard and assistive tech natively, and works without JS.
 * Each design styles it through the class names it passes in.
 */
export default function MobileNav({
  base,
  className,
  summaryClassName,
  listClassName,
}: {
  base: string;
  className?: string;
  summaryClassName?: string;
  listClassName?: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  // close after navigating to another page
  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  // close on Escape, returning focus to the toggle
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        el.open = false;
        el.querySelector("summary")?.focus();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  return (
    <details ref={ref} className={className}>
      <summary className={summaryClassName}>Menu</summary>
      <nav aria-label="Primary">
        <NavLinks base={base} className={listClassName} />
      </nav>
    </details>
  );
}
