import { Archivo } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

/* Design 1 shell: the drawn module grid, header and footer */
export default function ModernLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${archivo.variable} modern`}>
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
    </div>
  );
}
