# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Latest Next.js, chosen by the user. Scaffolded as Next.js 16.3.5 with the App Router, TypeScript, `src/`, ESLint and plain CSS (no Tailwind; Claude chose this and it can change). The deploy target is still open.

The old site (`D:\Company\suvirafund`) is where the AI-looking design came from. Do not reuse its components, CSS or layouts. Only its brand image files were carried over.

## Users

1. **Main audience: HNIs and family offices.** These are people thinking about committing capital to a SEBI Category II AIF, where the minimum ticket is ₹1 Cr. They visit to judge whether Suvira deserves their trust before a conversation happens. Most will read carefully and skeptically, often more than once, and often after someone has referred them.
2. **Wealth managers, IFAs and private bankers.** They weigh the fund as something to place with their clients. They need to understand the strategy and the team quickly enough to explain both to someone else.
3. **Founders and promoters.** These are growth-stage, pre-IPO, and promoter-led companies looking for capital (growth, ESOP buyouts, secondaries, special situations). They want to know whether Suvira is the right partner for them.

## Product Purpose

The site is the public face of **Suvira Asset Management LLP**, investment manager of a SEBI-registered Category II Alternative Investment Fund (Reg. No. IN/AIF2/26-27/2185). The fund backs Indian private companies (growth equity, pre-IPO, special situations) before public markets discover them.

The site succeeds when a qualified visitor trusts Suvira enough to **request a conversation**. That is the one main action. Everything else supports it.

Pages: Home, About, Opportunity, Philosophy, Process, Fund (gated), Insights, Contact. Contact holds the "request a conversation" form, and every page links to it.

## Positioning

"Rare is not created. It is discovered." Suvira claims that India's next wave of wealth will come from finding strong private companies before the market does. Its stated edge is **relationships and trust built over nearly two decades in private markets** (always "nearly two decades", never "two decades"; it fits the 18+ years in the bios), not capital. This gives it access to deals before they become widely visible. It pairs that network with an AI-assisted diligence framework (1000+ structured and unstructured data points) while keeping **human judgment in charge of every decision**. The fund says capital preservation comes before chasing returns ("That is the Suvira Way").

## Operating Context

- Investors usually read the site before or after a referral, a meeting or a deck. The site supports a relationship-led sale and doesn't replace it.
- Offering terms go out privately (PPM). The site starts the conversation. It doesn't close the sale.
- Vocabulary visitors will expect: corpus, greenshoe, ticket size, investment horizon, IC (investment committee), trustee, custodian, exits / value realization.

## Capabilities and Constraints

- **Regulatory: the fund page is gated.** Fund terms (corpus, greenshoe, ticket size, portfolio construction, horizon) must not be shown openly. Public pages cover the opportunity, philosophy, process and team. Fund terms go behind an accredited-investor / eligibility declaration or an enquiry step. The site needs a regulatory disclaimer. The exact disclaimer wording and gate mechanism are **open** and need compliance or legal sign-off.
- **Main action:** a "request a conversation" enquiry form on the Contact page, which asks "I'm an investor / adviser / founder". Where submissions go (email, CRM) is **open**. Founders get a quiet route to it too (e.g. "Building a company? Talk to us.").
- **No guarantees.** SEBI doesn't allow an AIF to promise capital protection or returns, so nothing may read as either. Keep the deck's hedged wording ("we aim to protect downside").
- **The disclaimer is a placeholder** until compliance signs off. It must be marked `[DISCLAIMER — PENDING COMPLIANCE]` so it can't ship by accident.
- Fund facts from the deck (only for the gated area): target corpus ₹150 Cr, greenshoe ₹100 Cr, 10–15 investments, average initial investment ₹10 Cr, 3–5 year horizon, sector-agnostic, focused on businesses riding structural growth trends.
- Strategies: growth stage, pre-IPO leaders, momentum plays, ESOP buyouts, secondary opportunities, special situations.
- Named frameworks: the Rare Gem Framework (six attributes), the Three Filters (People First, Value over Valuation, Purpose beyond Profit), the five-stage risk loop (Identify, Assess, Mitigate, Monitor, Value Realization), and the investment process (Invest with conviction, Monitor with discipline, Timely value realization).
- **Insights launches with no content.** No real articles exist yet. Design it to publish later, and don't invent posts.

## Brand Commitments

- Name: **Suvira** / Suvira Asset Management LLP. Tagline candidates from the deck: "Rare is not created. It is discovered." and "Building Tomorrow's Institutions."
- **The official logo is the sans version:** the gold tree mark with a bold sans "Suvira", plus "Asset Management LLP" in the full lockup. The deck's serif "S U V I R A" (Narkisim) was PowerPoint styling only. Don't use it or recreate it.
- **Brand gold is `#B49465`**, sampled from `suvira-mark.png`. It is the logo's muted gold, not the deck's `#CB952E`. The logo's wordmark ink is near-black `#040404`.
- Logo files are in `public/brand/`: `suvira-logo-horizontal.png` and `suvira-logo-full.png` (both cropped to their content with a transparent background, and render correctly on light and dark backgrounds), `suvira-mark.png` (transparent), and `suvira-mark-192.png` / `suvira-mark-512.png` (app icons on an opaque background). There is no vector version yet. Reversed lockups for dark grounds (`suvira-logo-horizontal-reverse.png`, `suvira-wordmark-full-reverse.png`) recolor only the wordmark ink to ivory `#F2EFE9`; the gold mark is unchanged.
- Voice from the deck: calm, measured and principled. It talks about trust, discipline and responsibility ("We do not view capital as a commodity to be deployed. We view it as a responsibility to be honored."). It isn't hype-driven.
- **User constraint:** the site must not look AI-generated. An earlier build did, and a later redesign didn't fix it. Deck frameworks that only work as generic diagrams can be dropped.
- **Palette rule (user, 2026-09-22):** every design is built from the logo gold and black, with white or neutral near-white paper as ground. Slight tints (a lighter gilt, warm greys) are fine; **no red, green, navy or other hues.**
- The deck also uses navy `#011631`. It is not used.
- **Gold contrast:** #B49465 is only 2.85:1 against white, in either direction. Never put text on gold in white, and never use gold for text or essential UI edges on white. Near-black on gold (about 7:1) is the rule for gold sections.

## Evidence on Hand

Source: `C:\Users\shrey\Downloads\PITCH DECK (1).pptx`. Approved for use:

- Suvira logo.
- Market statistics **with their cited sources**. Only two are cleared for now: real GDP growth ~6.5%–7%, FY24–FY30P (**IMF**), and USD 90+ Bn PE/VC investment in India, 2014–2024 (**AVCA**). USD 10 Tn by FY2032, 2X+ capital deployed, ₹97,000 Cr realised since 2021 and 375+ IPOs in 2025 are **held back** until the user confirms their sources. Any figure table must accept extra rows without a redesign.
- The Founder's Note text (slide 23), signed **"— Suvira Asset Management LLP"** (user-supplied sign-off; no individual name).
- The Three Filters (slides 18–19).
- The six Non-Negotiables (slide 22). **They exist only as an image in the deck** and need transcribing and checking with the user.
- The "5 Questions. Our Answers" section (slide 29).
- **Leadership (user-supplied, 2026-09-22; in `src/content/about.ts`):** Sushant Damani, COO & Compliance Officer; Vineet Patawari, CEO & Principal Officer; Rahul D Thalia, CIO & Head of Investments. Each with four bio points and a LinkedIn URL.
- **About page copy (user-supplied):** "Discipline in process. Trust in every decision." plus the intro line, the leadership tagline/intro, and three next-step links (Philosophy, The Fund, Investor Relations).
- **Open compliance question:** the user-supplied Fund link text shows "₹150 Cr Category II AIF" publicly on About, which conflicts with the gated-fund-terms rule above. Confirm with compliance.
- Trustee, investment manager and custodian names (slide 16). The service providers are **Axis Trustee** and **Orbis**. Show them as **text only, never logos**. Confirm each one's exact legal name and role with the user before publishing.

- **Imagery:** the deck's dark rock with a gold seam (`ppt/media/image2.png`, slides 4 and 26) and the logo mark are the only images. Everything else is type and sourced numbers. No stock or AI-generated photography, and no team photos (none are needed).

Not approved, so don't use or invent:

- Portfolio companies or deal examples. This includes the EV-charging example on slide 28.
- Track record, returns, IRR or performance figures.
- Testimonials, client names, AUM, press coverage.
- Insights articles.

The deck copy has typos and inconsistencies ("will be build", "Evert", "APPOROACH", "two decades" vs "nearly two decades"). Correct them rather than copying them verbatim. Ask before changing any factual claim.

## Product Principles

1. **Trust before transaction.** The site earns a conversation. It never pushes for a commitment.
2. **Preservation before pursuit.** Every claim should read as restraint and discipline, not a promise of returns.
3. **Show only what's sourced.** Every number has a source, every name is real, and nothing is invented to fill space.
4. **Humans decide.** AI appears as a diligence tool, never as the decision maker.
5. **Compliance comes first.** When public visibility is in doubt, keep it gated.

## Accessibility & Inclusion

No specific standard has been set. The default is WCAG 2.2 AA. Readers will include older HNI investors, so readable text size and contrast matter.
