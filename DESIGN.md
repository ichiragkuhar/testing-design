---
name: Suvira Asset Management
description: Institutional Modernism. The NID-era Indian annual report, set in paper, ink and the logo's gold.
colors:
  paper: "#FFFFFF"
  ink: "#0A0A0A"
  ink-2: "#4A4843"
  gold: "#B49465"
  gold-ink: "#2B2317"
  ink-field-secondary: "#D9D6D0"
  ink-hover: "#26241F"
  gold-hover: "#C7A878"
  grid-line: "rgb(10 10 10 / 0.07)"
  pending-yellow: "#FFE45C"
  pending-yellow-deep: "#FFD21F"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.875rem, 1.1rem + 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.93
    letterSpacing: "-0.018em"
    fontVariation: "\"wdth\" 68"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4rem, 2rem + 4.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 68"
    fontFeature: "\"tnum\", \"lnum\""
  statement:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 4.4vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.016em"
    fontVariation: "\"wdth\" 68"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1rem + 3.6vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "\"wdth\" 68"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.012em"
    fontVariation: "\"wdth\" 68"
  setup:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 1rem + 2.2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 100"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.6vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "\"wdth\" 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 100"
    fontFeature: "\"lnum\""
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    fontVariation: "\"wdth\" 100"
  action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.005em"
    fontVariation: "\"wdth\" 100"
rounded:
  none: "0px"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "4rem"
  space-6: "6rem"
  space-7: "9rem"
  margin-sm: "20px"
  margin-md: "32px"
  margin-lg: "48px"
  gutter-sm: "16px"
  gutter-md: "20px"
  gutter-lg: "24px"
  page-max: "1680px"
components:
  action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.25rem"
    height: "3rem"
  action-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.paper}"
  action-on-dark:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.25rem"
    height: "3rem"
  action-on-dark-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.ink}"
  field-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  field-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  ledger-row:
    typography: "{typography.figure}"
    padding: "1.5rem 0"
  header-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "4.25rem"
  pending:
    backgroundColor: "{colors.pending-yellow}"
    textColor: "{colors.ink}"
    padding: "0.1em 0.4em"
---

# Design System: Suvira Asset Management

## Overview

**Creative North Star: "The Institution's Annual Report"**

The site is set like a 1960s–70s Indian institutional annual report from the NID era of modernist building: white paper, near-black ink, and the logo's muted gold laid down as flat fields that own whole sections. One family, Archivo, does all the work across its width axis. Condensed heavy display carries the argument and normal-width text carries the reading. A 12-column module grid is drawn on the page in hairlines, and every layout recomposes by whole columns of it. Hierarchy comes from rules, scale and fields, never from boxes.

The page reads as one continuous argument with a margin thread beside it. Density is editorial. Big condensed statements are set with a lot of air, and sourced data sits in a strict, ruled ledger. Material is flat print: hard rectangular crops, no radii, no elevation, no decorative gradients. There is one photograph (the gold-seam rock), cropped hard and bled off the page edge. It is the only thing on the site that moves on entrance. The tree mark appears once per page, at monumental scale.

The world rejects the navy-and-serif wealth-management site, along with its stat-card rows, pillar cards and icon circles.

**Key Characteristics:**
- Paper, ink and brand gold. Gold only ever works as a field or as text on ink.
- Archivo on the width axis: condensed 68 / weight 800 for display, width 100 for text, tabular lining figures for data.
- A visible hairline module grid (4 / 8 / 12 columns) and whole-column recomposition.
- Rules instead of containers: a heavy 5px opening rule, then 1px row rules.
- One photograph, one entrance motion, one monumental mark.

## Colors

A three-part print palette: paper, ink and one muted metallic gold. Everything else is a legibility derivative of those three.

### Primary
- **Seam Gold** (#B49465): the brand gold, sampled from the logo mark. It is used as full-bleed section fields (the private-markets ledger, the founder's note), as the action block on ink fields, as text inside ink fields (6.94:1), and as the text-selection highlight. On white it measures 2.85:1, so it is never used there for text or for an essential UI edge.
- **Gold Ink** (#2B2317): secondary text on gold fields (5.43:1), such as ledger periods and column headers. It is the gold field's equivalent of Ink Grey.

### Neutral
- **Paper** (#FFFFFF): the page, the sticky header and the footer.
- **Press Ink** (#0A0A0A): all primary text, every rule, the primary action block, and the dark field.
- **Ink Grey** (#4A4843): secondary text on paper, such as body copy under statements, filter descriptions, colophons and footer facts (9.13:1).
- **Ash** (#D9D6D0): secondary text on ink fields (13.65:1).
- **Grid Hairline** (ink at 7%): the drawn module-grid columns and the minor dividers in the menu and footer. It is purely structural.
- **Hover shades**: Ink Hover (#26241F) and Gold Hover (#C7A878) are the only state tints. Each lifts its block's value slightly without changing its hue family.

### Named Rules
**The Ink-on-Gold Rule.** Text on a gold field is always Press Ink or Gold Ink, never white.

**The Gold Stays Silent on White Rule.** On paper, gold may appear only as a field or inside the logo. It never appears as text, a rule, an outline or an icon stroke.

**The Loud Placeholder Rule.** Unconfirmed content (names, titles, the compliance disclaimer) is set in a yellow hazard stripe (#FFE45C / #FFD21F at -45°) with ink text. It is deliberately outside the palette so it cannot ship unnoticed. This is the system's only gradient, and it disappears when the content is confirmed.

## Typography

**Display Font:** Archivo variable at width 68, weight 800 (with Helvetica Neue, Arial)
**Body Font:** Archivo variable at width 100 (with Helvetica Neue, Arial)

**Character:** One grotesque family stretched between two voices. The condensed heavy cut is the institution speaking in headlines. The normal width is the same institution explaining itself calmly. Loaded through next/font with the `wdth` axis. Headings use balanced wrapping and paragraphs use pretty wrapping.

### Hierarchy
- **Display** (800, condensed): the page thesis only, at the top of each page, with very tight leading.
- **Figure** (800, condensed, tabular): the values in the figures ledger. Below 1080px it scales from 2.75rem up to 5.5rem.
- **Statement** (800, condensed): the turn line and the closing invitation. These are the second loudest voice (the turn line tops out at 4.75rem).
- **Headline** (800, condensed): section headings and the pull-question on the ink field.
- **Title** (800, condensed): named items within a section, such as the three filters.
- **Setup** (400–700, full width): lines that set up or resolve a condensed statement (the "Suvira Way" line runs at weight 700). The width contrast with the statement is the point.
- **Lead** (400, full width): deks and section leads, capped at 34–44ch.
- **Body** (400, 1.0625rem below 720px and 1.125rem above, 1.55 line height): reading text, capped around 46ch.
- **Label** (0.875rem): colophons, thread, ledger column headers and footer copy.
- The founder's note is a one-off large quote at weight 500 (up to 3.5rem, max 30ch). It is not a reusable role.

### Named Rules
**The Two Widths Rule.** Width carries hierarchy before weight does. Display, statement, headline, title and figure are condensed (wdth 68). Everything read as prose is full width (wdth 100). Never set body copy condensed, and never set a headline at full width.

**The Tabular Ledger Rule.** Every figure in data uses tabular lining numerals. Lining numerals are the default everywhere else.

## Layout

A drawn module grid. It has 4 columns below 720px, 8 columns from 720px, and 12 columns from 1080px. Margins are 20 / 32 / 48px and gutters are 16 / 20 / 24px, inside a 1680px maximum. The grid is rendered on screen as fixed 1px hairline columns (ink at 7%) behind the content. Content sits above it, and gold and ink fields cover it. That overlay is part of the world, not a debug aid.

Every section is itself a page grid, and elements are placed by whole columns (for example headings at columns 3–10, leads at 3–9, and the thread in columns 1–2 on desktop). At smaller breakpoints layouts recompose by spanning full width rather than scaling proportionally. Tabular and list structures (the figures ledger and the filters) use `subgrid`, so their columns snap to the page grid.

The vertical rhythm runs on a seven-step scale (0.5 / 1 / 1.5 / 2.5 / 4 / 6 / 9rem). Sections pad 6rem on mobile and 9rem on desktop. Coloured fields bleed edge to edge past the grid's maximum width. The opening photograph bleeds past the right margin and stays sticky beside the argument on desktop.

**The Whole Column Rule.** Nothing is placed at a fractional or arbitrary width. If an element doesn't land on grid columns, the layout is wrong.

## Elevation & Depth

Flat. There is no elevation vocabulary: no drop shadows, no layered cards, no blur. Depth comes from three things only: flat colour fields (gold or ink) replacing the paper, the stacking order of content over the drawn grid, and the sticky header's 1px ink rule. The one `box-shadow` in the build is a zero-offset 100vmax spread that bleeds a field's own colour to the viewport edges. It is a bleed mechanism, not a shadow, and it is the approved way to take a field full-bleed.

**The Flat Print Rule.** Surfaces never lift. If something needs emphasis, give it a field, a rule or scale, never a shadow.

## Shapes

Hard rectangles throughout (0px radius): buttons, fields, photographs and the focus outline. Rules are the main form element. A 5px ink rule opens a ledger or list, 1px ink rules separate its rows and close it, and a 1px rule carries colophons and the thread. Photographs are cropped hard with `object-fit: cover`, with no frames or insets. Focus is a 2px square outline offset 3px, in ink on paper and gold on ink fields.

## Components

### Buttons
The action is a flat printed block, never a pill.
- **Shape:** square corners (0px), minimum height 3rem.
- **Primary (Action):** Press Ink block with Paper text, weight 700 at 1rem, padding 0.8rem 1.25rem, followed by an optional square-capped arrow (stroke 1.75).
- **Hover / Focus:** the background shifts to Ink Hover and the arrow slides 4px right over 0.35s on the ease-out curve (0.16, 1, 0.3, 1). Focus is the global 2px outline.
- **On dark (Action on ink):** a Seam Gold block with ink text, hovering to Gold Hover, with a gold focus outline. It exists in the shell for use on ink fields and is not used on Home yet.
- **Text link ("more"):** weight 700 with a 1px currentColor bottom rule and an arrow that slides on hover. It is the secondary route out of every section. The hero's quiet link is a plain underlined 600-weight link.

### Navigation
- **Header:** sticky, paper background, 1px ink bottom rule, 4.25rem bar on the page grid. The horizontal logo sits on the left. On desktop the nav runs across columns 4–9 at 0.9375rem / 500 and the Action sits at the right.
- **States:** hover and the current page show a 1px ink underline (a bottom border, faded in over 0.2s).
- **Mobile:** a text "Menu" / "Close" button underlined with 2px ink (no hamburger glyph). It opens a full-width list of condensed 800 links at 2rem, separated by grid hairlines, ending in the Action.

### Figures Ledger (signature)
A row-driven data table. Adding a row grows it with no layout change, and every row carries its source. A 5px ink rule opens it, 1px rules separate and close it. On desktop it uses `subgrid`: the value spans columns 1–6, the measure 7–9, the period 10–11 (Gold Ink) and the source 12. The column headers are visible labels in Gold Ink. On mobile the headers are hidden, and each row stacks the value over the measure, with the period and source on one line. Figures are condensed and tabular.

### Filter List
A definition list set like the ledger (a 5px opening rule, then 1px rules). A condensed title sits on the left five subgrid columns and a lead-sized description on the right, aligned to the baseline end.

### Fields
Full-bleed gold or ink sections. Gold fields take ink text. Ink fields take paper text, Ash for secondary text, gold for a single emphasised line, and a gold focus ring. Fields cover the drawn grid.

### Thread (signature)
The argument's running index (Unknown → Discovered → Built in private markets → Chosen → Preserved → Entrusted). Each section lists every step so far, with the current step in bold and earlier steps at 78% opacity. On desktop it is a sticky side column in columns 1–2 under a 1px currentColor rule. Below 1080px it becomes a folio line closing the section. It inherits the field's text colour.

### SeamPhoto (signature)
The site's single photograph and single entrance motion. The rock rests "undeveloped" (grayscale, soft), then develops once like a print in the tray as the line it illustrates arrives. Opacity, blur/saturation and a 1.035 scale resolve over 2.6–3.2s on the ease-out curve. Without JavaScript, with reduced motion, or when the trigger is already on screen, it simply shows developed.

### Mark and Lockups
The tree mark appears once per page at monumental scale, cropped off the bottom of the closing section. The header uses the small horizontal logo. The footer uses the wordmark-only lockup, so the mark isn't repeated at a second scale.

### Pending
An inline hazard-stripe label for unconfirmed content (see the Loud Placeholder Rule).

## Do's and Don'ts

### Do:
- **Do** put gold down as a whole field (#B49465) with Press Ink or Gold Ink text, and use gold as text only on ink.
- **Do** set every headline-level voice in Archivo at wdth 68 / 800, and every prose voice at wdth 100.
- **Do** place every element on whole columns of the 4 / 8 / 12 grid, and use subgrid for tabular and list structures.
- **Do** open lists and tables with a 5px ink rule and separate rows with 1px rules.
- **Do** keep the drawn hairline grid visible on paper sections.
- **Do** mark any unconfirmed name, title or legal text with the hazard-stripe pending label.
- **Do** end each section with a text-link route onward, and use the ink Action block for "Request a conversation".

### Don't:
- **Don't** round anything: no radii on buttons, images, fields or focus rings.
- **Don't** use elevation shadows or blur for depth. The zero-offset spread used to bleed fields is the only permitted box-shadow.
- **Don't** use gradients, apart from the pending stripe.
- **Don't** put content in cards or boxed containers. Separate content with rules and fields.
- **Don't** add eyebrows or kickers above headings, number badges, icon circles, or stat-card rows. Data goes in the ruled ledger.
- **Don't** add entrance animation beyond the SeamPhoto development.
- **Don't** repeat the tree mark at monumental scale more than once per page.
- **Don't** use gold for text, rules or outlines on white (2.85:1).
