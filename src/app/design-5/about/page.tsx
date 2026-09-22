import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { ABOUT, LEADERS, NEXT_LINKS } from "@/content/about";
import { HOME } from "@/content/home";
import ContemporaryClose from "../ContemporaryClose";
import RiseWords from "../RiseWords";
import s from "../contemporary.module.css";

const BASE = "/design-5";

export const metadata: Metadata = { title: "About · Design 5 · Contemporary" };

export default function ContemporaryAbout() {
  return (
    <main id="main">
      <section className={`page-grid ${s.hero}`} aria-labelledby="ca-title">
        <div className={s.heroText}>
          <h1 id="ca-title" className={s.thesis}>
            <RiseWords text={ABOUT.title} />
          </h1>
          <p className={s.dek}>{ABOUT.intro}</p>
        </div>
        <figure className={s.heroPlate}>
          <Image
            src="/images/gold-seam.jpg"
            alt="A dark rock face in low light, with a thin seam of gold running through it."
            fill
            priority
            sizes="(min-width: 1080px) 42vw, 100vw"
          />
        </figure>
        <p className={s.heroReg}>
          <span>Category II Alternative Investment Fund</span>
          <span>SEBI Reg. No. {SEBI_REG}</span>
        </p>
      </section>

      <section className={`page-grid ${s.band} ${s.gold}`} aria-labelledby="ca-note">
        <h2 id="ca-note" className="visually-hidden">
          Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <section className={`page-grid ${s.band}`} aria-labelledby="ca-team">
        <h2 id="ca-team" className={s.heading}>
          {ABOUT.leadershipHeading}
        </h2>
        <div className={s.aside}>
          <p className={s.tagline}>{ABOUT.leadershipTagline}</p>
          <p>{ABOUT.leadershipIntro}</p>
        </div>
        <ul className={s.people}>
          {LEADERS.map((l) => (
            <li key={l.name} className={s.person}>
              <h3 className={s.personName}>{l.name}</h3>
              <p className={s.personRole}>{l.role}</p>
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

      <section className={`page-grid ${s.band} ${s.dark}`} aria-labelledby="ca-next">
        <h2 id="ca-next" className="visually-hidden">
          Continue reading
        </h2>
        <ul className={s.nextList}>
          {NEXT_LINKS.map((n) => (
            <li key={n.path}>
              <Link href={within(BASE, n.path)} className={s.nextLink}>
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

      <ContemporaryClose />
    </main>
  );
}
