import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { within } from "@/components/nav";
import { HOME } from "@/content/home";
import s from "./bank.module.css";

const BASE = "/design-2";

/** The closing band, identical on every Private Bank page. */
export default function BankClose() {
  return (
    <section className={`page-grid ${s.band} ${s.tint} ${s.close}`} aria-labelledby="b-close">
      <div className={s.closeText}>
        <h2 id="b-close" className={s.closeHeading}>
          {HOME.close}
        </h2>
        <div className={s.actions}>
          <Link href={within(BASE, "/contact")} className={s.cta}>
            Request a conversation <Arrow size={16} />
          </Link>
          <p className={s.founders}>
            Building a company? <Link href={within(BASE, "/contact") + "?role=founder"}>Talk to us.</Link>
          </p>
        </div>
      </div>
      <div className={s.closeMark} aria-hidden="true">
        <Image src="/brand/suvira-mark-large.png" alt="" width={1121} height={1121} sizes="(min-width: 1080px) 30vw, 60vw" />
      </div>
    </section>
  );
}
