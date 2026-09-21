import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suvira Asset Management",
    template: "%s · Suvira Asset Management",
  },
  description:
    "Suvira Asset Management LLP is the investment manager of a SEBI-registered Category II Alternative Investment Fund backing Indian growth-stage and pre-IPO companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="grid-lines" aria-hidden="true">
          <div className="page-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
