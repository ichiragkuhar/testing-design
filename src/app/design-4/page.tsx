import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SEBI_REG, within } from "@/components/nav";
import { MARKET_FIGURES } from "@/content/figures";
import { FILTERS, HOME } from "@/content/home";
import VaultDial from "./VaultDial";
import VaultClose from "./VaultClose";
import s from "./vault.module.css";

const BASE = "/design-4";

export const metadata: Metadata = { title: "Design 4 · Vault" };

export default function VaultHome() {
  return (
    <main id="main">
      {/* The dial */}
      <section className={s.opening} aria-labelledby="v-thesis">
        <div className={s.openingText}>
          <h1 id="v-thesis" className={s.thesis}>
            {HOME.thesis}
          </h1>
          <p className={s.dek}>{HOME.dek}</p>
          <div className={s.actions}>
            <Link href={within(BASE, "/contact")} className={s.cta}>
              Request a conversation <Arrow />
            </Link>
            <Link href={within(BASE, "/opportunity")} className={s.textLink}>
              Why private markets
            </Link>
          </div>
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

      {/* The turn */}
      <section className={`${s.band} ${s.turn}`} aria-labelledby="v-turn">
        <p className={s.turnSetup}>{HOME.turnSetup}</p>
        <h2 id="v-turn" className={s.turnLine}>
          {HOME.turnLine}
        </h2>
        <p className={s.body}>{HOME.edge}</p>
      </section>

      {/* Figures, held in balance */}
      <section className={s.section} aria-labelledby="v-markets">
        <h2 id="v-markets" className={s.heading}>
          {HOME.marketsHeading}
        </h2>
        <p className={s.lead}>{HOME.marketsLead}</p>
        <dl className={s.figures}>
          {MARKET_FIGURES.map((f) => (
            <div key={f.value} className={s.figure}>
              <dt className={s.figureMeasure}>{f.measure}</dt>
              <dd className={s.figureValue}>{f.value}</dd>
              <dd className={s.figureMeta}>
                {f.period} <span aria-hidden="true">·</span> {f.source}
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

      {/* Three filters */}
      <section className={`${s.section} ${s.ruled}`} aria-labelledby="v-filters">
        <h2 id="v-filters" className={s.heading}>
          {HOME.filtersHeading}
        </h2>
        <dl className={s.trio}>
          {FILTERS.map((f) => (
            <div key={f.name} className={s.trioItem}>
              <dt className={s.trioTitle}>{f.name}</dt>
              <dd className={s.trioText}>{f.text}</dd>
            </div>
          ))}
        </dl>
        <p className={s.more}>
          <Link href={within(BASE, "/philosophy")}>
            Our investment philosophy <Arrow size={16} />
          </Link>
        </p>
      </section>

      {/* Preservation */}
      <section className={`${s.band} ${s.section}`} aria-labelledby="v-preserve">
        <h2 id="v-preserve" className={s.question}>
          &ldquo;{HOME.question}&rdquo;
        </h2>
        <p className={s.lead}>{HOME.answer}</p>
        <p className={s.way}>
          <strong>{HOME.way}</strong> {HOME.wayClose}
        </p>
        <div className={s.pair}>
          <p>{HOME.diligence}</p>
          <p>
            {HOME.humans}{" "}
            <Link href={within(BASE, "/process")} className={s.inlineLink}>
              How we invest
            </Link>
          </p>
        </div>
      </section>

      {/* Founder's note */}
      <section className={`${s.section} ${s.ruled}`} aria-labelledby="v-note">
        <h2 id="v-note" className="visually-hidden">
          The Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          {HOME.note.map((p) => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
        </blockquote>
        <p className={s.signOff}>{HOME.noteSignOff}</p>
      </section>

      <VaultClose />
    </main>
  );
}
