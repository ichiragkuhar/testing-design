import Image from "next/image";
import Link from "next/link";
import { Cinzel, Spectral } from "next/font/google";
import NavLinks from "@/components/NavLinks";
import MobileNav from "@/components/MobileNav";
import { SEBI_REG, navFor, within } from "@/components/nav";
import s from "./monument.module.css";

const BASE = "/design-3";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

export default function MonumentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.monument} ${cinzel.variable} ${spectral.variable}`}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <Link href={BASE} className={s.logo} aria-label="Suvira Asset Management, home">
            <Image
              src="/brand/suvira-logo-horizontal.png"
              alt=""
              width={3376}
              height={1029}
              priority
              sizes="140px"
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
        <Image
          className={s.footerMark}
          src="/brand/suvira-wordmark-full.png"
          alt="Suvira Asset Management LLP"
          width={2694}
          height={974}
          sizes="150px"
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
        <p>
          <span className="pending">[DISCLAIMER — PENDING COMPLIANCE]</span>
        </p>
        <p className={s.copy}>© {new Date().getFullYear()} Suvira Asset Management LLP</p>
      </footer>
    </div>
  );
}
