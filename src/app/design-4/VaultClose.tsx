import Link from "next/link";
import Arrow from "@/components/Arrow";
import { within } from "@/components/nav";
import { HOME } from "@/content/home";
import VaultDial from "./VaultDial";
import s from "./vault.module.css";

const BASE = "/design-4";

/** The closing dial, identical on every Vault page. */
export default function VaultClose() {
  return (
    <section className={s.close} aria-labelledby="v-close">
      <div className={s.closeText}>
        <h2 id="v-close" className={s.closeHeading}>
          {HOME.close}
        </h2>
        <Link href={within(BASE, "/contact")} className={s.cta}>
          Request a conversation <Arrow />
        </Link>
        <p className={s.founders}>
          Building a company? <Link href={within(BASE, "/contact") + "?role=founder"}>Talk to us.</Link>
        </p>
      </div>
      <div className={`${s.dialStage} ${s.dialSmall}`} aria-hidden="true">
        <VaultDial className={s.dial} />
      </div>
    </section>
  );
}
