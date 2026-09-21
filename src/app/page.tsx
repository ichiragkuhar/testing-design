import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import SeamPhoto from "@/components/SeamPhoto";
import Thread from "@/components/Thread";
import { SEBI_REG } from "@/components/nav";
import { MARKET_FIGURES } from "@/content/figures";
import s from "./home.module.css";

const FILTERS = [
  {
    name: "People First",
    text: "We back founders with integrity, ambition and the ability to build an enduring business.",
  },
  {
    name: "Value over Valuation",
    text: "We invest where we see deep intrinsic value in the business.",
  },
  {
    name: "Purpose beyond Profit",
    text: "We look for businesses driven by a purpose greater than profits.",
  },
];

export default function Home() {
  return (
    <main id="main" className={s.main}>
      {/* Unknown → Discovered */}
      <section className={`page-grid ${s.opening}`} aria-labelledby="thesis">
        <div className={s.hero}>
          <h1 id="thesis" className={s.thesis}>
            The world&rsquo;s greatest companies were once unknown.
          </h1>
          <p className={s.dek}>
            Suvira Asset Management backs Indian companies at the growth, pre-IPO and
            special-situations stage, before the public market discovers them.
          </p>
          <div className={s.actions}>
            <Link href="/contact" className="action">
              Request a conversation <Arrow />
            </Link>
            <Link href="/opportunity" className={s.quietLink}>
              Why private markets
            </Link>
          </div>
          <p className={s.colophon}>
            <span>Category II Alternative Investment Fund</span>
            <span>SEBI Reg. No. {SEBI_REG}</span>
          </p>
        </div>

        <SeamPhoto triggerId="discovered" className={s.photo} />

        <div className={s.turn} id="discovered">
          <p className={s.turnSetup}>
            The greatest wealth is created before they are discovered.
          </p>
          <h2 className={s.turnLine}>Suvira exists to discover them first.</h2>
          <p className={s.body}>
            Our greatest advantage is not capital. It is the trust and relationships built
            over nearly two decades in India&rsquo;s private markets, which bring us
            opportunities before they become widely visible.
          </p>
        </div>

        <Thread at={1} className={s.threadOpening} />
      </section>

      {/* Built in private markets */}
      <section className={`page-grid ${s.section} ${s.gold}`} aria-labelledby="private-markets">
        <h2 id="private-markets" className={s.heading}>
          India&rsquo;s next decade will be built in private markets.
        </h2>
        <p className={s.lead}>
          Capital is moving earlier and staying longer in private markets. Businesses are
          staying private longer, and creating substantial value while they do.
        </p>

        <table className={s.figures}>
          <caption className="visually-hidden">Market figures and their sources</caption>
          <thead>
            <tr>
              <th scope="col">Figure</th>
              <th scope="col">What it measures</th>
              <th scope="col">Period</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {MARKET_FIGURES.map((f) => (
              <tr key={f.value}>
                <th scope="row" className={s.figureValue}>
                  {f.value}
                </th>
                <td className={s.figureMeasure}>{f.measure}</td>
                <td className={s.figurePeriod}>{f.period}</td>
                <td className={s.figureSource}>{f.source}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={s.more}>
          <Link href="/opportunity">
            The full opportunity <Arrow size={16} />
          </Link>
        </p>

        <Thread at={2} className={s.threadShort} />
      </section>

      {/* Chosen */}
      <section className={`page-grid ${s.section}`} aria-labelledby="filters">
        <h2 id="filters" className={s.heading}>
          Every opportunity that reaches Suvira passes through three filters.
        </h2>

        <dl className={s.filters}>
          {FILTERS.map((f) => (
            <div key={f.name} className={s.filter}>
              <dt>{f.name}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>

        <p className={s.more}>
          <Link href="/philosophy">
            Our investment philosophy <Arrow size={16} />
          </Link>
        </p>

        <Thread at={3} />
      </section>

      {/* Preserved */}
      <section className={`page-grid ${s.section} ${s.dark}`} aria-labelledby="preserve">
        <h2 id="preserve" className={s.question}>
          &ldquo;Can they preserve my capital as carefully as they seek returns?&rdquo;
        </h2>
        <p className={s.answer}>
          Capital preservation is our first responsibility. We aim to protect downside with
          discipline, governance and our exit mechanism.
        </p>
        <p className={s.way}>
          <span className={s.wayGold}>Preserving capital comes before pursuing returns.</span>{" "}
          That is the Suvira Way.
        </p>

        <div className={s.diligence}>
          <p>
            Every investment recommendation passes through a proprietary due diligence
            framework that evaluates more than 1,000 structured and unstructured data points
            before it reaches the investment committee.
          </p>
          <p>
            AI accelerates the analysis. Investment decisions are driven by human judgement
            and values.
          </p>
          <p className={s.more}>
            <Link href="/process">
              How we invest <Arrow size={16} />
            </Link>
          </p>
        </div>

        <Thread at={4} />
      </section>

      {/* Entrusted */}
      <section className={`page-grid ${s.section} ${s.gold}`} aria-labelledby="note">
        <h2 id="note" className="visually-hidden">
          The Founder&rsquo;s Note
        </h2>
        <blockquote className={s.note}>
          <p>
            Capital is among the greatest expressions of trust. Every rupee entrusted to us
            represents a family&rsquo;s aspirations, a lifetime of hard work, and a belief
            that it can build something meaningful.
          </p>
          <p>
            At Suvira, we do not view capital as a commodity to be deployed. We view it as a
            responsibility to be honoured.
          </p>
        </blockquote>
        <p className={s.signature}>
          <span className="pending">[NAME — PENDING]</span>
          <span className="pending">[TITLE — PENDING]</span>
        </p>

        <Thread at={5} className={s.threadAfter} />
      </section>

      {/* Close */}
      <section className={`page-grid ${s.close}`} aria-labelledby="begin">
        <div className={s.closeText}>
          <h2 id="begin" className={s.closeHeading}>
            Every relationship with Suvira begins with a conversation.
          </h2>
          <Link href="/contact" className="action">
            Request a conversation <Arrow />
          </Link>
          <p className={s.founders}>
            Building a company?{" "}
            <Link href="/contact?role=founder">Talk to us.</Link>
          </p>
        </div>
        <div className={s.emblem} aria-hidden="true">
          <Image src="/brand/suvira-mark-large.png" alt="" width={1121} height={1121} sizes="(min-width: 1080px) 50vw, 90vw" />
        </div>
      </section>
    </main>
  );
}
