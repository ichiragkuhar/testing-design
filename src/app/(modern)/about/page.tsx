import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG } from "@/components/nav";
import { ABOUT, LEADERS, NEXT_LINKS } from "@/content/about";
import { HOME } from "@/content/home";
import s from "./about.module.css";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <main id="main" className={s.main}>
      <section className={`page-grid ${s.opening}`} aria-labelledby="about-title">
        <h1 id="about-title" className={s.title}>
          {ABOUT.title}
        </h1>
        <p className={s.intro}>{ABOUT.intro}</p>
        <p className={s.colophon}>
          <span>Category II Alternative Investment Fund</span>
          <span>SEBI Reg. No. {SEBI_REG}</span>
        </p>
      </section>

      <section className={`page-grid ${s.section} ${s.gold}`} aria-labelledby="about-note">
        <h2 id="about-note" className="visually-hidden">
          Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <section className={`page-grid ${s.section}`} aria-labelledby="about-team">
        <h2 id="about-team" className={s.heading}>
          {ABOUT.leadershipHeading}
        </h2>
        <p className={s.tagline}>{ABOUT.leadershipTagline}</p>
        <p className={s.lead}>{ABOUT.leadershipIntro}</p>

        <ul className={s.leaders}>
          {LEADERS.map((l) => (
            <li key={l.name} className={s.leader}>
              <h3 className={s.name}>{l.name}</h3>
              <p className={s.role}>{l.role}</p>
              <p className={s.org}>{l.org}</p>
              <ul className={s.points}>
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className={s.linkedin} href={l.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <Arrow size={16} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`page-grid ${s.section} ${s.dark}`} aria-labelledby="about-next">
        <h2 id="about-next" className="visually-hidden">
          Continue
        </h2>
        <ul className={s.next}>
          {NEXT_LINKS.map((n) => (
            <li key={n.path}>
              <Link href={n.path} className={s.nextLink}>
                <span className={s.nextTitle}>{n.title}</span>
                <span className={s.nextText}>{n.text}</span>
                <span className={s.nextCta}>
                  {n.cta} <Arrow size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
