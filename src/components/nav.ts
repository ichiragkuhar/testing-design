export const NAV = [
  { href: "/opportunity", label: "Opportunity" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/process", label: "Process" },
  { href: "/fund", label: "Fund" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
] as const;

export const SEBI_REG = "IN/AIF2/26-27/2185";

/** The five design directions under review, each mounted at its own base path. */
export const DESIGNS = [
  { base: "", n: "1", name: "Modernist" },
  { base: "/design-2", n: "2", name: "Private Bank" },
  { base: "/design-3", n: "3", name: "Monumental" },
  { base: "/design-4", n: "4", name: "Vault" },
  { base: "/design-5", n: "5", name: "Contemporary" },
] as const;

/** Prefix a site path with a design's base, so each design links within itself. */
export const within = (base: string, path: string) => (path === "/" ? base || "/" : base + path);

/** Primary nav for a given design base. */
export const navFor = (base: string) => NAV.map((item) => ({ ...item, href: within(base, item.href) }));
