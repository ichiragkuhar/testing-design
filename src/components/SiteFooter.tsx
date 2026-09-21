import Image from "next/image";
import Link from "next/link";
import { NAV, SEBI_REG } from "./nav";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`page-grid ${styles.top}`}>
        <div className={styles.brand}>
          <Image
            src="/brand/suvira-wordmark-full.png"
            alt="Suvira Asset Management LLP"
            width={2694}
            height={974}
            sizes="160px"
          />
        </div>

        <nav className={styles.links} aria-label="Footer">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <dl className={styles.facts}>
          <div>
            <dt>Registration</dt>
            <dd>
              Category II Alternative Investment Fund
              <br />
              SEBI Reg. No. {SEBI_REG}
            </dd>
          </div>
          <div>
            <dt>Investment manager</dt>
            <dd>Suvira Asset Management LLP</dd>
          </div>
          <div>
            <dt>Trustee</dt>
            <dd>Axis Trustee</dd>
          </div>
          <div>
            <dt>Custodian</dt>
            <dd>Orbis</dd>
          </div>
        </dl>
      </div>

      <div className={`page-grid ${styles.legal}`}>
        <p className={styles.disclaimer}>
          <span className="pending">[DISCLAIMER — PENDING COMPLIANCE]</span>
        </p>
        <p className={styles.copy}>© {new Date().getFullYear()} Suvira Asset Management LLP</p>
      </div>
    </footer>
  );
}
