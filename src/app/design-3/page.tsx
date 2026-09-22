import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { MARKET_FIGURES } from "@/content/figures";
import { FILTERS, HOME } from "@/content/home";
import Colonnade from "./Colonnade";
import MonumentClose from "./MonumentClose";
import s from "./monument.module.css";

const BASE = "/design-3";

export const metadata: Metadata = { title: "Design 3 · Monumental" };

export default function MonumentHome() {
  return (
    <main id="main">
      <section className={s.facade} aria-labelledby="m-thesis">
        <h1 id="m-thesis" className={s.thesis}>
          {HOME.thesis}
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
        <p className={s.plinthText}>{HOME.dek}</p>
        <div className={s.actions}>
          <Link href={within(BASE, "/contact")} className={s.ctaGold}>
            Request a conversation <Arrow />
          </Link>
          <Link href={within(BASE, "/opportunity")} className={s.textLinkOnSlab}>
            Why private markets
          </Link>
        </div>
      </section>

      <section className={s.stone} aria-labelledby="m-turn">
        <p className={s.italicLead}>{HOME.turnSetup}</p>
        <h2 id="m-turn" className={s.inscription}>
          {HOME.turnLine}
        </h2>
        <p className={s.body}>{HOME.edge}</p>
      </section>

      <section className={s.slab} aria-labelledby="m-markets">
        <h2 id="m-markets" className={s.slabHeading}>
          {HOME.marketsHeading}
        </h2>
        <p className={s.slabBody}>{HOME.marketsLead}</p>
        <dl className={s.tablets}>
          {MARKET_FIGURES.map((f) => (
            <div key={f.value} className={s.tablet}>
              <dt className={s.tabletMeasure}>{f.measure}</dt>
              <dd className={s.tabletValue}>{f.value}</dd>
              <dd className={s.tabletMeta}>
                {f.period} · {f.source}
              </dd>
            </div>
          ))}
        </dl>
        <p className={s.moreOnSlab}>
          <Link href={within(BASE, "/opportunity")}>
            The full opportunity <Arrow size={16} />
          </Link>
        </p>
      </section>

      <section className={s.stone} aria-labelledby="m-filters">
        <h2 id="m-filters" className={s.heading}>
          {HOME.filtersHeading}
        </h2>
        <Colonnade
          items={FILTERS}
          getKey={(f) => f.name}
          render={(f) => (
            <>
              <h3 className={s.bayTitle}>{f.name}</h3>
              <p className={s.bayText}>{f.text}</p>
            </>
          )}
        />
        <p className={s.more}>
          <Link href={within(BASE, "/philosophy")}>
            Our investment philosophy <Arrow size={16} />
          </Link>
        </p>
      </section>

      <section className={s.slab} aria-labelledby="m-preserve">
        <h2 id="m-preserve" className={s.slabHeading}>
          &ldquo;{HOME.question}&rdquo;
        </h2>
        <p className={s.slabBody}>{HOME.answer}</p>
        <p className={s.way}>
          <strong>{HOME.way}</strong> {HOME.wayClose}
        </p>
        <div className={s.pair}>
          <p>{HOME.diligence}</p>
          <p>{HOME.humans}</p>
        </div>
        <p className={s.moreOnSlab}>
          <Link href={within(BASE, "/process")}>
            How we invest <Arrow size={16} />
          </Link>
        </p>
      </section>

      <section className={s.stone} aria-labelledby="m-note">
        <h2 id="m-note" className={s.heading}>
          The Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <MonumentClose />
    </main>
  );
}
