import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { ABOUT, LEADERS, NEXT_LINKS } from "@/content/about";
import { HOME } from "@/content/home";
import VaultDial from "../VaultDial";
import VaultClose from "../VaultClose";
import s from "../vault.module.css";

const BASE = "/design-4";

export const metadata: Metadata = { title: "About · Design 4 · Vault" };

export default function VaultAbout() {
  return (
    <main id="main">
      <section className={s.opening} aria-labelledby="va-title">
        <div className={s.openingText}>
          <h1 id="va-title" className={s.thesis}>
            {ABOUT.title}
          </h1>
          <p className={s.dek}>{ABOUT.intro}</p>
          <p className={s.register}>
            Category II Alternative Investment Fund <span aria-hidden="true">·</span> SEBI Reg. No.{" "}
            {SEBI_REG}
          </p>
        </div>
        <div className={s.dialStage} aria-hidden="true">
          <VaultDial className={s.dial} />
          <Image
            src="/brand/suvira-mark-large.png"
            alt=""
            width={1121}
            height={1121}
            priority
            sizes="96px"
            className={s.dialMark}
          />
        </div>
      </section>

      <section className={`${s.band} ${s.section}`} aria-labelledby="va-note">
        <h2 id="va-note" className={s.heading}>
          Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <section className={s.section} aria-labelledby="va-team">
        <h2 id="va-team" className={s.heading}>
          {ABOUT.leadershipHeading}
        </h2>
        <p className={s.tagline}>{ABOUT.leadershipTagline}</p>
        <p className={s.lead}>{ABOUT.leadershipIntro}</p>
        <ul className={s.trio}>
          {LEADERS.map((l) => (
            <li key={l.name} className={s.trioItem}>
              <h3 className={s.trioTitle}>{l.name}</h3>
              <p className={s.person}>{l.role}</p>
              <p className={s.personOrg}>{l.org}</p>
              <ul className={s.personPoints}>
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className={s.personLink} href={l.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <Arrow size={16} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${s.section} ${s.ruled}`} aria-labelledby="va-next">
        <h2 id="va-next" className="visually-hidden">
          Continue
        </h2>
        <ul className={s.trio}>
          {NEXT_LINKS.map((n) => (
            <li key={n.path} className={s.trioItem}>
              <Link href={within(BASE, n.path)} className={s.nextLink}>
                <span className={s.trioTitle}>{n.title}</span>
                <span className={s.trioText}>{n.text}</span>
                <span className={s.nextCta}>
                  {n.cta} <Arrow size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <VaultClose />
    </main>
  );
}
