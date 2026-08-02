import React, { useState, useMemo } from "react";
import {
  Heart,
  Cat,
  Sun,
  CloudRain,
  Utensils,
  Sparkles,
  ArrowRight,
  Feather,
  Menu,
  X,
} from "lucide-react";

/**
 * A LOVE LETTER FOR ANINDITA — from Sanwar
 * ------------------------------------------------------------
 * A full 3-page site: Home / Gallery / About Us.
 * Palette: red velvet (wine/burgundy) + deep emerald, on near-black,
 * finished with an aged-gold foil accent — a "premium suite" pairing
 * rather than a flat red/green split.
 *
 * TO ADD REAL PHOTOS:
 * Find `galleryItems` below and replace `img: null` with
 * `img: "your-image-url"` for each entry. Frames auto-switch from
 * the icon placeholder to your photo.
 */

const letters = [
  {
    key: "cat",
    icon: Cat,
    label: "For the girl who loves cats",
    title: "Soft, Quiet, and Mine",
    body: [
      "You love cats because they choose who they trust — quietly, on their own time, and completely once they do.",
      "That's exactly how I feel about you choosing me. Not loud, not rushed. Just certain.",
      "So here's me, curling up next to you for good — Anindita.",
    ],
  },
  {
    key: "fries",
    icon: Utensils,
    label: "For the girl who loves French fries",
    title: "The Little Golden Things",
    body: [
      "You love French fries because they're simple, warm, and they make any bad day a little better.",
      "I want to be that for you too — the small, warm, golden thing you reach for without thinking twice.",
      "Every plate we share from now on has your name written all over it.",
    ],
  },
  {
    key: "sunlight",
    icon: Sun,
    label: "For the girl who loves sunlight",
    title: "You Are the Light",
    body: [
      "You love sunlight the way rooms love windows — quietly, completely, unable to help it.",
      "But between the two of us, you're the one who actually lights up a room, Anindita. Not the sun.",
      "Every morning I get to think of you is already a good morning.",
    ],
  },
  {
    key: "bristi",
    icon: CloudRain,
    label: "For the girl who loves bristi",
    title: "Rain, and Wanting You Near",
    body: [
      "You love rain — the sound of it, the cover it gives, the way it slows the whole world down.",
      "I love it too, mostly because it's the easiest excuse to want you close, a cup of tea, and nowhere to be.",
      "Rain or sunlight, it was always going to be you.",
    ],
  },
];

const galleryItems = [
  { key: "cat", icon: Cat, caption: "Cat person & cat person", img: null },
  { key: "fries", icon: Utensils, caption: "Fry dates, always half-shared", img: null },
  { key: "sunlight", icon: Sun, caption: "Golden hour, every hour with you", img: null },
  { key: "bristi", icon: CloudRain, caption: "Rainy days, best days", img: null },
  { key: "heart1", icon: Heart, caption: "Sanwar & Anindita", img: null },
  { key: "heart2", icon: Sparkles, caption: "Still my favorite person", img: null },
  { key: "cat2", icon: Cat, caption: "Third cat we adopted in our heads", img: null },
  { key: "sunlight2", icon: Sun, caption: "That one rooftop evening", img: null },
  { key: "bristi2", icon: CloudRain, caption: "Monsoon, your favorite season", img: null },
];

const aboutLoves = [
  {
    icon: Cat,
    title: "Cats",
    text: "Every stray she stops to greet, every video she sends at midnight — cats have full access to her heart, and I've made peace with sharing.",
  },
  {
    icon: Utensils,
    title: "French Fries",
    text: "Non-negotiable order at every restaurant. I've learned not to reach for the last one without asking first.",
  },
  {
    icon: Sun,
    title: "Sunlight",
    text: "She notices good light the way other people notice good music — and somehow always finds the warmest spot in any room.",
  },
  {
    icon: CloudRain,
    title: "Bristi",
    text: "Rain slows her right down, in the best way. Her favorite kind of afternoon has a window, a cup of tea, and me.",
  },
];

function FloatingHearts({ count = 12 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 11 + Math.random() * 10,
        scale: 0.45 + Math.random() * 0.8,
        opacity: 0.12 + Math.random() * 0.22,
      })),
    [count]
  );
  return (
    <div className="lv-hearts-layer" aria-hidden="true">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="lv-floating-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            transform: `scale(${h.scale})`,
            opacity: h.opacity,
          }}
        />
      ))}
    </div>
  );
}

function Monogram({ size = 40 }) {
  return (
    <div className="lv-monogram" style={{ width: size, height: size }}>
      S&amp;A
    </div>
  );
}

export default function LoveSite() {
  const [page, setPage] = useState("home"); // home | gallery | about
  const [navOpen, setNavOpen] = useState(false);
  const [sealStage, setSealStage] = useState("seal"); // seal -> letters -> done
  const [letterIndex, setLetterIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentLetter = letters[letterIndex];

  const handleBreakSeal = () => {
    setSealStage("letters");
    setRevealed(false);
  };
  const handleOpenLetter = () => setRevealed(true);
  const handleNextLetter = () => {
    if (letterIndex < letters.length - 1) {
      setLetterIndex((i) => i + 1);
      setRevealed(false);
    } else {
      setSealStage("done");
    }
  };

  const goTo = (p) => {
    setPage(p);
    setNavOpen(false);
  };

  return (
    <div className="lv-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .lv-root {
          --velvet-deep: #250509;
          --velvet: #5c0f1f;
          --wine: #7c1229;
          --velvet-bright: #a52341;
          --emerald-deep: #05170f;
          --emerald: #0e3324;
          --emerald-light: #1c5c40;
          --gold: #c9a24b;
          --gold-light: #ecd8a0;
          --cream: #f3e8d6;
          --ink: #170907;
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--ink);
          color: var(--cream);
          font-family: 'EB Garamond', serif;
        }
        .lv-root * { box-sizing: border-box; }
        .lv-display { font-family: 'Cormorant Garamond', serif; }

        /* ---------- shared background wash ---------- */
        .lv-wash {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse 60% 45% at 15% -5%, rgba(165,35,65,0.35), transparent 60%),
            radial-gradient(ellipse 55% 40% at 100% 10%, rgba(28,92,64,0.28), transparent 60%),
            radial-gradient(ellipse 70% 50% at 50% 115%, rgba(124,18,41,0.30), transparent 60%),
            linear-gradient(180deg, var(--ink) 0%, #170a0c 50%, #071a12 100%);
        }
        .lv-grain {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .lv-hearts-layer { position: fixed; inset: 0; z-index: 1; pointer-events: none; }
        .lv-floating-heart {
          position: absolute; bottom: -40px; width: 18px; height: 18px;
          color: var(--gold-light); fill: var(--gold-light);
          animation-name: lv-float-up; animation-timing-function: ease-in; animation-iteration-count: infinite;
        }
        @keyframes lv-float-up {
          0% { transform: translateY(0) scale(var(--s,1)); opacity: 0; }
          10% { opacity: 1; } 90% { opacity: 0.5; }
          100% { transform: translateY(-110vh) scale(var(--s,1)); opacity: 0; }
        }

        /* ---------- nav ---------- */
        .lv-nav {
          position: sticky; top: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 6vw;
          background: linear-gradient(180deg, rgba(23,9,7,0.92), rgba(23,9,7,0.75));
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(201,162,75,0.25);
        }
        .lv-nav-left { display: flex; align-items: center; gap: 12px; }
        .lv-monogram {
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold) 55%, #7a5e28 100%);
          color: var(--velvet-deep);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          flex-shrink: 0;
        }
        .lv-nav-title {
          font-family: 'Cormorant Garamond', serif; font-size: 18px; letter-spacing: 1.5px;
          color: var(--gold-light);
        }
        .lv-nav-links { display: flex; gap: 6px; align-items: center; }
        .lv-nav-btn {
          appearance: none; background: transparent; border: none;
          color: rgba(243,232,214,0.75); font-family: 'Cormorant Garamond', serif;
          font-size: 16px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 8px 14px; cursor: pointer; border-radius: 6px;
          transition: all 0.25s ease; position: relative;
        }
        .lv-nav-btn:hover { color: var(--gold-light); }
        .lv-nav-btn.active { color: var(--gold-light); }
        .lv-nav-btn.active::after {
          content: ""; position: absolute; left: 14px; right: 14px; bottom: 2px;
          height: 1px; background: var(--gold);
        }
        .lv-nav-toggle { display: none; background: none; border: none; color: var(--gold-light); cursor: pointer; }
        @media (max-width: 640px) {
          .lv-nav-links {
            display: none;
          }
          .lv-nav-links.open {
            display: flex; flex-direction: column; align-items: flex-start;
            position: absolute; top: 100%; left: 0; right: 0;
            background: rgba(23,9,7,0.97); padding: 10px 6vw 18px;
            border-bottom: 1px solid rgba(201,162,75,0.25);
          }
          .lv-nav-toggle { display: block; }
        }

        /* ---------- layout helpers ---------- */
        .lv-page { position: relative; z-index: 2; padding: 0 6vw 90px; }
        .lv-section { max-width: 900px; margin: 0 auto; }
        .lv-eyebrow {
          font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold-light); margin-bottom: 12px; text-align: center;
        }
        .lv-h1 {
          font-family: 'Cormorant Garamond', serif; font-weight: 600; line-height: 1.15;
          font-size: clamp(34px, 6vw, 56px); margin: 0 0 16px; text-align: center;
        }
        .lv-h1 em { font-style: italic; color: var(--gold-light); }
        .lv-h2 {
          font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: clamp(26px, 4vw, 34px);
          margin: 0 0 14px; text-align: center;
        }
        .lv-sub {
          font-size: 18px; color: rgba(243,232,214,0.78); line-height: 1.7;
          max-width: 560px; margin: 0 auto; text-align: center;
        }
        .lv-divider { width: 64px; height: 1px; background: var(--gold); opacity: 0.6; margin: 30px auto; }
        .lv-btn {
          appearance: none; border: 1px solid var(--gold); background: transparent;
          color: var(--gold-light); font-family: 'Cormorant Garamond', serif; font-size: 16px;
          letter-spacing: 2px; text-transform: uppercase; padding: 13px 30px; border-radius: 999px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 10px;
          transition: all 0.3s ease;
        }
        .lv-btn:hover {
          background: var(--gold); color: var(--velvet-deep); transform: translateY(-2px);
          box-shadow: 0 10px 24px -8px rgba(201,162,75,0.5);
        }
        .lv-btn-row { display: flex; justify-content: center; margin-top: 26px; }

        /* ---------- HOME: hero ---------- */
        .lv-hero { padding: 70px 0 40px; text-align: center; }
        .lv-hero-crest { display: flex; justify-content: center; margin-bottom: 22px; }

        /* ---------- HOME: seal/letters block ---------- */
        .lv-panel {
          margin-top: 20px; padding: 46px 5vw;
          background: linear-gradient(165deg, rgba(14,51,36,0.42), rgba(37,5,9,0.55));
          border: 1px solid rgba(201,162,75,0.28);
          border-radius: 18px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .lv-envelope {
          position: relative; width: min(80vw, 320px); aspect-ratio: 3/2;
          background: linear-gradient(155deg, var(--velvet-bright), var(--wine) 55%, var(--velvet-deep));
          border-radius: 6px; box-shadow: 0 26px 50px -18px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,162,75,0.25) inset;
          margin: 0 auto 30px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: transform 0.35s ease;
        }
        .lv-envelope:hover { transform: translateY(-4px) scale(1.015); }
        .lv-envelope::before {
          content: ""; position: absolute; inset: 0; border-radius: 6px;
          background:
            linear-gradient(155deg, transparent 48%, rgba(0,0,0,0.28) 50%, transparent 52%),
            linear-gradient(-155deg, transparent 48%, rgba(0,0,0,0.28) 50%, transparent 52%);
        }
        .lv-seal {
          position: relative; width: 78px; height: 78px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold) 55%, #7a5e28 100%);
          box-shadow: 0 8px 18px rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 24px; color: var(--velvet-deep);
          animation: lv-pulse 2.6s ease-in-out infinite;
        }
        @keyframes lv-pulse {
          0%, 100% { box-shadow: 0 8px 18px rgba(0,0,0,0.5), 0 0 0 0 rgba(201,162,75,0.5); }
          50% { box-shadow: 0 8px 22px rgba(0,0,0,0.5), 0 0 0 10px rgba(201,162,75,0); }
        }

        .lv-dots { display: flex; gap: 10px; margin-bottom: 26px; }
        .lv-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(243,232,214,0.25); transition: all 0.4s ease; }
        .lv-dot.done { background: var(--gold); width: 22px; border-radius: 4px; }
        .lv-dot.active { background: var(--gold-light); box-shadow: 0 0 0 4px rgba(201,162,75,0.2); }

        .lv-card {
          position: relative; width: 100%; max-width: 460px; min-height: 280px;
          background: linear-gradient(165deg, rgba(28,92,64,0.35), rgba(37,5,9,0.5));
          border: 1px solid rgba(201,162,75,0.35); border-radius: 14px; padding: 38px 30px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          cursor: pointer; transition: transform 0.3s ease; margin: 0 auto;
        }
        .lv-card:hover { transform: translateY(-3px); }
        .lv-icon-badge {
          width: 54px; height: 54px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold));
          display: flex; align-items: center; justify-content: center; color: var(--velvet-deep); margin-bottom: 16px;
        }
        .lv-label { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold-light); margin-bottom: 10px; }
        .lv-card-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; margin: 0 0 6px; }
        .lv-tap-hint { font-size: 13px; color: rgba(243,232,214,0.5); margin-top: 12px; letter-spacing: 1px; }
        .lv-letter-body { text-align: left; }
        .lv-letter-body p { font-size: 17px; line-height: 1.7; margin: 0 0 13px; color: var(--cream); }
        .lv-letter-body p:last-child { font-style: italic; color: var(--gold-light); }

        .lv-finale-mini { display: flex; flex-direction: column; align-items: center; }
        .lv-finale-heart {
          color: var(--gold-light); fill: var(--gold-light);
          filter: drop-shadow(0 8px 16px rgba(201,162,75,0.35));
          animation: lv-beat 1.8s ease-in-out infinite; margin-bottom: 8px;
        }
        @keyframes lv-beat {
          0%, 100% { transform: scale(1); } 15% { transform: scale(1.14); }
          30% { transform: scale(1); } 45% { transform: scale(1.08); } 60% { transform: scale(1); }
        }
        .lv-signature { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 19px; color: var(--gold-light); margin-top: 6px; }

        /* ---------- HOME: teaser rows ---------- */
        .lv-teaser-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 60px;
        }
        @media (max-width: 640px) { .lv-teaser-grid { grid-template-columns: 1fr; } }
        .lv-teaser-card {
          border: 1px solid rgba(201,162,75,0.28); border-radius: 16px; padding: 32px 28px;
          background: linear-gradient(165deg, rgba(37,5,9,0.5), rgba(14,51,36,0.35));
          text-align: left; cursor: pointer; transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .lv-teaser-card:hover { transform: translateY(-4px); border-color: rgba(201,162,75,0.6); }
        .lv-teaser-card h3 {
          font-family: 'Cormorant Garamond', serif; font-size: 24px; margin: 14px 0 8px; color: var(--gold-light);
        }
        .lv-teaser-card p { font-size: 15px; color: rgba(243,232,214,0.72); line-height: 1.6; margin: 0 0 16px; }
        .lv-teaser-link { font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); display: inline-flex; align-items: center; gap: 6px; }

        /* ---------- GALLERY page ---------- */
        .lv-gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px; }
        @media (max-width: 640px) { .lv-gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        .lv-frame {
          position: relative; aspect-ratio: 1/1; border-radius: 10px; padding: 6px;
          background: linear-gradient(160deg, var(--gold), #7a5e28);
        }
        .lv-frame-inner {
          width: 100%; height: 100%; border-radius: 6px;
          background: linear-gradient(160deg, rgba(37,5,9,0.9), rgba(5,23,15,0.9));
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .lv-frame-inner img { width: 100%; height: 100%; object-fit: cover; }
        .lv-frame-caption { position: absolute; left: 0; right: 0; bottom: -22px; font-size: 12px; color: rgba(243,232,214,0.7); text-align: center; }

        /* ---------- ABOUT page ---------- */
        .lv-about-hero { text-align: center; padding: 60px 0 20px; }
        .lv-story {
          margin-top: 30px; padding: 36px 5vw;
          background: linear-gradient(165deg, rgba(14,51,36,0.32), rgba(37,5,9,0.42));
          border: 1px solid rgba(201,162,75,0.25); border-radius: 16px;
        }
        .lv-story p { font-size: 17px; line-height: 1.85; color: rgba(243,232,214,0.88); margin: 0 0 16px; }
        .lv-loves-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 46px; }
        @media (max-width: 640px) { .lv-loves-grid { grid-template-columns: 1fr; } }
        .lv-love-card {
          border: 1px solid rgba(201,162,75,0.28); border-radius: 14px; padding: 26px;
          background: linear-gradient(165deg, rgba(37,5,9,0.4), rgba(14,51,36,0.28));
          display: flex; gap: 16px; align-items: flex-start;
        }
        .lv-love-icon {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          background: radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold));
          display: flex; align-items: center; justify-content: center; color: var(--velvet-deep);
        }
        .lv-love-card h4 { font-family: 'Cormorant Garamond', serif; font-size: 20px; margin: 0 0 6px; color: var(--gold-light); }
        .lv-love-card p { font-size: 15px; line-height: 1.65; color: rgba(243,232,214,0.75); margin: 0; }

        .lv-footer {
          position: relative; z-index: 2; text-align: center; padding: 40px 6vw 30px;
          border-top: 1px solid rgba(201,162,75,0.2);
        }
        .lv-footer p { font-size: 13px; color: rgba(243,232,214,0.5); letter-spacing: 1px; }

        .lv-fade { animation: lv-fade-in 0.7s ease both; }
        @keyframes lv-fade-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="lv-wash" />
      <div className="lv-grain" />
      <FloatingHearts />

      {/* ---------- NAV ---------- */}
      <nav className="lv-nav">
        <div className="lv-nav-left">
          <Monogram size={38} />
          <span className="lv-nav-title">Sanwar &amp; Anindita</span>
        </div>
        <div className={"lv-nav-links" + (navOpen ? " open" : "")}>
          {[
            { id: "home", label: "Home" },
            { id: "gallery", label: "Photo Gallery" },
            { id: "about", label: "About Us" },
          ].map((item) => (
            <button
              key={item.id}
              className={"lv-nav-btn" + (page === item.id ? " active" : "")}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="lv-nav-toggle" onClick={() => setNavOpen((o) => !o)} aria-label="Toggle menu">
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ---------- HOME PAGE ---------- */}
      {page === "home" && (
        <div className="lv-page lv-fade">
          <div className="lv-section lv-hero">
            <div className="lv-hero-crest">
              <Monogram size={64} />
            </div>
            <div className="lv-eyebrow">A little something · Sanwar to Anindita</div>
            <h1 className="lv-h1">
              For the girl who has <em>all of me</em>
            </h1>
            <p className="lv-sub">
              Cats, French fries, sunlight, and rain — four small things you love,
              and one very obvious fifth one hiding underneath all of them: me,
              loving you back.
            </p>
          </div>

          <div className="lv-section">
            <div className="lv-panel">
              {sealStage === "seal" && (
                <>
                  <div className="lv-envelope" onClick={handleBreakSeal} role="button" aria-label="Break the seal">
                    <div className="lv-seal">S&amp;A</div>
                  </div>
                  <p className="lv-sub" style={{ marginBottom: 6 }}>
                    Four letters, sealed with a little too much love.
                  </p>
                  <div className="lv-btn-row">
                    <button className="lv-btn" onClick={handleBreakSeal}>
                      <Feather size={16} /> Break the seal
                    </button>
                  </div>
                </>
              )}

              {sealStage === "letters" && (
                <>
                  <div className="lv-dots">
                    {letters.map((l, i) => (
                      <div
                        key={l.key}
                        className={"lv-dot" + (i < letterIndex ? " done" : "") + (i === letterIndex ? " active" : "")}
                      />
                    ))}
                  </div>
                  <div className="lv-card" onClick={!revealed ? handleOpenLetter : undefined}>
                    {!revealed ? (
                      <>
                        <div className="lv-icon-badge">
                          <currentLetter.icon size={24} />
                        </div>
                        <div className="lv-label">{currentLetter.label}</div>
                        <h2 className="lv-card-title">{currentLetter.title}</h2>
                        <div className="lv-tap-hint">tap to open ✦</div>
                      </>
                    ) : (
                      <div className="lv-letter-body">
                        <div className="lv-label">{currentLetter.label}</div>
                        <h2 className="lv-card-title" style={{ marginBottom: 14 }}>
                          {currentLetter.title}
                        </h2>
                        {currentLetter.body.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                  {revealed && (
                    <div className="lv-btn-row">
                      <button className="lv-btn" onClick={handleNextLetter}>
                        {letterIndex < letters.length - 1 ? "Next letter" : "Finish"}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}

              {sealStage === "done" && (
                <div className="lv-finale-mini lv-fade">
                  <Heart size={38} className="lv-finale-heart" />
                  <h2 className="lv-h2" style={{ marginBottom: 6 }}>
                    Anindita, <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>I love you.</em>
                  </h2>
                  <p className="lv-sub">
                    Every cat you'll ever love, every fry you'll steal off my plate,
                    every sunny afternoon and every rainy one — I want all of it, with you.
                  </p>
                  <div className="lv-signature">— Sanwar, all yours</div>
                </div>
              )}
            </div>

            {/* teaser cards to the other pages */}
            <div className="lv-teaser-grid">
              <div className="lv-teaser-card" onClick={() => goTo("gallery")}>
                <Sparkles size={22} color="#c9a24b" />
                <h3>Photo Gallery</h3>
                <p>A little frame for every favorite thing — cats, fries, sunlight, and every rainy afternoon.</p>
                <span className="lv-teaser-link">Open gallery <ArrowRight size={14} /></span>
              </div>
              <div className="lv-teaser-card" onClick={() => goTo("about")}>
                <Heart size={22} color="#c9a24b" />
                <h3>About Us</h3>
                <p>The short version of Sanwar and Anindita — how it started, and what keeps it going.</p>
                <span className="lv-teaser-link">Read our story <ArrowRight size={14} /></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- GALLERY PAGE ---------- */}
      {page === "gallery" && (
        <div className="lv-page lv-fade">
          <div className="lv-section">
            <div className="lv-eyebrow">Every little thing you love</div>
            <h1 className="lv-h1">Photo Gallery</h1>
            <p className="lv-sub">Cats, fries, sunlight, and rain — and somehow, still, mostly you.</p>
            <div className="lv-divider" />
            <div className="lv-gallery-grid">
              {galleryItems.map((item, i) => (
                <div className="lv-frame lv-fade" key={item.key} style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="lv-frame-inner">
                    {item.img ? <img src={item.img} alt={item.caption} /> : <item.icon size={30} color="#ecd8a0" />}
                  </div>
                  <div className="lv-frame-caption">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------- ABOUT PAGE ---------- */}
      {page === "about" && (
        <div className="lv-page lv-fade">
          <div className="lv-section lv-about-hero">
            <Monogram size={54} />
            <div className="lv-eyebrow" style={{ marginTop: 18 }}>Our story, briefly</div>
            <h1 className="lv-h1">About Us</h1>
          </div>

          <div className="lv-section">
            <div className="lv-story">
              <p>
                This is Sanwar's small corner of the internet, built for one person only — Anindita.
                Everything here, the colors, the letters, the little frames, exists for one reason: to
                say the things that are easy to feel and hard to say out loud.
              </p>
              <p>
                Anindita notices the small good things in a day — a cat crossing the road, the first
                bite of fries, the exact minute the sun softens before evening, the smell of rain before
                it starts. This site is built the same way: one small, deliberate thing at a time.
              </p>
              <p>
                If you're reading this, Anindita — thank you for choosing to be loved this loudly, by
                someone who usually isn't loud about anything.
              </p>
            </div>

            <h2 className="lv-h2" style={{ marginTop: 54 }}>What I love about you</h2>
            <div className="lv-loves-grid">
              {aboutLoves.map((item) => (
                <div className="lv-love-card" key={item.title}>
                  <div className="lv-love-icon">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="lv-footer">
        <p>Sanwar &amp; Anindita · made with a little too much love</p>
      </footer>
    </div>
  );
}
