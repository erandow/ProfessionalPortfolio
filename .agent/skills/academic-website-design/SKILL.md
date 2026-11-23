---
name: academic-website-design
description: >
  Design and implement a sophisticated, research-first personal
  academic website for an AI researcher preparing for PhD
  opportunities. Defines the visual system, page layouts,
  component patterns, responsive behavior, and acceptance criteria.
---

# Academic Website Design Skill

## 1. Mission

Create a visually sophisticated, minimalist, and credible academic website for Erfan Asadi.

The website must look like the personal website of a serious computer vision or machine learning researcher, with the execution quality of an experienced frontend engineer.

The design must be:

- Academically credible
- Modern and visually refined
- Minimal but not empty
- Research-oriented
- Easy to navigate
- Responsive and accessible
- Distinctive without being distracting

**Design philosophy: Modern Academic Minimalism.**

Combine the clarity of academic research websites with the typography, spacing, visual consistency, and interaction quality of carefully crafted modern product websites.

The primary audience consists of prospective PhD supervisors, university researchers, and academic collaborators.

A professor should be able to understand the researcher's identity, locate relevant research, inspect publications, and download the CV without unnecessary navigation.

## 2. Research-Based Design Principles

Base the design on these established recommendations:

1. Academic websites should clearly present a biography, research interests, publications, projects, and contact information.
2. Content should be divided into readable sections rather than large, uninterrupted blocks.
3. Publications and scientific contributions should be directly accessible.
4. The design should support the researcher's professional identity rather than compete for attention.
5. Navigation and accessibility should be treated as core requirements.

Relevant references:

- Nature Human Behaviour — How to design your academic website (2025)
- London School of Economics — How do you create a good personal website?
- UC Berkeley — Personal Academic Webpages
- Rice University — How to Make Your Own Academic Website
- W3C — WCAG 2.2

Treat the following visual specifications as project design decisions informed by these principles, not as universal requirements prescribed by those sources.

## 3. Visual Direction

### Overall Appearance

The website should resemble a modern research laboratory or academic publication website rather than a corporate landing page.

Characteristics:

- Clean white or warm off-white background
- Dark navy or charcoal typography
- Restrained blue accent
- Large, confident headings
- Generous whitespace
- Clear and precise alignment
- Subtle borders
- Minimal shadows
- Strong editorial layout
- Genuine research imagery
- Carefully controlled animations

Avoid trendy visual effects that undermine scientific credibility.

### Color System

Use the following initial palette:

| Purpose | Color |
|---|---|
| Primary background | `#FAFBFC` |
| Card background | `#FFFFFF` |
| Primary text | `#14243A` |
| Secondary text | `#526277` |
| Primary accent | `#315FAD` |
| Accent hover | `#244C90` |
| Border | `#E4E9F0` |
| Soft accent background | `#EDF3FC` |

Implement these as semantic design tokens.

Maintain a consistent visual hierarchy through typography and whitespace before introducing additional colors.

Use color to communicate meaning, not merely decoration.

### Typography

Use:

- **Inter** for interface text, headings, and body content.
- **JetBrains Mono** sparingly for technical identifiers, metadata, or code.
- **KaTeX-compatible mathematical fonts** for equations.

Recommended desktop sizes:

| Element | Size |
|---|---|
| Hero heading | 48–60px |
| Page heading | 40–48px |
| Section heading | 28–36px |
| Card heading | 19–24px |
| Body text | 16–18px |
| Metadata | 13–14px |

Typography must be fluid across screen sizes.

Body line-height should generally be 1.6–1.75.

Long-form research text should use a comfortable reading width of approximately 65–75 characters.

Do not render research descriptions in tiny, low-contrast text.

### Layout System

- Maximum site container: 1120–1200px
- Reading column: approximately 720–780px
- Desktop horizontal padding: 32–48px
- Mobile horizontal padding: 20–24px
- Section spacing: approximately 80–112px desktop
- Mobile section spacing: approximately 48–64px
- Spacing system: consistent 4px or 8px increments

Use CSS Grid for major page compositions and Flexbox for smaller component layouts.

Spacing should visually establish relationships between elements.

### Corners and Borders

Use restrained geometry:

- Small elements: 6–8px corner radius
- Research cards: 10–12px
- Hero imagery: 12–16px
- Buttons: 8–10px

Avoid excessive rounding, oversized pill-shaped cards, deep shadows, and decorative gradients.

---

# 4. Global Navigation

Implement a simple, consistent header.

### Desktop Navigation

Left:

**Erfan Asadi**

Right:

Home · Research · Publications · Projects · About · CV

The CV may be represented by a subtle outlined link.

The header should:

- Be visually lightweight
- Maintain consistent alignment with page content
- Have a clear active-page indicator
- Remain readable when scrolling
- Avoid excessive height

A sticky header is acceptable if it does not consume excessive vertical space.

### Mobile Navigation

Use a compact header with an accessible menu.

Requirements:

- Keyboard operable
- Visible focus indicators
- Screen-reader labels
- Appropriate expanded/collapsed state
- No horizontal overflow
- No dependence on animation

Do not introduce complex nested navigation.

---

# 5. Homepage Design

The homepage is the most important page.

It must communicate academic identity immediately.

## Section 5.1 — Hero

### Layout

Desktop: two-column composition.

Left: approximately 65% of available width.

Right: approximately 35%.

Mobile: stacked layout.

### Left Column

Content order:

1. Research identity eyebrow
2. Researcher's name
3. Research-focused headline
4. Short academic introduction
5. Primary actions
6. Scholarly profile links

Example eyebrow:

AI RESEARCHER · COMPUTER VISION · MULTIMODAL AI

Example heading:

**Understanding and Evaluating Visual Intelligence**

Example supporting copy:

"Exploring how intelligent systems perceive, evaluate, and understand visual content, with a focus on perceptual quality, semantic consistency, and reliable multimodal evaluation."

Use the researcher's actual academic biography and verified achievements from the project's content sources.

### Primary Actions

- Explore Research
- View Academic CV

Style:

Primary button: restrained filled accent.

Secondary button: outlined or text-based.

Do not add more than two dominant calls to action.

### Right Column

Use a high-quality, authentic professional portrait of the researcher.

Portrait treatment:

- Natural lighting
- Neutral background
- Professional but approachable
- No artificial laboratory background
- No exaggerated image effects
- Appropriate cropping
- No decorative illustrations competing with the face

If a verified portrait is not available, use a well-designed text-first hero. Do not substitute an AI-generated face.

### Hero Quality Requirement

The hero must answer:

- Who is this person?
- What is their research specialization?
- What kinds of scientific problems interest them?
- Where can I explore their work?

The name, research field, and primary actions should remain visible and legible on a typical desktop viewport.

## Section 5.2 — Research Interests

Title:

**Research Interests**

Supporting text: one concise sentence describing the research direction.

Display three thematic entries.

### Theme A

Perceptual and Semantic Image Quality Assessment

Established research area.

### Theme B

Multimodal and Agentic Evaluation

Emerging research direction.

### Theme C

Robust Visual Perception

Exploratory research interest.

### Visual Treatment

Prefer a clean three-column layout on desktop.

Each entry should include:

- Small thematic icon or meaningful research graphic
- Research theme title
- Two- or three-line description
- Link to the research page

Use subtle borders rather than deep shadows.

Do not use skill percentages, radial charts, or progress bars.

## Section 5.3 — Featured Research

Title:

**Selected Research**

Present two or three meaningful research contributions.

Each featured project should have:

- Actual research figure or representative visual
- Title
- Research category
- Short problem statement
- Contribution summary
- Relevant publication or project links

### Layout

Use alternating editorial feature rows.

For the first project:

Image on left, content on right.

For the next project:

Content on left, image on right.

On mobile, stack consistently with the image before the corresponding description.

Use real figures from papers, experiments, or original project diagrams.

Avoid generic pictures of neural networks or glowing AI brains.

### Important

The master's thesis on AI-generated image quality assessment should be a candidate flagship project.

It should receive more visual emphasis than ordinary engineering projects.

## Section 5.4 — Publications Preview

Title:

**Selected Publications**

Use a compact editorial list rather than large promotional cards.

Each item includes:

- Paper title
- Author list
- Venue and year
- Publication status
- Optional verified award label
- Paper / Code / Project links

Highlight the researcher's name in the author list.

Use thin separators and a clean alignment system.

Include a link to view all publications.

## Section 5.5 — About Preview

Create a short section explaining the intersection of academic research and professional engineering.

Use a restrained two-column layout:

Left: brief introduction.

Right: selected academic credentials and professional experience.

Do not turn this section into a corporate skills dashboard.

## Section 5.6 — Contact

Use a simple concluding section.

Headline:

**Let's Connect**

Supporting text should encourage research conversations and collaboration without overstating current PhD application status.

Include email, GitHub, LinkedIn, ORCID, and Google Scholar where verified and available.

Use direct links.

Do not require a contact form.

---

# 6. Research Page Design

Purpose: demonstrate scientific direction and intellectual depth.

This page should look like an editorial research overview rather than a marketing landing page.

## Hero

Title:

**Research**

Subtitle describing the researcher's scientific interests.

Use a comfortable reading width.

## Research Overview

A short introductory paragraph should explain how the research themes connect.

## Research Theme Sections

Each research theme should contain:

1. Theme title
2. Scientific motivation
3. Problem being investigated
4. Relevant methods
5. Existing experience
6. Representative work
7. Open research questions

### Visual Treatment

Use full-width thematic sections with alternating text-and-visual layouts.

Avoid treating research interests like product features.

Research diagrams should be meaningful and include captions.

### Research Maturity

Distinguish:

- Established research
- Emerging direction
- Exploratory interest

Use understated text labels, not brightly colored achievement badges.

Do not imply that exploratory ideas are completed research.

## Research Narrative

The reader should understand how the researcher's experience in visual quality assessment connects to future interests in multimodal evaluation, interpretability, and real-world perception.

---

# 7. Publications Page Design

Purpose: provide an accurate, searchable academic record.

## Layout

Use a vertically stacked publication list.

Default order: newest first.

Each publication should appear as an editorial record, not a portfolio marketing card.

### Publication Item

Include:

- Exact title
- Author list
- Venue and year
- Publication status
- Abstract or short verified summary
- DOI
- PDF
- Code
- Project page
- BibTeX where available

Use consistent metadata typography.

Links should be visually recognizable and accessible.

### Publication Thumbnails

Optional.

Only use actual paper figures or representative research visualizations.

Do not invent publication covers.

### Filtering

Implement filtering by publication category or year only when sufficient records exist to make it useful.

Do not introduce complicated search functionality for a small number of publications.

### Awards

Show verified awards prominently but tastefully.

Example:

"Best Paper Award · IPRIA 2025"

Only display this when exact attribution and wording are verified.

---

# 8. Individual Research Project Page

This page should resemble a polished scientific case study.

## Recommended Layout

### Hero

- Project title
- Research category
- Short summary
- Associated publication
- Important external links

### Research Figure

A meaningful, high-resolution research figure.

Include alternative text and a caption.

### Content Sections

1. Overview
2. Research Problem
3. Motivation
4. Methodology
5. Experimental Setup
6. Results
7. Discussion
8. Limitations
9. Resources and Reproducibility

### Reading Experience

Use a central reading column for narrative text.

Allow tables, figures, and comparison diagrams to expand wider when beneficial.

For long projects, provide a compact table of contents.

### Scientific Results

Display quantitative results using clearly labeled tables or appropriate charts.

Always state:

- Dataset
- Metric
- Evaluation conditions
- Comparison baseline

Never generate fictitious values to fill layouts.

### Mathematical Expressions

Support mathematical notation with KaTeX.

Ensure equations remain readable on mobile, including horizontal scrolling where necessary.

### Figures

Figures must have informative captions and accessible alternative text.

Create deliberate visual spacing before and after research figures.

Avoid unnecessary carousels.

---

# 9. About Page Design

Purpose: explain the academic and professional trajectory.

## Introduction

Use an approachable academic biography.

Do not write an overly promotional autobiography.

## Education

Present education in reverse chronological order.

Each entry should include:

- Degree
- Institution
- Dates, if verified
- Research specialization
- Thesis
- Relevant academic distinctions

Use a simple vertical timeline or structured list.

## Research Experience

Highlight verified scientific experience and contributions.

## Professional Engineering

Present software engineering experience as supporting evidence of implementation capability.

Focus on:

- Engineering complex systems
- Production applications
- AI agents
- Software architecture
- Technical leadership

Avoid overwhelming visitors with long technology lists.

## Academic CV

Include an obvious download/view link.

The website should not attempt to replace a complete academic CV.

---

# 10. CV Page

Provide a dedicated academic CV viewing experience.

Include:

- Brief explanatory introduction
- Downloadable PDF link
- Optional embedded PDF preview
- Last updated date

The download should remain usable if the embedded viewer fails.

Do not rebuild the complete CV as a complex interactive application.

---

# 11. Components and Interaction Design

Create a small reusable design system.

Core components:

- SiteHeader
- SiteFooter
- PageHeader
- SectionHeading
- ResearchTheme
- FeaturedProject
- PublicationItem
- ProjectFigure
- FigureCaption
- ExternalResourceLink
- AcademicTimeline
- ContactLinks
- ReadingLayout
- TableOfContents

All components should share typography, spacing, border, and interaction tokens.

## Hover Behavior

Acceptable:

- Subtle link color transitions
- Underline appearance
- Very light card border changes
- Small background-state changes

Avoid:

- Dramatic zooming
- 3D tilt
- Parallax effects
- Animated backgrounds
- Cursor-following effects
- Excessive scroll-triggered animations

Animations should not compete with reading.

Respect `prefers-reduced-motion`.

---

# 12. Responsive Design

Design mobile behavior intentionally, not as an afterthought.

## Desktop

- Clear content hierarchy
- Generous whitespace
- Two-column editorial layouts when useful
- Three-column research overview
- Comfortable navigation

## Tablet

- Reduce column count when necessary
- Preserve reading widths
- Simplify large figures
- Prevent cramped metadata

## Mobile

- Single-column reading layout
- Clear headings
- Accessible navigation
- Appropriately sized tap targets
- Readable paper titles
- Research figures that scale correctly
- No horizontal overflow

Tables with many scientific metrics may scroll horizontally inside their own containers.

Test at multiple viewport widths, including narrow mobile screens.

---

# 13. Accessibility

Target WCAG 2.2 AA.

Implement:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus indicators
- Descriptive links
- Text alternatives for meaningful images
- Sufficient color contrast
- Accessible button names
- Reduced-motion support

Target at least 4.5:1 contrast for normal text, subject to WCAG exceptions.

Ensure that information is never communicated by color alone.

---

# 14. Performance

Performance is part of the design quality.

Target good Core Web Vitals:

- LCP: 2.5 seconds or less
- INP: 200 milliseconds or less
- CLS: 0.1 or less

Prefer:

- Static page rendering
- Optimized images
- Limited client-side JavaScript
- Appropriate image dimensions
- Efficient font loading
- Simple transitions

Avoid large animation libraries unless there is a clear requirement.

Do not sacrifice research readability to achieve decorative effects.

---

# 15. Content Integrity

This is an academic website.

Scientific credibility is more important than visual completeness.

Never:

- Invent publication titles
- Invent awards
- Invent research results
- Invent datasets or metrics
- Fabricate affiliations
- Generate fictitious paper thumbnails
- Claim exploratory interests are completed contributions
- Misrepresent accepted manuscripts as already published

If verified content is missing, create an internal content TODO rather than presenting fabricated material as fact.

Use real evidence whenever available.

---

# 16. Design Review Procedure

Before approving any page, evaluate it from four perspectives.

## Perspective A: Prospective PhD Supervisor

Can I quickly understand:

- What this researcher studies?
- What the strongest scientific contributions are?
- Which papers I should read?
- What future directions interest the researcher?
- How to contact them?

## Perspective B: Academic Peer

Are publications, figures, methods, terminology, and results presented accurately?

## Perspective C: UX Designer

Is the page visually balanced, consistent, legible, and easy to navigate?

## Perspective D: Frontend Engineer

Is the implementation accessible, responsive, performant, maintainable, and technically sound?

A page should not be considered complete until it meets all four perspectives.

---

# 17. Execution Instructions

When applying this skill:

1. Inspect the existing project and available content.
2. Read the researcher's background and academic content instructions.
3. Establish the site's information architecture.
4. Build shared design tokens and components.
5. Design the homepage first.
6. Implement the Research and Publications pages.
7. Implement project detail pages.
8. Implement About and CV.
9. Test responsive behavior and accessibility.
10. Review the website for scientific credibility.

Do not arbitrarily redesign established components while implementing later pages.

Maintain design consistency across the website.

When design decisions are ambiguous, prefer the simpler, more readable, and more academically credible option.

Do not ask unnecessary questions. Use the design defaults specified here.

---

# 18. Definition of Done

The design is complete when:

- The homepage immediately establishes research identity.
- The navigation is intuitive.
- Research areas are clearly communicated.
- Publications are readable and accessible.
- Research projects have meaningful visual presentation.
- Long-form scientific content is comfortable to read.
- The site is responsive on mobile and desktop.
- The visual system is consistent.
- Accessibility requirements have been tested.
- Performance has been reviewed.
- No generic or misleading research imagery remains.
- The final appearance feels professional, authentic, and academically credible.

**Final design principle:**

The website should be visually memorable because of its clarity, precision, typography, and excellent presentation of real research—not because of unnecessary visual effects.
