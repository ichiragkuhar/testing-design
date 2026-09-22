import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { ABOUT, LEADERS, NEXT_LINKS } from "@/content/about";
import { HOME } from "@/content/home";
import Colonnade from "../Colonnade";
import MonumentClose from "../MonumentClose";
import s from "../monument.module.css";

const BASE = "/design-3";

export const metadata: Metadata = { title: "About · Design 3 · Monumental" };

export default function MonumentAbout() {
  return (
    <main id="main">
      <section className={s.facade} aria-labelledby="ma-title">
        <h1 id="ma-title" className={s.thesis}>
          {ABOUT.title}
        </h1>
        <p className={s.inscriptionSmall}>
          Category II Alternative Investment Fund · SEBI Reg. No. {SEBI_REG}
        </p>
        <figure className={s.facadePlate}>
          <Image
            src="/images/gold-seam.jpg"
            alt="A dark rock face in low light, with a thin seam of gold running through it."
            fill
            priority
            sizes="(min-width: 1080px) 36vw, 100vw"
          />
        </figure>
      </section>

      <section className={s.plinth} aria-label="Introduction">
        <p className={s.plinthText}>{ABOUT.intro}</p>
      </section>

      <section className={s.stone} aria-labelledby="ma-note">
        <h2 id="ma-note" className={s.heading}>
          Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <section className={`${s.slab} ${s.slabColonnade}`} aria-labelledby="ma-team">
        <h2 id="ma-team" className={s.slabHeading}>
          {ABOUT.leadershipHeading}
        </h2>
        <p className={s.slabTagline}>{ABOUT.leadershipTagline}</p>
        <p className={s.slabBody}>{ABOUT.leadershipIntro}</p>
        <Colonnade
          items={LEADERS}
          getKey={(l) => l.name}
          render={(l) => (
            <>
              <h3 className={s.bayTitle}>{l.name}</h3>
              <p className={s.bayRole}>{l.role}</p>
              <p className={s.bayOrg}>{l.org}</p>
              <ul className={s.bayPoints}>
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className={s.bayLink} href={l.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <Arrow size={16} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </>
          )}
        />
      </section>

      <section className={s.stone} aria-labelledby="ma-next">
        <h2 id="ma-next" className={s.heading}>
          Continue
        </h2>
        <Colonnade
          items={NEXT_LINKS}
          getKey={(n) => n.path}
          render={(n) => (
            <Link href={within(BASE, n.path)} className={s.bayLinkBlock}>
              <span className={s.bayTitle}>{n.title}</span>
              <span className={s.bayText}>{n.text}</span>
              <span className={s.bayCta}>
                {n.cta} <Arrow size={16} />
              </span>
            </Link>
          )}
        />
      </section>

      <MonumentClose />
    </main>
  );
}
