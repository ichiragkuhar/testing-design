"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navFor } from "./nav";

/** Primary nav list for one design; marks the current page. */
export default function NavLinks({ base, className }: { base: string; className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {navFor(base).map((item) => (
        <li key={item.href}>
          <Link href={item.href} prefetch={false} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
