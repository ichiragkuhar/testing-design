import type { Metadata } from "next";
import "./globals.css";
import DesignSwitcher from "@/components/DesignSwitcher";

export const metadata: Metadata = {
  title: {
    default: "Suvira Asset Management",
    template: "%s · Suvira Asset Management",
  },
  description:
    "Suvira Asset Management LLP is the investment manager of a SEBI-registered Category II Alternative Investment Fund backing Indian growth-stage and pre-IPO companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        {process.env.NEXT_PUBLIC_DESIGN_SWITCHER !== "off" && <DesignSwitcher />}
      </body>
    </html>
  );
}
