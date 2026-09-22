import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { ABOUT, LEADERS, NEXT_LINKS } from "@/content/about";
import { HOME } from "@/content/home";
import BankClose from "../BankClose";
import s from "../bank.module.css";

const BASE = "/design-2";

export const metadata: Metadata = { title: "About · Design 2 · Private Bank" };

export default function BankAbout() {
  return (
    <main id="main">
      <section className={`page-grid ${s.hero}`} aria-labelledby="ba-title">
        <div className={s.heroText}>
          <h1 id="ba-title" className={s.thesis}>
            {ABOUT.title}
          </h1>
          <p className={s.dek}>{ABOUT.intro}</p>
          <p className={s.heroReg}>
            Category II Alternative Investment Fund · SEBI Reg. No. {SEBI_REG}
          </p>
        </div>
        <figure className={s.heroPlate}>
          <Image
            src="/images/gold-seam.jpg"
            alt="A dark rock face in low light, with a thin seam of gold running through it."
            fill
            priority
            sizes="(min-width: 1080px) 36vw, 100vw"
          />
        </figure>
      </section>

      <section className={`page-grid ${s.band} ${s.tint}`} aria-labelledby="ba-note">
        <h2 id="ba-note" className={s.heading}>
          Founder&rsquo;s Note
        </h2>
        <blockquote className={s.noteWide}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOffWide}>{HOME.noteSignOff}</p>
      </section>

      <section className={`page-grid ${s.band}`} aria-labelledby="ba-team">
        <h2 id="ba-team" className={s.heading}>
          {ABOUT.leadershipHeading}
        </h2>
        <div className={s.aside}>
          <p className={s.tagline}>{ABOUT.leadershipTagline}</p>
          <p>{ABOUT.leadershipIntro}</p>
        </div>
        <ul className={s.trio}>
          {LEADERS.map((l) => (
            <li key={l.name} className={s.trioItem}>
              <h3 className={s.personName}>{l.name}</h3>
              <p className={s.personRole}>{l.role}</p>
              <p className={s.personOrg}>{l.org}</p>
              <ul className={s.personPoints}>
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className={s.personLink} href={l.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <Arrow size={14} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`page-grid ${s.band} ${s.dark}`} aria-labelledby="ba-next">
        <h2 id="ba-next" className="visually-hidden">
          Continue reading
        </h2>
        <ul className={s.nextList}>
          {NEXT_LINKS.map((n) => (
            <li key={n.path}>
              <Link href={within(BASE, n.path)} className={s.nextLink}>
                <span className={s.nextTitle}>{n.title}</span>
                <span className={s.nextText}>{n.text}</span>
                <span className={s.nextCta}>
                  {n.cta} <Arrow size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BankClose />
    </main>
  );
}
