"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "./nav";
import Arrow from "./Arrow";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header} data-open={open || undefined}>
      <div className={`page-grid ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Suvira Asset Management, home">
          <Image
            src="/brand/suvira-logo-horizontal.png"
            alt=""
            width={3376}
            height={1029}
            priority
            sizes="120px"
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={`action ${styles.cta}`}>
          Request a conversation
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="site-menu" className={styles.menu} hidden={!open}>
        <ul className="page-grid">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} prefetch={false} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.menuAction}>
            <Link href="/contact" className="action" onClick={() => setOpen(false)}>
              Request a conversation <Arrow />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
