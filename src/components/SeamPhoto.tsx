"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./SeamPhoto.module.css";

type Props = {
  /** id of the element whose arrival develops the photograph */
  triggerId: string;
  className?: string;
};

const SRC = "/images/gold-seam.jpg";
const ALT = "A dark rock face in low light, with a thin seam of gold running through it.";

/**
 * The page's one piece of entrance motion. The photograph is always visible;
 * it rests undeveloped (grey, soft) until the line it illustrates arrives, then
 * develops once, like a print in the tray. Without JS or with reduced motion it
 * is simply shown developed.
 */
export default function SeamPhoto({ triggerId, className }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = ref.current;
    const trigger = document.getElementById(triggerId);
    if (!figure || !trigger) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const narrow = window.matchMedia("(max-width: 1079px)").matches;
    const line = narrow ? 0.9 : 0.62;
    if (trigger.getBoundingClientRect().top < window.innerHeight * line) return;

    figure.dataset.state = "latent";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        figure.dataset.state = "developed";
        io.disconnect();
      },
      { rootMargin: `0px 0px -${Math.round((1 - line) * 100)}% 0px` },
    );
    io.observe(trigger);
    return () => io.disconnect();
  }, [triggerId]);

  return (
    <figure ref={ref} className={`${styles.figure} ${className ?? ""}`}>
      <div className={styles.frame}>
        <Image
          src={SRC}
          alt=""
          fill
          priority
          sizes="(min-width: 1080px) 34vw, 100vw"
          className={styles.latent}
        />
        <Image
          src={SRC}
          alt={ALT}
          fill
          priority
          sizes="(min-width: 1080px) 34vw, 100vw"
          className={styles.developed}
        />
      </div>
    </figure>
  );
}
