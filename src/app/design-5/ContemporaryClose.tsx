import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { within } from "@/components/nav";
import { HOME } from "@/content/home";
import s from "./contemporary.module.css";

const BASE = "/design-5";

/** The closing band, identical on every Contemporary page. */
export default function ContemporaryClose() {
  return (
    <section className={`page-grid ${s.band} ${s.dark} ${s.close}`} aria-labelledby="c-close">
      <div className={s.closeText}>
        <h2 id="c-close" className={s.closeHeading}>
          {HOME.close}
        </h2>
        <Link href={within(BASE, "/contact")} className={s.ctaGold}>
          Request a conversation <Arrow />
        </Link>
        <p className={s.founders}>
          Building a company? <Link href={within(BASE, "/contact") + "?role=founder"}>Talk to us.</Link>
        </p>
      </div>
      <div className={s.closeMark} aria-hidden="true">
        <Image src="/brand/suvira-mark-large.png" alt="" width={1121} height={1121} sizes="(min-width: 1080px) 34vw, 70vw" />
      </div>
    </section>
  );
}
