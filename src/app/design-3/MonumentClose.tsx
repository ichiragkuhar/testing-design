import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { within } from "@/components/nav";
import { HOME } from "@/content/home";
import s from "./monument.module.css";

const BASE = "/design-3";

/** The closing slab, identical on every Monumental page. */
export default function MonumentClose() {
  return (
    <section className={`${s.slab} ${s.close}`} aria-labelledby="m-close">
      <Image
        src="/brand/suvira-mark-large.png"
        alt=""
        width={1121}
        height={1121}
        sizes="(min-width: 1080px) 288px, 96px"
        className={s.closeMark}
      />
      <h2 id="m-close" className={s.closeHeading}>
        {HOME.close}
      </h2>
      <Link href={within(BASE, "/contact")} className={s.ctaGold}>
        Request a conversation <Arrow />
      </Link>
      <p className={s.founders}>
        Building a company? <Link href={within(BASE, "/contact") + "?role=founder"}>Talk to us.</Link>
      </p>
    </section>
  );
}
