import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { MARKET_FIGURES } from "@/content/figures";
import { FILTERS, HOME } from "@/content/home";
import ContemporaryClose from "./ContemporaryClose";
import RiseWords from "./RiseWords";
import s from "./contemporary.module.css";

const BASE = "/design-5";

export const metadata: Metadata = { title: "Design 5 · Contemporary" };

export default function ContemporaryHome() {
  return (
    <main id="main">
      <section className={`page-grid ${s.hero}`} aria-labelledby="c-thesis">
        <div className={s.heroText}>
          <h1 id="c-thesis" className={s.thesis}>
            <RiseWords text={HOME.thesis} />
          </h1>
          <p className={s.dek}>{HOME.dek}</p>
          <div className={s.actions}>
            <Link href={within(BASE, "/contact")} className={s.ctaGold}>
              Request a conversation <Arrow />
            </Link>
            <Link href={within(BASE, "/opportunity")} className={s.textLinkLight}>
              Why private markets
            </Link>
          </div>
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

      <section className={`page-grid ${s.band}`} aria-labelledby="c-turn">
        <p className={s.turnSetup}>{HOME.turnSetup}</p>
        <h2 id="c-turn" className={s.turnLine}>
          {HOME.turnLine}
        </h2>
        <p className={s.turnBody}>{HOME.edge}</p>
      </section>

      <section className={`page-grid ${s.band} ${s.gold}`} aria-labelledby="c-markets">
        <h2 id="c-markets" className={s.heading}>
          {HOME.marketsHeading}
        </h2>
        <p className={s.aside}>{HOME.marketsLead}</p>
        <dl className={s.figures}>
          {MARKET_FIGURES.map((f) => (
            <div key={f.value} className={s.figure}>
              <dt className={s.figureMeasure}>{f.measure}</dt>
              <dd className={s.figureValue}>{f.value}</dd>
              <dd className={s.figureMeta}>
                {f.period} · Source: {f.source}
              </dd>
            </div>
          ))}
        </dl>
        <p className={s.more}>
          <Link href={within(BASE, "/opportunity")}>
            The full opportunity <Arrow size={16} />
          </Link>
        </p>
      </section>

      <section className={`page-grid ${s.band}`} aria-labelledby="c-filters">
        <h2 id="c-filters" className={s.heading}>
          {HOME.filtersHeading}
        </h2>
        <dl className={s.rows}>
          {FILTERS.map((f) => (
            <div key={f.name} className={s.row}>
              <dt>{f.name}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
        <p className={s.more}>
          <Link href={within(BASE, "/philosophy")}>
            Our investment philosophy <Arrow size={16} />
          </Link>
        </p>
      </section>

      <section className={`page-grid ${s.band} ${s.dark}`} aria-labelledby="c-preserve">
        <h2 id="c-preserve" className={s.question}>
          &ldquo;{HOME.question}&rdquo;
        </h2>
        <div className={s.answerCol}>
          <p className={s.answer}>{HOME.answer}</p>
          <p className={s.way}>
            <strong>{HOME.way}</strong> {HOME.wayClose}
          </p>
        </div>
        <div className={s.columns}>
          <p>{HOME.diligence}</p>
          <p>{HOME.humans}</p>
          <p className={s.moreLight}>
            <Link href={within(BASE, "/process")}>
              How we invest <Arrow size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className={`page-grid ${s.band}`} aria-labelledby="c-note">
        <h2 id="c-note" className="visually-hidden">
          The Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <ContemporaryClose />
    </main>
  );
}
