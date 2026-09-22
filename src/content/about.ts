/** About page copy, as supplied by the user (2026-09-22). Shared by every design. */

export const ABOUT = {
  title: "Discipline in process. Trust in every decision.",
  intro:
    "Suvira Asset Management LLP is a SEBI-registered Category II Alternative Investment Fund built to discover India’s next generation of institutions — before the market does.",
  leadershipHeading: "Leadership Team",
  leadershipTagline: "Professional. Diligent. Experienced.",
  leadershipIntro:
    "A multidisciplinary team united by one objective — protecting capital while creating enduring wealth.",
} as const;

export type Leader = {
  name: string;
  role: string;
  org: string;
  points: string[];
  linkedin: string;
};

export const LEADERS: Leader[] = [
  {
    name: "Sushant Damani",
    role: "COO & Compliance Officer",
    org: "Suvira Asset Management LLP",
    points: [
      "Multi-geography public & private markets experience",
      "Portfolio construction & governance specialist",
      "Previous stints with P&G, ITC & PwC",
      "CA (AIR 26) | SRCC",
    ],
    linkedin: "https://www.linkedin.com/in/sushant-damani-0513406/",
  },
  {
    name: "Vineet Patawari",
    role: "CEO & Principal Officer",
    org: "Suvira Asset Management LLP",
    points: [
      "Co-Founder, StockEdge & Elearnmarkets",
      "Built India’s largest retail investing ecosystem",
      "Former Research Analyst, CRISIL (Irevna)",
      "CA | PGDM, IIM Indore",
    ],
    linkedin: "https://www.linkedin.com/in/vineet-patawari/",
  },
  {
    name: "Rahul D Thalia",
    role: "CIO & Head of Investments",
    org: "Suvira Asset Management LLP",
    points: [
      "20+ years in Private Markets",
      "Founder, Sarffin Financial Advisors",
      "Family Office & Institutional Network",
      "MS | CFA (India) | St. Xavier’s",
    ],
    linkedin: "https://www.linkedin.com/in/rdthalia/",
  },
];

/** "Where next" links at the foot of About. Paths are relative to each design's base. */
export const NEXT_LINKS = [
  {
    path: "/philosophy",
    title: "Philosophy",
    text: "The Rare Gem Framework, our non-negotiables, and the Suvira Network Effect.",
    cta: "Read more",
  },
  {
    path: "/fund",
    title: "The Fund",
    text: "₹150 Cr Category II AIF — growth equity, pre-IPO and special situations.",
    cta: "Fund at a glance",
  },
  {
    path: "/contact",
    title: "Investor Relations",
    text: "A conversation, before a commitment.",
    cta: "Speak with us",
  },
] as const;
