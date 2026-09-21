/**
 * Market figures shown on the site. Every row must carry its source.
 * Add a row here and the table grows; no layout change is needed.
 *
 * Held back until their sources are confirmed with the deck's author:
 * USD 10 Tn economy by FY2032, 2X+ capital deployed (5 yrs),
 * ₹97,000 Cr realised via public-market exits since 2021, 375+ IPOs in 2025.
 */
export type Figure = {
  value: string;
  measure: string;
  period: string;
  source: string;
};

export const MARKET_FIGURES: Figure[] = [
  {
    value: "~6.5–7%",
    measure: "India's projected real GDP growth",
    period: "FY24–FY30P",
    source: "IMF",
  },
  {
    value: "USD 90 Bn+",
    measure: "Private equity and venture capital invested in India",
    period: "2014–2024",
    source: "AVCA",
  },
];
