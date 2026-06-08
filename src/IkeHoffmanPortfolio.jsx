import { useState, useEffect, useRef } from "react";
export default function IkeHoffmanPortfolio() {
  const [view, setView] = useState("professional");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const professional = [
    {
      title: "Tactica Market Research Dashboard",
      tagline: "Live CRE market intelligence, pulled from public APIs.",
      description:
        "A live dashboard aggregating 218 U.S. metros' rent, vacancy, and macro signals (employment trends, population growth, affordability) from multiple APIs into a single interface. Built to automate the tedious nature of doing a deep market dive and eliminate the need to navigate clunky, unstructured government websites.",
      tags: ["React", "Vercel", "API Orchestration"],
      link: "https://www.tacticares.com/market-research",
      linkLabel: "View live →",
      thumb: <ThumbDashboard />,
      expand: {
        problem:
          "I always cringed when I had to research a metro using BLS or Census data. It took me forever to find what I needed from these sites, and often required Excel analysis on top of it to pull out the specific employment and population trends that matter. Doing a thorough analysis of a single city could take at least half a day.",
        built:
          "A single interface pulling rent, vacancy, population, wage, and macro signals from Census, FRED, BLS, and several CRE-specific sources. Operators can pull market context for any MSA in under a minute. Continuously adding new APIs as I find ones worth integrating.",
        details:
          "React frontend, Vercel hosting, pure API orchestration with no backend database — Every query hits the source data fresh. The interesting engineering work was less about building the dashboard and more about normalizing wildly different API schemas into a consistent internal format.",
        images: [
          {
            src: "/images/tactica-dashboard.mp4",
            type: "video",
            caption: "Live walkthrough of the Charleston MSA report — rank, key metrics, demographics, and comparable markets."
          }
        ],
        cta: { label: "View the live dashboard →", href: "https://www.tacticares.com/market-research" },
      },
    },
    {
      title: "Rent Roll Scrubber",
      tagline: "AI extraction for the messiest document in Multifamily Real Estate.",
      description:
        "An AI tool that extracts and standardizes rent roll data from the wildly inconsistent PDFs operators actually send. ~95% accuracy across formats. A DIY version of what venture-funded proptech is building.",
      tags: ["Automation", "PDF Parsing", "Python"],
      link: null,
      linkLabel: "Internal Use Only",
      thumb: <ThumbRentRoll />,
      expand: {
        problem:
          "Rent rolls are the worst-formatted document in multifamily real estate. Every property management system exports them differently. Tenant records span multiple rows. Charge codes are cryptic (conpest, contfinc, conrent, coninsu) and vary by operator. Vacant units have to be reconciled separately. Underwriters routinely spend 30–60 minutes manually cleaning each rent roll before any analysis can begin — And every hour spent cleaning is an hour not spent evaluating the actual deal.",
        built:
          "An AI pipeline that ingests the messy PDF/Excels directly and outputs a clean rent roll analysis package: detailed unit mix, summary unit mix, lease expiration schedule, and move-in rental trends by floorplan type. The investor uploads what they have — They get back what they need.",
        details:
          "About 95% accuracy across the formats I've tested. Handles multi-charge structures, reconciles vacant units, and flags anomalies (e.g., units with two active rent codes) rather than silently picking one. Still actively training on edge cases — Every new rent roll teaches the system something.",
        images: [
          {
            src: "/images/rent-roll-scrubber.mp4",
            type: "video",
            layout: "horizontal",
            caption: "From chaos to clarity — A raw rent roll export scrolled fast, then the structured outputs the scrubber produces: detailed and summary unit mix, occupancy breakdown, lease expiration schedule, and move-in rent trends by floorplan."
          },
        ],
      },
    },
    {
      title: "Newsletter Automation System",
      tagline: "A custom Claude skill that ships a weekly newsletter.",
      description:
        "An automated workflow that creates and assembles the HTML email template for Tactica's 8,000-subscriber weekly newsletter. Turned a half-day of work into under an hour.",
      tags: ["Claude Skills", "HTML Email", "Workflow"],
      link: "https://www.tacticares.com/newsletter-signup",
      linkLabel: "See the newsletter →",
      thumb: <ThumbNewsletter />,
      expand: {
        problem:
          "Running a weekly newsletter for 8,000 subscribers had taken up my entire Friday morning — Pulling market data, researching angles, selecting Tactica content to feature (blogs and videos), writing copy, formatting HTML, testing links. The kind of task that's too custom to outsource but too tedious to enjoy writing every week.",
        built:
          "A custom Claude skill that orchestrates the full workflow: Pulls the latest data from the Tactica dashboard API, researches the week's CRE trends, picks Tactica content matching the week's macro theme, drafts copy in my voice, and assembles the HTML email ready for review. I still edit, add my thoughts in the intro (no AI by choice), and ship — But starting with a blank slate is a thing of the past.",
        details:
          "Turned a three- to six-hour task into an hour of directed review and refinement. The skill is structured enough that if I ever hired a junior editor, I could hand them the system and the quality would hold. This is also the piece that made me realize how valuable 'small agents for specific workflows' are as a pattern — It's the exact same shape as what CRE firms actually need internally.",
        images: [
          {
            src: "/images/newsletter-scroll.mp4",
            type: "video",
            caption: "A recent issue (May 29, 2026) — Ike's take on the macro environment, CRE-relevant analysis, market data, and sourced citations throughout."
          }
        ],
        cta: { label: "See the newsletter →", href: "https://www.tacticares.com/newsletter-signup" },
      },
    },
  ];
  const personal = [
    {
      title: "Investment Portfolio Dashboard",
      tagline: "One view across every brokerage account.",
      description:
        "Consolidates holdings from multiple brokerages, uses AI to decompose ETFs into underlying allocation (large cap, small cap, international, etc.), tracks annual dividend income, and runs investment growth forecasts. Statement-upload based — No credential sharing.",
      tags: ["React", "Claude", "Financial Modeling"],
      link: null,
      linkLabel: "For personal use",
      thumb: <ThumbPortfolio />,
      expand: {
        problem:
          "Across 10+ brokerage accounts and dozens of ETFs, I had no real visibility into what I actually owned. Every ETF abstracts its underlying holdings behind a single ticker — So 'VTI' tells you nothing about whether you're overweight large cap, small cap, or international. Multiply that across a dozen accounts and aggregate allocation becomes incomprehensible. The consumer tools that solve this (Mint, Empower, etc.) are convenient, but wouldn't give me the breakdown I desired.",
        built:
          "A dashboard that ingests brokerage statement uploads (PDF or CSV) directly. Consolidates holdings across every account, then uses AI to decompose each ETF into its underlying allocation. A VTI position now shows up as ~70% large cap / 20% mid / 10% small under the hood, not as an opaque ticker. Aggregate dividend income tracking and a long-run growth calculator (with adjustable contribution, reinvestment and growth assumptions) round it out.",
        details:
          "I'd tried for years to build this in Excel and never quite cracked it — The ETF decomposition and dividend tracking pieces were the wall. Claude turned out to be the right tool for building it and, unexpectedly, as a sounding board on portfolio composition and tax-efficient rebalancing strategies.",
        images: [
          {
            src: "/images/portfolio-dashboard.mp4",
            type: "video",
            caption: "Numbers and allocations altered for privacy. I wish this was real."
          }
        ],
      },
    },
    {
      title: "NCAA Tournament Data Analysis",
      tagline: "Every opening tournament game since 2008, scraped and modeled.",
      description:
        "Scraped every first round NCAA tournament game, opening and closing line, and result from 2008 to present. Built nine signal-based indicators from line movement patterns and backtested each against tournament outcomes.",
      tags: ["Python", "Web Scraping", "Backtesting"],
      link: null,
      linkLabel: "Methodology on request",
      thumb: <ThumbNCAA />,
      expand: {
        problem:
          "A curiosity project: Do opening-to-closing spread movements in NCAA tournament games contain any predictive signal, or is it all noise by the time tipoff hits? I wanted a real answer with real data.",
        built:
          "Scraped every opening round NCAA tournament game from 2008 to present — Opening line, closing line, final score, seed matchups. Built nine signal-based indicators from movement patterns (reverse line movement, steam moves, line flips, etc.) and backtested each independently against tournament outcomes.",
        details:
          "The project is less about the findings and more about the pipeline — Scraping across multiple historical sources, reconciling inconsistent data, designing a clean backtest framework, measuring hit rates against properly conservative baselines. But making a little money off the effort doesn't hurt :).",
        images: [
          {
            src: "/images/ncaa-signals.mp4",
            type: "video",
            layout: "horizontal",
            caption: "Raw scraped tournament games, then the signal-based indicators built from line movement patterns."
          }
        ],
      },
    },
    {
      title: "Multiplayer Game Picker Pool App",
      tagline: "Filling out your bracket on steroids. Loser subject to a punishment.",
      description:
        "A multiplayer app where friends pick 32 first-round NCAA tournament games. Pulls matchups and lines from live APIs, updates scores in real time, and tracks standings with a 'press' function to hurt others and boost yourself.",
      tags: ["Vanilla JS", "Firebase", "ESPN API", "Real-Time Sync"],
      link: null,
      linkLabel: "Built for friends",
      thumb: <ThumbPrediction />,
      expand: {
        problem:
          "Every March, my friends and I run a first-round pick-em pool we call \"The Punishment Bet.\" The biggest loser is subject to a punishment decided by participants who didn't lose. Using a spreadsheet worked great when we were all together in the same living room. But now we go to Las Vegas, and carrying a laptop around the Strip, manually entering game results, and tracking standings isn't feasible.",
        built:
          "A real-time multiplayer app where friends pick all 32 first-round games. The app pulls matchups and lines automatically from live sports APIs, updates scores as games happen, recalculates standings in real time, and includes the option to sabotage others by \"icing their picks\" and boosting your own (with the caveat that if you're wrong, you lose double).",
        details:
          "Built as a single-file vanilla JS app — No framework — With Firebase Realtime Database handling state sync across all players, live scores pulled from the ESPN API, and the whole thing deployed free on Cloudflare Pages.",
        images: [
          {
            src: "/images/mm-leaderboard.png",
            layout: "phone",
            caption: "Live standings after a tournament round — Jesse and Ike tied at 15, with bonus modifiers (lock and ice) visible. Chris sang a beautiful rendition of \"Wonderwall\" at a capacity karaoke bar on the Las Vegas Strip."
          },
          {
            src: "/images/mm-picks.mp4",
            type: "video",
            layout: "horizontal",
            caption: "Making picks — favorite/underdog and over/under for each game, plus the optional ICE sabotage."
          },
          {
            src: "/images/mm-scores.mp4",
            type: "video",
            layout: "horizontal",
            caption: "Live game results pulled from the ESPN API, with day filtering for Thursday and Friday games."
          },
        ],
      },
    },
  ];
  const projects = view === "professional" ? professional : personal;
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        :root {
          --bg: #F4EFE4;
          --paper: #FAF6EC;
          --ink: #161412;
          --ink-muted: #5A5751;
          --ink-soft: #8A867E;
          --rule: #1C1915;
          --accent: #7A4E1E;
          --accent-soft: #B8874E;
          --hairline: rgba(28, 25, 21, 0.12);
          --hairline-strong: rgba(28, 25, 21, 0.35);
        }
        .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; font-variation-settings: "SOFT" 50, "WONK" 0; }
        .font-body { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .grain {
          position: fixed; inset: 0; pointer-events: none;
          opacity: 0.35; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0 0.06 0 0 0 0 0.25 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          z-index: 1;
        }
        .rule { border-color: var(--hairline-strong); }
        .rule-soft { border-color: var(--hairline); }
        .fade-up { opacity: 0; transform: translateY(12px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .card {
          background: var(--paper);
          border: 1px solid var(--hairline);
          transition: border-color 0.25s ease;
          display: flex; flex-direction: column;
        }
        .card:hover { border-color: var(--hairline-strong); }
        .card.open { border-color: var(--ink); }
        .link-underline {
          background-image: linear-gradient(var(--ink), var(--ink));
          background-size: 100% 1px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.3s ease;
        }
        .link-underline:hover { background-size: 0% 1px; }
        .accent-underline {
          background-image: linear-gradient(var(--accent), var(--accent));
          background-size: 100% 1px;
          background-position: 0 100%;
          background-repeat: no-repeat;
        }
        /* Pill-style segmented toggle */
        .seg-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px;
          background: var(--paper);
          border: 1px solid var(--hairline-strong);
          border-radius: 999px;
        }
        .seg-thumb {
          position: absolute;
          top: 4px;
          bottom: 4px;
          width: calc(50% - 4px);
          background: var(--accent);
          border-radius: 999px;
          transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          box-shadow: 0 1px 3px rgba(28, 25, 21, 0.2);
        }
        .seg-thumb.right { transform: translateX(100%); }
        .seg-btn {
          position: relative;
          z-index: 1;
          padding: 8px 18px;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .seg-btn.active { color: var(--paper); }
        .seg-btn.inactive { color: var(--ink-muted); }
        .seg-btn.inactive:hover { color: var(--ink); }
        .seg-count {
          opacity: 0.7;
          margin-left: 4px;
        }
        /* Prominent "Read more" button */
        .readmore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: var(--accent);
          color: var(--paper);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid var(--accent);
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .readmore-btn:hover {
          background: var(--ink);
          border-color: var(--ink);
        }
        .readmore-btn.open {
          background: transparent;
          color: var(--ink);
          border-color: var(--hairline-strong);
        }
        .readmore-btn.open:hover {
          border-color: var(--ink);
        }
        .readmore-count {
          opacity: 0.8;
          font-size: 10px;
        }
        /* Fluid type system — uses container query units (cqi) so text scales with its container, not the viewport */
        .t-mast { font-size: clamp(2.75rem, 11cqi, 7rem); line-height: 0.9; letter-spacing: -0.03em; }
        .t-hero-sub { font-size: clamp(1rem, 2.4cqi, 1.375rem); line-height: 1.35; }
        .t-section-lead { font-size: clamp(1.125rem, 2.4cqi, 1.75rem); line-height: 1.4; }
        .t-section-h { font-size: clamp(1.75rem, 4.4cqi, 3rem); line-height: 1; letter-spacing: -0.02em; }
        .t-card-title { font-size: clamp(1.25rem, 2cqi, 1.625rem); line-height: 1.15; letter-spacing: -0.015em; }
        .t-card-tagline { font-size: clamp(0.95rem, 1.7cqi, 1.125rem); line-height: 1.3; }
        .t-footer-lead { font-size: clamp(1rem, 1.6cqi, 1.25rem); line-height: 1.4; }
        .t-footnote { font-size: clamp(1.05rem, 2.2cqi, 1.5rem); line-height: 1.4; }
        .t-dateline { font-size: clamp(9px, 0.9cqi, 11px); letter-spacing: 0.18em; }
        .t-meta { font-size: clamp(9px, 0.9cqi, 11px); letter-spacing: 0.15em; }
        .t-expand-h { font-size: clamp(0.7rem, 0.95cqi, 0.75rem); letter-spacing: 0.22em; }
        .t-expand-body { font-size: clamp(0.9375rem, 1.15cqi, 1rem); line-height: 1.65; }
        /* Expand animation via grid-template-rows */
        .expand-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .expand-wrap.open { grid-template-rows: 1fr; }
        .expand-inner { overflow: hidden; min-height: 0; }
        .plus-icon { width: 12px; height: 12px; position: relative; display: inline-block; }
        .plus-icon::before, .plus-icon::after {
          content: ""; position: absolute; background: currentColor;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }
        .plus-icon::before { top: 50%; left: 0; right: 0; height: 1.5px; transform: translateY(-50%); }
        .plus-icon::after { left: 50%; top: 0; bottom: 0; width: 1.5px; transform: translateX(-50%); }
        .plus-icon.open::after { transform: translateX(-50%) rotate(90deg); opacity: 0; }
        img { max-width: 100%; height: auto; display: block; }
        /* Phone frame for vertical video/image embeds */
        .phone-frame {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 32px 24px;
          background: linear-gradient(180deg, #f5f0e6 0%, #ebe5d6 100%);
        }
        .phone-media {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
          border-radius: 28px;
          border: 8px solid #161412;
          box-shadow:
            0 1px 0 1px rgba(28, 25, 21, 0.4),
            0 20px 40px -10px rgba(28, 25, 21, 0.25),
            0 8px 16px -4px rgba(28, 25, 21, 0.15);
          background: #000;
        }
        /* Horizontal video frame (for landscape recordings) */
        .video-horizontal {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 24px;
          background: linear-gradient(180deg, #f5f0e6 0%, #ebe5d6 100%);
        }
        .video-horizontal video {
          width: 100%;
          max-width: 540px;
          height: auto;
          display: block;
          border-radius: 8px;
          border: 1px solid var(--hairline-strong);
          box-shadow:
            0 12px 32px -8px rgba(28, 25, 21, 0.22),
            0 4px 12px -2px rgba(28, 25, 21, 0.12);
          background: #000;
        }
        /* Container-query responsive utilities */
        .c-row { display: flex; flex-direction: column; }
        .c-dateline-mid { display: none; }
        .c-expand-grid { display: flex; flex-direction: column; gap: 0.5rem; }
        @container (min-width: 720px) {
          .c-row { flex-direction: row; align-items: flex-end; justify-content: space-between; }
          .c-row.c-row-center { align-items: center; }
          .c-dateline-mid { display: inline; }
          .c-expand-grid { display: grid; grid-template-columns: 3fr 9fr; gap: 1.25rem; align-items: baseline; }
        }
        @container (min-width: 860px) {
          .c-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
      <div className="grain" />
      <div className="relative" style={{ zIndex: 2, containerType: "inline-size" }}>
        {/* MASTHEAD */}
        <header className="border-b rule" style={{ borderBottomWidth: 2 }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className={`font-mono t-dateline uppercase py-3 flex items-center justify-between border-b rule-soft fade-up ${mounted ? "in" : ""}`} style={{ color: "var(--ink-muted)" }}>
              <span>AI Portfolio</span>
              <span className="c-dateline-mid">St. Paul, Minnesota</span>
              <span>2025 - Present</span>
            </div>
            <div className="py-8 sm:py-10 md:py-16">
              <h1
                className={`font-display t-mast fade-up ${mounted ? "in" : ""}`}
                style={{
                  fontWeight: 400,
                  fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 144',
                  transitionDelay: "100ms",
                }}
              >
                Ike <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Hoffman</em>
              </h1>
              <div className={`mt-5 sm:mt-6 md:mt-8 c-row gap-4 fade-up ${mounted ? "in" : ""}`} style={{ transitionDelay: "200ms" }}>
                <p className="font-display t-hero-sub max-w-2xl" style={{ fontStyle: "italic", fontWeight: 300 }}>
                AI implementation for CRE analysis, personal finance, investing, and hobbies.
                </p>
                <div className="font-mono t-meta uppercase flex gap-5 md:gap-6" style={{ color: "var(--ink)" }}>
                  <a href="https://www.linkedin.com/in/ike-hoffman-2b05a139/" target="_blank" rel="noopener noreferrer" className="link-underline pb-0.5">LinkedIn</a>
                  <a href="mailto:isaacmhoffman@gmail.com" className="link-underline pb-0.5">Email</a>
                  <a href="https://www.tacticares.com/" target="_blank" rel="noopener noreferrer" className="link-underline pb-0.5">Tactica</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* INTRO */}
        <section className="border-b rule-soft">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 sm:py-12 md:py-16">
            <div className="font-mono t-meta uppercase mb-5" style={{ color: "var(--ink-soft)" }}>
              § 01 — The Premise
            </div>
            <p className="font-display t-section-lead max-w-3xl" style={{ fontWeight: 300 }}>
            AI narrows the gap between ideas and implementation. Just a few years ago, some of my AI projects would have been impossible to undertake due to technical limitations and cost constraints. While I'm far from an engineer, I'm someone who understands problems well enough to articulate them and build a solution (a prototype, anyway).
            </p>
          </div>
        </section>
        {/* WORK */}
        <section>
          <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-8">
            <div className="c-row gap-6">
              <div>
                <div className="font-mono t-meta uppercase mb-3" style={{ color: "var(--ink-soft)" }}>
                  § 02 — Selected Work
                </div>
                <h2 className="font-display t-section-h" style={{ fontWeight: 400 }}>
                  Things I've built with AI (beyond this website).
                </h2>
              </div>
              <Toggle view={view} setView={setView} professional={professional} personal={personal} />
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
            <div className="grid grid-cols-1 c-cards gap-6 md:gap-8 items-start">
              {projects.map((p, i) => (
                <ProjectCard key={`${view}-${i}`} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
        {/* FOOTNOTE */}
        <section className="border-t rule-soft" style={{ background: "var(--paper)" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 sm:py-16 md:py-20">
            <div className="font-mono t-meta uppercase mb-5" style={{ color: "var(--ink-soft)" }}>
              § 03 — Where I Fit
            </div>
            <p className="font-display t-footnote max-w-3xl" style={{ fontWeight: 300 }}>
            Most CRE professionals don't build software. Most software developers don't understand CRE. I sit at the crossroads. Close enough to the work to know which problems matter. Resourceful enough with AI tools to actually solve them.
            </p>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="border-t rule" style={{ borderTopWidth: 2 }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 sm:py-10 c-row c-row-center gap-5">
            <div className="font-display t-footer-lead max-w-2xl" style={{ fontStyle: "italic", fontWeight: 400 }}>
              Open to conversations with proptech teams, CRE firms building AI capability, and anyone else looking to brainstorm.
            </div>
            <div className="flex gap-5 font-mono t-meta uppercase">
              <a href="mailto:isaacmhoffman@gmail.com" className="link-underline pb-0.5">
                Say hello →
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 pb-6 sm:pb-8 font-mono t-dateline uppercase flex justify-between" style={{ color: "var(--ink-soft)" }}>
            <span>© Ike Hoffman, 2026</span>
            <span>Set in Fraunces & Geist</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
/* ───── TOGGLE ───── */
function Toggle({ view, setView, professional, personal }) {
  const isPro = view === "professional";
  return (
    <div className="seg-toggle">
      <div className={`seg-thumb ${isPro ? "" : "right"}`} />
      <button
        onClick={() => setView("professional")}
        className={`seg-btn ${isPro ? "active" : "inactive"}`}
        aria-pressed={isPro}
      >
        Professional <span className="seg-count">({professional.length})</span>
      </button>
      <button
        onClick={() => setView("personal")}
        className={`seg-btn ${!isPro ? "active" : "inactive"}`}
        aria-pressed={!isPro}
      >
        Personal <span className="seg-count">({personal.length})</span>
      </button>
    </div>
  );
}
/* ───── PROJECT CARD ───── */
function ProjectCard({ project, index }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const articleRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80 + index * 90);
    return () => clearTimeout(t);
  }, [index]);

  // Count media items for the "Read more" badge
  const mediaCount = project.expand?.images?.length || 0;
  const mediaLabel = mediaCount > 0
    ? mediaCount === 1
      ? "1 item"
      : `${mediaCount} items`
    : null;

  return (
    <article
      ref={articleRef}
      className={`card fade-up ${mounted ? "in" : ""} ${open ? "open" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative overflow-hidden border-b rule-soft" style={{ aspectRatio: "16 / 10", background: "var(--bg)" }}>
        {project.thumb}
        <div className="absolute top-3 left-3 font-mono uppercase tracking-[0.2em] px-2 py-1" style={{ background: "var(--paper)", color: "var(--ink-muted)", border: "1px solid var(--hairline)", fontSize: "10px" }}>
          № {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
        <h3 className="font-display t-card-title" style={{ fontWeight: 400 }}>
          {project.title}
        </h3>
        <p className="font-display italic mt-1 t-card-tagline" style={{ color: "var(--accent)", fontWeight: 400 }}>
          {project.tagline}
        </p>
        <p className="font-body mt-4" style={{ color: "var(--ink-muted)", fontSize: "15px", lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="font-mono uppercase tracking-[0.15em] px-2.5 py-1 border" style={{ borderColor: "var(--hairline-strong)", color: "var(--ink)", fontSize: "10px" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t rule-soft flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={() => setOpen(!open)}
            className={`readmore-btn ${open ? "open" : ""}`}
            aria-expanded={open}
          >
            <span className={`plus-icon ${open ? "open" : ""}`} />
            <span>{open ? "Close" : "Read more"}</span>
            {!open && mediaLabel && (
              <span className="readmore-count">· {mediaLabel}</span>
            )}
          </button>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase tracking-[0.2em] link-underline pb-0.5"
              style={{ fontSize: "11px" }}
            >
              {project.linkLabel}
            </a>
          ) : (
            <span className="font-mono uppercase tracking-[0.2em] text-right" style={{ color: "var(--ink-soft)", fontSize: "11px" }}>
              {project.linkLabel}
            </span>
          )}
        </div>
        <div className={`expand-wrap ${open ? "open" : ""}`}>
          <div className="expand-inner">
            <ExpandContent expand={project.expand} />
          </div>
        </div>
      </div>
    </article>
  );
}
/* ───── EXPAND CONTENT ───── */
function ExpandContent({ expand }) {
  if (!expand) return null;
  return (
    <div className="mt-8 pt-8 border-t rule-soft">
      <ExpandSection label="The Problem" body={expand.problem} />
      <ExpandSection label="What I Built" body={expand.built} />
      <ExpandSection label="Details" body={expand.details} />
      {expand.images && expand.images.length > 0 && (
        <div className="mt-8">
          <div className="font-mono t-expand-h uppercase mb-4" style={{ color: "var(--ink-soft)" }}>
            In Use
          </div>
          <div className="flex flex-col gap-5">
            {expand.images.map((item, i) => {
              const isVideo = item.type === "video" || (item.src && item.src.match(/\.(mp4|webm|mov)$/i));
              const isHorizontal = item.layout === "horizontal";
              const isPhoneFramed = item.layout === "phone" || (isVideo && !isHorizontal);
              return (
                <figure key={i} className="border rule-soft" style={{ background: "var(--bg)" }}>
                  {item.src ? (
                    isVideo ? (
                      <div className={isHorizontal ? "video-horizontal" : "phone-frame"}>
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className={isHorizontal ? "" : "phone-media"}
                        />
                      </div>
                    ) : isPhoneFramed ? (
                      <div className="phone-frame">
                        <img
                          src={item.src}
                          alt={item.caption || ""}
                          loading="lazy"
                          className="phone-media"
                        />
                      </div>
                    ) : (
                      <img src={item.src} alt={item.caption || ""} loading="lazy" />
                    )
                  ) : (
                    <div className="p-10 text-center font-mono uppercase" style={{ color: "var(--ink-soft)", fontSize: "10px", letterSpacing: "0.2em" }}>
                      [ Image placeholder ]
                    </div>
                  )}
                  {item.caption && (
                    <figcaption className="px-4 py-3 border-t rule-soft font-display italic" style={{ fontSize: "14px", color: "var(--ink-muted)", lineHeight: 1.4 }}>
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      )}
      {expand.cta && (
        <div className="mt-8">
          <a
            href={expand.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono uppercase tracking-[0.2em] border-b-2 pb-1"
            style={{ fontSize: "11px", color: "var(--accent)", borderColor: "var(--accent)" }}
          >
            {expand.cta.label}
          </a>
        </div>
      )}
    </div>
  );
}
function ExpandSection({ label, body }) {
  if (!body) return null;
  return (
    <div className="mb-7 c-expand-grid">
      <div>
        <div className="font-mono t-expand-h uppercase" style={{ color: "var(--ink-soft)" }}>
          {label}
        </div>
      </div>
      <div>
        <p className="font-body t-expand-body" style={{ color: "var(--ink)" }}>
          {body}
        </p>
      </div>
    </div>
  );
}
/* ───── THUMBNAILS ───── */
function ThumbDashboard() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      {[...Array(8)].map((_, i) => (
        <line key={`v${i}`} x1={50 + i * 42} y1="30" x2={50 + i * 42} y2="220" stroke="var(--hairline)" strokeWidth="0.5" />
      ))}
      {[...Array(5)].map((_, i) => (
        <line key={`h${i}`} x1="40" y1={50 + i * 38} x2="380" y2={50 + i * 38} stroke="var(--hairline)" strokeWidth="0.5" />
      ))}
      <polyline points="50,170 92,145 134,155 176,110 218,130 260,85 302,95 344,60" fill="none" stroke="var(--ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="50,190 92,180 134,175 176,160 218,165 260,140 302,135 344,120" fill="none" stroke="var(--accent)" strokeWidth="1.25" strokeDasharray="3 3" />
      {[[50, 170], [92, 145], [134, 155], [176, 110], [218, 130], [260, 85], [302, 95], [344, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.5" />
      ))}
      <text x="40" y="240" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-muted)" letterSpacing="1">Q1 · Q2 · Q3 · Q4</text>
      <text x="344" y="45" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--accent)" letterSpacing="1" textAnchor="end">+ 12.4%</text>
    </svg>
  );
}
function ThumbRentRoll() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      <g transform="translate(40, 30)">
        <rect width="110" height="190" fill="var(--paper)" stroke="var(--hairline-strong)" strokeWidth="0.75" />
        {[...Array(11)].map((_, i) => (
          <line key={i} x1="10" y1={20 + i * 14} x2={10 + (30 + (i * 17) % 70)} y2={20 + i * 14} stroke="var(--ink-muted)" strokeWidth="1" opacity={0.5 + (i % 3) * 0.15} />
        ))}
        <path d="M 15 180 Q 30 172, 50 178 T 90 176" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
      </g>
      <g transform="translate(170, 125)">
        <line x1="0" y1="0" x2="55" y2="0" stroke="var(--ink)" strokeWidth="1.25" />
        <polyline points="48,-5 55,0 48,5" fill="none" stroke="var(--ink)" strokeWidth="1.25" />
        <text x="27" y="-10" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--accent)" textAnchor="middle" letterSpacing="1">AI</text>
      </g>
      <g transform="translate(240, 30)">
        <rect width="120" height="190" fill="var(--paper)" stroke="var(--hairline-strong)" strokeWidth="0.75" />
        {[...Array(11)].map((_, i) => (
          <line key={`rh${i}`} x1="0" y1={17 * (i + 1)} x2="120" y2={17 * (i + 1)} stroke="var(--hairline)" strokeWidth="0.5" />
        ))}
        {[...Array(4)].map((_, i) => (
          <line key={`rv${i}`} x1={30 * (i + 1)} y1="0" x2={30 * (i + 1)} y2="190" stroke="var(--hairline)" strokeWidth="0.5" />
        ))}
        <rect x="0" y="0" width="120" height="17" fill="var(--ink)" />
        {[...Array(10)].map((_, r) =>
          [...Array(4)].map((_, c) => (
            <circle key={`d${r}${c}`} cx={15 + c * 30} cy={26 + r * 17} r="1.5" fill="var(--ink)" />
          ))
        )}
      </g>
    </svg>
  );
}
function ThumbPortfolio() {
  // Allocations: Large Cap 30%, Bonds 18%, International 15%, Small Cap 13%, Other 24%
  // Circumference for r=55: 2*pi*55 ≈ 345.575
  // Arc lengths:
  //   Large Cap (30%): 103.67
  //   Bonds (18%):     62.20
  //   International (15%): 51.84
  //   Small Cap (13%): 44.92
  //   Other (24%):     82.94
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      <g transform="translate(125, 125)">
        <circle r="70" fill="none" stroke="var(--hairline)" strokeWidth="1" />
        {/* Large Cap 30% - ink */}
        <circle r="55" fill="none" stroke="var(--ink)" strokeWidth="18" strokeDasharray="103.67 345.575" strokeDashoffset="0" transform="rotate(-90)" />
        {/* Bonds 18% - accent */}
        <circle r="55" fill="none" stroke="var(--accent)" strokeWidth="18" strokeDasharray="62.20 345.575" strokeDashoffset="-103.67" transform="rotate(-90)" />
        {/* International 15% - accent-soft */}
        <circle r="55" fill="none" stroke="var(--accent-soft)" strokeWidth="18" strokeDasharray="51.84 345.575" strokeDashoffset="-165.87" transform="rotate(-90)" />
        {/* Small Cap 13% - ink-muted */}
        <circle r="55" fill="none" stroke="var(--ink-muted)" strokeWidth="18" strokeDasharray="44.92 345.575" strokeDashoffset="-217.71" transform="rotate(-90)" />
        {/* Other 24% - ink-soft */}
        <circle r="55" fill="none" stroke="var(--ink-soft)" strokeWidth="18" strokeDasharray="82.94 345.575" strokeDashoffset="-262.63" transform="rotate(-90)" />
        <text y="-2" fontFamily="Fraunces, serif" fontSize="18" fontStyle="italic" fill="var(--ink)" textAnchor="middle">$11.29M</text>
        <text y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-muted)" textAnchor="middle" letterSpacing="1">NET</text>
      </g>
      <g transform="translate(230, 58)" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink)" letterSpacing="1">
        <g><rect width="10" height="10" fill="var(--ink)" /><text x="18" y="9">LARGE CAP · 30%</text></g>
        <g transform="translate(0, 20)"><rect width="10" height="10" fill="var(--accent)" /><text x="18" y="9">BONDS · 18%</text></g>
        <g transform="translate(0, 40)"><rect width="10" height="10" fill="var(--accent-soft)" /><text x="18" y="9">INTERNATIONAL · 15%</text></g>
        <g transform="translate(0, 60)"><rect width="10" height="10" fill="var(--ink-muted)" /><text x="18" y="9">SMALL CAP · 13%</text></g>
        <g transform="translate(0, 80)"><rect width="10" height="10" fill="var(--ink-soft)" /><text x="18" y="9">OTHER · 24%</text></g>
      </g>
    </svg>
  );
}
function ThumbNewsletter() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      <g transform="translate(60, 50)">
        {[2, 1, 0].map((offset) => (
          <g key={offset} transform={`translate(${offset * 8}, ${offset * 8})`}>
            <rect width="140" height="95" fill="var(--paper)" stroke="var(--hairline-strong)" strokeWidth="0.75" />
            {offset === 0 && (
              <>
                <line x1="0" y1="0" x2="70" y2="50" stroke="var(--ink-muted)" strokeWidth="0.75" />
                <line x1="140" y1="0" x2="70" y2="50" stroke="var(--ink-muted)" strokeWidth="0.75" />
                <text x="70" y="72" fontFamily="Fraunces, serif" fontSize="10" fontStyle="italic" fill="var(--ink)" textAnchor="middle">Tactica RES</text>
                <text x="70" y="84" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--ink-muted)" textAnchor="middle" letterSpacing="1">VOL. 247</text>
              </>
            )}
          </g>
        ))}
      </g>
      <g transform="translate(230, 90)">
        <text y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-muted)" letterSpacing="1">DATA</text>
        <line x1="0" y1="8" x2="100" y2="8" stroke="var(--ink-muted)" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="100" cy="8" r="2" fill="var(--accent)" />
        <text y="32" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-muted)" letterSpacing="1">RESEARCH</text>
        <line x1="0" y1="40" x2="100" y2="40" stroke="var(--ink-muted)" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="100" cy="40" r="2" fill="var(--accent)" />
        <text y="64" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-muted)" letterSpacing="1">DRAFT</text>
        <line x1="0" y1="72" x2="100" y2="72" stroke="var(--ink-muted)" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="100" cy="72" r="2" fill="var(--accent)" />
        <text y="96" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink)" letterSpacing="1" fontWeight="600">→ SEND</text>
      </g>
      <text x="200" y="225" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="11" fill="var(--ink-muted)" textAnchor="middle">8,000 readers · weekly</text>
    </svg>
  );
}
function ThumbNCAA() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      <g stroke="var(--hairline-strong)" strokeWidth="0.75" fill="none">
        <line x1="30" y1="50" x2="70" y2="50" /><line x1="30" y1="80" x2="70" y2="80" />
        <line x1="70" y1="50" x2="70" y2="80" /><line x1="70" y1="65" x2="110" y2="65" />
        <line x1="30" y1="120" x2="70" y2="120" /><line x1="30" y1="150" x2="70" y2="150" />
        <line x1="70" y1="120" x2="70" y2="150" /><line x1="70" y1="135" x2="110" y2="135" />
        <line x1="110" y1="65" x2="110" y2="135" /><line x1="110" y1="100" x2="150" y2="100" />
        <line x1="30" y1="180" x2="70" y2="180" /><line x1="30" y1="210" x2="70" y2="210" />
        <line x1="70" y1="180" x2="70" y2="210" /><line x1="70" y1="195" x2="150" y2="195" />
        <line x1="150" y1="100" x2="150" y2="195" /><line x1="150" y1="147" x2="200" y2="147" />
        <line x1="370" y1="50" x2="330" y2="50" /><line x1="370" y1="80" x2="330" y2="80" />
        <line x1="330" y1="50" x2="330" y2="80" /><line x1="330" y1="65" x2="290" y2="65" />
        <line x1="370" y1="120" x2="330" y2="120" /><line x1="370" y1="150" x2="330" y2="150" />
        <line x1="330" y1="120" x2="330" y2="150" /><line x1="330" y1="135" x2="290" y2="135" />
        <line x1="290" y1="65" x2="290" y2="135" /><line x1="290" y1="100" x2="250" y2="100" />
        <line x1="370" y1="180" x2="330" y2="180" /><line x1="370" y1="210" x2="330" y2="210" />
        <line x1="330" y1="180" x2="330" y2="210" /><line x1="330" y1="195" x2="250" y2="195" />
        <line x1="250" y1="100" x2="250" y2="195" /><line x1="250" y1="147" x2="200" y2="147" />
      </g>
      <circle cx="200" cy="147" r="4" fill="var(--accent)" />
      <circle cx="200" cy="147" r="10" fill="none" stroke="var(--accent)" strokeWidth="0.75" opacity="0.4" />
      {[[70, 65], [110, 100], [150, 147], [330, 65], [290, 100], [250, 147]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="var(--ink)" />
      ))}
      <text x="200" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-muted)" textAnchor="middle" letterSpacing="2">2008 — PRESENT · 9 SIGNALS</text>
    </svg>
  );
}
function ThumbPrediction() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="var(--bg)" />
      <g transform="translate(50, 50)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-muted)" letterSpacing="2">LIVE · STANDINGS</text>
        {[
          ["01", "JESSE", "15", true],
          ["02", "IKE",   "15", true],
          ["03", "SEAN",  "13", false],
          ["04", "JAKE",  "10", false],
          ["05", "BRETT",  "6", false],
        ].map(([rank, name, score, leading], i) => (
          <g key={i} transform={`translate(0, ${20 + i * 26})`}>
            <line x1="0" y1="18" x2="300" y2="18" stroke="var(--hairline)" strokeWidth="0.5" />
            <text x="0" y="12" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-muted)">{rank}</text>
            <text x="35" y="13" fontFamily="Fraunces, serif" fontSize="14" fontStyle={leading ? "italic" : "normal"} fill={leading ? "var(--accent)" : "var(--ink)"} fontWeight="400">{name}</text>
            <rect x="120" y="6" width={Number(score) * 9} height="8" fill={leading ? "var(--accent)" : "var(--ink)"} opacity={leading ? 0.8 : 0.25} />
            <text x="300" y="13" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink)" textAnchor="end">{score}</text>
          </g>
        ))}
        <circle cx="295" cy="-3" r="3" fill="var(--accent)">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
