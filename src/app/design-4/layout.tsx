import Image from "next/image";
import Link from "next/link";
import { Jost } from "next/font/google";
import NavLinks from "@/components/NavLinks";
import MobileNav from "@/components/MobileNav";
import { SEBI_REG, navFor, within } from "@/components/nav";
import s from "./vault.module.css";

const BASE = "/design-4";

const jost = Jost({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.vault} ${jost.variable}`}>
      <header className={s.header}>
        <div className={s.headerRow}>
          <Link href={BASE} className={s.logo} aria-label="Suvira Asset Management, home">
            <Image
              src="/brand/suvira-logo-horizontal-reverse.png"
              alt=""
              width={3376}
              height={1029}
              priority
              sizes="128px"
            />
          </Link>
          <nav className={s.nav} aria-label="Primary">
            <NavLinks base={BASE} />
          </nav>
          <Link href={within(BASE, "/contact")} className={s.headerCta}>
            Request a conversation
          </Link>
          <MobileNav
            base={BASE}
            className={s.menu}
            summaryClassName={s.menuToggle}
            listClassName={s.menuList}
          />
        </div>
      </header>

      {children}

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <Image
            className={s.footerMark}
            src="/brand/suvira-wordmark-full-reverse.png"
            alt="Suvira Asset Management LLP"
            width={2694}
            height={974}
            sizes="160px"
          />
          <ul className={s.footerNav}>
            {navFor(BASE).map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={within(BASE, "/contact")}>Contact</Link>
            </li>
          </ul>
          <dl className={s.footerFacts}>
            <div>
              <dt>Registration</dt>
              <dd>Category II AIF · SEBI Reg. No. {SEBI_REG}</dd>
            </div>
            <div>
              <dt>Investment manager</dt>
              <dd>Suvira Asset Management LLP</dd>
            </div>
            <div>
              <dt>Trustee</dt>
              <dd>Axis Trustee</dd>
            </div>
            <div>
              <dt>Custodian</dt>
              <dd>Orbis</dd>
            </div>
          </dl>
          <p className={s.legal}>
            <span className="pending">[DISCLAIMER — PENDING COMPLIANCE]</span>
          </p>
          <p className={s.copy}>© {new Date().getFullYear()} Suvira Asset Management LLP</p>
        </div>
      </footer>
    </div>
  );
}
