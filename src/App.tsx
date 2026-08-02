import React, { useState, useMemo } from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router"
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
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Quote,
} from "lucide-react"

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
]

const galleryItems = [
  {
    src: "/photos/memory-01.jpg",
    title: "Where We Always Fit",
    caption: "Even the mirror knew there was only one frame for us.",
    story:
      "Some photographs are planned. This one simply happened — two matching colors, one instinctive embrace, and the kind of closeness that already feels like home.",
    size: "tall",
  },
  {
    src: "/photos/memory-02.jpg",
    title: "The Softest Yes",
    caption: "A quiet afternoon, held close enough to keep forever.",
    story:
      "There are a hundred ways to say I love you. Sometimes the truest one is a kiss on the cheek while the rest of the world carries on behind us.",
    size: "wide",
  },
  {
    src: "/photos/memory-03.jpg",
    title: "Where the Sun Found Us",
    caption: "Golden hour arrived, and so did my favorite memory.",
    story:
      "The sky was showing off, but I was looking at you. That warm orange light made everything beautiful; you made it worth remembering.",
    size: "tall",
  },
  {
    src: "/photos/memory-04.jpg",
    title: "A Proud Kind of Love",
    caption: "A milestone made sweeter because we reached it side by side.",
    story:
      "Caps, gowns, nervous smiles, and an entire future waiting outside the frame. I remember feeling proud of you — and lucky that I got to stand beside you.",
    size: "wide",
  },
  {
    src: "/photos/memory-05.jpg",
    title: "After the Lights Came On",
    caption: "The city glowed. You glowed more.",
    story:
      "Night settled around us in tiny lights, turning an ordinary walk into something cinematic. You have always had a way of making simple evenings feel important.",
    size: "tall",
  },
  {
    src: "/photos/memory-06.jpg",
    title: "My Favorite Place",
    caption: "Not a destination — just anywhere close to you.",
    story:
      "This is what safety looks like to me: your head near my heart, my arms around you, and no reason to hurry into the next moment.",
    size: "wide",
  },
  {
    src: "/photos/memory-07.jpg",
    title: "Across the Table",
    caption: "Two hands, one table, and a promise hidden in plain sight.",
    story:
      "The food, the place, and the conversation may blur with time. I will remember reaching across the table and finding your hand waiting for mine.",
    size: "tall",
  },
  {
    src: "/photos/memory-08.jpg",
    title: "The Way I See You",
    caption:
      "Soft light, white roses, and the face I would choose in every room.",
    story:
      "You paused in front of the mirror and the whole corner turned into a portrait. I love that beauty finds you even when you are not trying to be seen.",
    size: "tall",
  },
  {
    src: "/photos/memory-09.jpg",
    title: "Close Enough",
    caption: "One of those moments that needed no posing and no words.",
    story:
      "The best photographs of us are the ones where we forget about the camera. Nothing performed, nothing perfect — just tenderness happening naturally.",
    size: "wide",
  },
  {
    src: "/photos/memory-10.jpg",
    title: "Us, Reflected",
    caption: "A little circle of light holding our whole world.",
    story:
      "A mirror caught the scene, but it was your smile that kept it. I want a lifetime of these small reflections: proof that we were here, together.",
    size: "tall",
  },
  {
    src: "/photos/memory-11.jpg",
    title: "Held",
    caption: "The smallest photograph can carry the biggest feeling.",
    story:
      "No faces, no grand setting — only your hand in mine. Somehow that says everything about the calm, trust, and certainty I find with you.",
    size: "tall",
  },
  {
    src: "/photos/memory-12.jpg",
    title: "Ordinary, Perfect",
    caption: "A casual stop became another page in our story.",
    story:
      "Love is not only made of occasions. It lives in quick meals, familiar jokes, unplanned photos, and choosing the seat next to each other every time.",
    size: "tall",
  },
  {
    src: "/photos/memory-13.jpg",
    title: "A Beautiful Day Out",
    caption: "Dressed up, sunlit, and exactly where we wanted to be.",
    story:
      "We looked ready for the photograph, but the part I treasure is what came around it — walking together, laughing between takes, making the day ours.",
    size: "tall",
  },
  {
    src: "/photos/memory-14.jpg",
    title: "Winter Warmth",
    caption: "Cold night, warm arms, nowhere else to be.",
    story:
      "The air was cold enough for a beanie and the lights above us looked like stars. Still, the warmest thing in the photograph is the way we held on.",
    size: "tall",
  },
  {
    src: "/photos/memory-15.jpg",
    title: "My View Across Lunch",
    caption: "Good food, bright colors, and you making the table beautiful.",
    story:
      "A meal becomes a memory when you are across from me. I love these pauses in the day — ordering too much, sharing bites, and having nowhere urgent to go.",
    size: "tall",
  },
  {
    src: "/photos/memory-16.jpg",
    title: "Growing Together",
    caption: "Among the trees, another reminder of how far we have come.",
    story:
      "There is something fitting about this photograph: green all around us, sunlight overhead, and the two of us still growing — separately, together, always.",
    size: "tall",
  },
]

const archiveStoryTemplates = [
  {
    title: "Another Page of Us",
    caption: "A moment that quietly became part of our forever.",
    story:
      "Not every memory needs a grand occasion. Some become precious simply because we were together when they happened.",
  },
  {
    title: "The Little In-Betweens",
    caption: "The ordinary moments are the ones I miss most.",
    story:
      "Between celebrations and milestones live the small hours that built our story — familiar smiles, shared places, and time that never felt wasted.",
  },
  {
    title: "Always My Favorite View",
    caption: "Wherever we were, you were the part worth remembering.",
    story:
      "Places change and days move quickly, but the feeling stays: finding you in the frame and knowing exactly why I wanted to keep it.",
  },
  {
    title: "A Day We Kept",
    caption: "One more day made beautiful by sharing it with you.",
    story:
      "This photograph holds more than a scene. It keeps the warmth, the conversation, and the version of us who paused long enough to save it.",
  },
  {
    title: "Close to You",
    caption: "My safest place has always been somewhere beside you.",
    story:
      "There is a softness in being known and still being chosen. This memory carries that feeling for me.",
  },
  {
    title: "The Way We Were",
    caption: "A small proof that happiness really looked like this.",
    story:
      "Years from now, I want to return to this frame and remember how naturally joy found us whenever we made time for each other.",
  },
  {
    title: "Just Us",
    caption: "No perfect plan — only a moment that felt completely ours.",
    story:
      "The camera kept the image, but my heart kept everything around it: the mood, the laughter, and the comfort of having you near.",
  },
  {
    title: "Worth Remembering",
    caption: "Another beautiful fragment of the life we are making.",
    story:
      "Love grows through accumulation — one photograph, one outing, one quiet kindness at a time. This is one of those pieces.",
  },
]

const archiveItems = Array.from({ length: 139 }, (_, index) => {
  const template = archiveStoryTemplates[index % archiveStoryTemplates.length]
  return {
    ...template,
    src: `/photos/archive/archive-${String(index + 1).padStart(3, "0")}.webp`,
    size: index % 7 === 2 || index % 11 === 5 ? "wide" : "tall",
  }
})

const allGalleryItems = [...galleryItems, ...archiveItems]

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
]

function FloatingHearts({ count = 22 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 11 + Math.random() * 10,
        size: 10 + Math.random() * 18,
        opacity: 0.1 + Math.random() * 0.24,
        drift: -70 + Math.random() * 140,
        rotate: -25 + Math.random() * 50,
      })),
    [count],
  )
  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="love-glow love-glow-one" />
      <div className="love-glow love-glow-two" />
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="floating-heart absolute -bottom-10 fill-gold-light text-gold-light"
          style={
            {
              left: `${h.left}%`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              opacity: h.opacity,
              "--heart-drift": `${h.drift}px`,
              "--heart-rotate": `${h.rotate}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

function Monogram({
  size = 40,
  className = "",
}: {
  size?: number
  className?: string
}) {
  const gradientId = React.useId().replace(/:/g, "")
  return (
    <div
      className={`premium-monogram shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Sanwar and Anindita monogram"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id={gradientId} cx="34%" cy="26%" r="78%">
            <stop offset="0%" stopColor="#fff1c8" />
            <stop offset="42%" stopColor="#d9b85f" />
            <stop offset="100%" stopColor="#7a501f" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill={`url(#${gradientId})`} />
        <circle
          cx="50"
          cy="50"
          r="42.5"
          fill="#26070c"
          stroke="#f2dda1"
          strokeWidth="1.2"
        />
        <circle
          cx="50"
          cy="50"
          r="38.5"
          fill="none"
          stroke="#b88b39"
          strokeWidth="0.65"
        />
        <path
          d="M50 27.2C46.2 21.1 36.8 23.5 38.1 30.4C39.2 36.2 50 41.6 50 41.6S60.8 36.2 61.9 30.4C63.2 23.5 53.8 21.1 50 27.2Z"
          fill={`url(#${gradientId})`}
        />
        <text x="31" y="70" textAnchor="middle" className="monogram-letter">
          S
        </text>
        <text x="69" y="70" textAnchor="middle" className="monogram-letter">
          A
        </text>
        <text x="50" y="72" textAnchor="middle" className="monogram-ampersand">
          &amp;
        </text>
        <path d="M24 77.5H76" stroke="#b88b39" strokeWidth="0.7" />
        <circle cx="21" cy="77.5" r="1.2" fill="#ecd8a0" />
        <circle cx="79" cy="77.5" r="1.2" fill="#ecd8a0" />
      </svg>
    </div>
  )
}

function Layout() {
  const [navOpen, setNavOpen] = useState(false)
  const loc = useLocation()

  React.useEffect(() => {
    setNavOpen(false)
  }, [loc.pathname])

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="bg-wash" />
      <div className="bg-grain" />
      <FloatingHearts />

      <nav className="site-nav sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-ink/80 backdrop-blur-md border-b border-gold/25">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          aria-label="Sanwar and Anindita home"
        >
          <Monogram size={38} />
          <span className="site-brand-name font-display text-lg tracking-[1.5px] text-gold-light">
            Sanwar & Anindita
          </span>
        </NavLink>

        <div
          className={`site-nav-links hidden sm:flex items-center gap-2 ${
            navOpen
              ? "!flex flex-col sm:flex-row absolute sm:static top-full left-0 right-0 bg-ink/95 sm:bg-transparent px-6 pb-4 sm:p-0 border-b border-gold/25 sm:border-none items-start sm:items-center"
              : ""
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/gallery", label: "Photo Gallery" },
            { path: "/about", label: "About Us" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm uppercase tracking-[1.5px] font-display transition-colors hover:text-gold-light ${
                  isActive
                    ? "text-gold-light after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:bg-gold"
                    : "text-cream/75"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          className="sm:hidden text-gold-light p-2"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <main className="site-main relative z-10 flex-1 px-6 pb-24">
        <div
          className={`${
            loc.pathname === "/gallery" || loc.pathname === "/"
              ? "max-w-6xl"
              : "max-w-4xl"
          } mx-auto pt-10 sm:pt-16 animate-in fade-in slide-in-from-bottom-4 duration-700`}
        >
          <Outlet />
        </div>
      </main>

      <footer className="site-footer relative z-10 text-center px-6 py-10 border-t border-gold/20 mt-auto">
        <p className="text-[13px] text-cream/50 tracking-wider">
          Sanwar & Anindita · made with a little too much love
        </p>
      </footer>
    </div>
  )
}

function Home() {
  const [sealStage, setSealStage] = useState<"seal" | "letters" | "done">(
    "seal",
  )
  const [letterIndex, setLetterIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const navigate = useNavigate()

  const currentLetter = letters[letterIndex]

  return (
    <>
      <section className="home-hero mb-14">
        <div className="home-hero-copy">
          <div className="home-hero-brand">
            <Monogram size={52} />
            <div>
              <div className="text-[10px] uppercase tracking-[4px] text-gold-light">
                A private love letter
              </div>
              <div className="mt-1 font-display text-sm italic text-cream/50">
                Sanwar to Anindita
              </div>
            </div>
          </div>
          <div className="home-hero-rule" />
          <h1 className="font-display text-5xl font-semibold leading-[0.94] sm:text-6xl lg:text-7xl">
            For the girl who has
            <em className="mt-2 block text-gold-light">all of me.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cream/72">
            Cats, French fries, sunlight, and rain — four small things you love,
            and one very obvious fifth one beneath all of them: me, loving you
            back.
          </p>
          <div className="home-hero-signature">
            <span />
            <p>Written for one heart only</p>
          </div>
        </div>
        <div className="home-hero-portrait">
          <img
            src="/photos/memory-03.jpg"
            alt="Sanwar and Anindita together at sunset"
            className="h-full w-full object-cover"
          />
          <div className="home-hero-photo-wash" />
          <div className="home-hero-photo-note">
            <Heart size={14} />
            <span>My favorite place is beside you</span>
          </div>
        </div>
      </section>

      <section className="convocation-showcase mb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[4px] text-gold-light">
              A milestone we shared
            </div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Our <em className="text-gold-light">convocation</em> story
            </h2>
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className="home-gallery-cta hidden sm:flex"
          >
            <Camera size={15} /> Photo gallery <ArrowRight size={14} />
          </button>
        </div>
        <div className="home-memory-grid">
          {[
            {
              src: "/photos/convocation/convocation-01.webp",
              caption: "The day every dream felt close enough to hold.",
              position: "center 34%",
            },
            {
              src: "/photos/convocation/convocation-02.webp",
              caption: "A little care before stepping into our next chapter.",
              position: "center 40%",
            },
            {
              src: "/photos/convocation/convocation-03.webp",
              caption: "Side by side, dressed in everything we worked for.",
              position: "center 32%",
            },
            {
              src: "/photos/convocation/convocation-04.webp",
              caption:
                "Two journeys, one wall, and a future waiting beyond it.",
              position: "center 38%",
            },
            {
              src: "/photos/convocation/convocation-05.webp",
              caption: "The way I looked at you said everything that day.",
              position: "center 38%",
            },
          ].map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => navigate("/gallery")}
              className={`home-memory-card group home-memory-${index + 1}`}
              aria-label={`${photo.caption} Open photo gallery.`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: photo.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <span className="home-memory-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-lg italic leading-tight text-cream sm:p-5 sm:text-xl">
                {photo.caption}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-5 flex justify-center sm:hidden">
          <button
            onClick={() => navigate("/gallery")}
            className="home-gallery-cta"
          >
            <Camera size={16} /> Explore all 155 memories{" "}
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <section
        className="premium-love-message mb-12"
        aria-label="A love note for Anindita"
      >
        <div className="love-message-ornament" aria-hidden="true">
          <span />
          <Heart size={18} />
          <span />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-4 text-[10px] uppercase tracking-[4px] text-gold-light">
            My promise to you
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
            If home were a person,
            <em className="block text-gold-light">it would always be you.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-cream/75 sm:text-lg">
            Anindita, I do not need every day to be perfect. I only want every
            kind of day with you — the bright ones, the rainy ones, the quiet
            ones, and all the beautiful ordinary moments in between.
          </p>
          <div className="mt-7 font-display text-xl italic text-gold-light">
            Forever yours, Sanwar
          </div>
        </div>
      </section>

      <div className="card-panel p-8 sm:p-12 flex flex-col items-center text-center">
        {sealStage === "seal" && (
          <div className="animate-in fade-in zoom-in duration-500">
            <button
              onClick={() => setSealStage("letters")}
              className="group relative w-[min(80vw,320px)] aspect-[3/2] bg-gradient-to-br from-velvet-bright via-wine to-velvet-deep rounded-lg shadow-2xl border border-gold/25 flex items-center justify-center mx-auto mb-8 transition-transform hover:-translate-y-1 hover:scale-[1.015]"
            >
              <div className="absolute inset-0 rounded-lg bg-[linear-gradient(155deg,transparent_48%,rgba(0,0,0,0.28)_50%,transparent_52%),linear-gradient(-155deg,transparent_48%,rgba(0,0,0,0.28)_50%,transparent_52%)]" />
              <Monogram size={80} className="relative seal-pulse" />
            </button>
            <p className="text-lg text-cream/80 mb-6">
              Four letters, sealed with a little too much love.
            </p>
            <button
              onClick={() => setSealStage("letters")}
              className="inline-flex items-center gap-2 border border-gold text-gold-light font-display uppercase tracking-widest text-sm px-7 py-3 rounded-full hover:bg-gold hover:text-velvet-deep transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(201,162,75,0.5)]"
            >
              <Feather size={16} /> Break the seal
            </button>
          </div>
        )}

        {sealStage === "letters" && (
          <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
            <div className="flex gap-2.5 mb-8">
              {letters.map((l, i) => (
                <div
                  key={l.key}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i < letterIndex
                      ? "w-5 bg-gold"
                      : i === letterIndex
                        ? "w-2 bg-gold-light shadow-[0_0_0_4px_rgba(201,162,75,0.2)]"
                        : "w-2 bg-cream/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={!revealed ? () => setRevealed(true) : undefined}
              className="relative w-full max-w-md min-h-[300px] bg-gradient-to-br from-wine/25 to-velvet-deep/50 border border-gold/35 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-1 text-left"
            >
              {!revealed ? (
                <div className="text-center">
                  <div className="icon-badge w-14 h-14 mb-5 mx-auto">
                    <currentLetter.icon size={24} />
                  </div>
                  <div className="text-xs uppercase tracking-[3px] text-gold-light mb-3">
                    {currentLetter.label}
                  </div>
                  <h2 className="font-display text-3xl font-semibold mb-2">
                    {currentLetter.title}
                  </h2>
                  <div className="text-sm text-cream/50 tracking-wide mt-4">
                    tap to open ✦
                  </div>
                </div>
              ) : (
                <div className="w-full animate-in fade-in zoom-in-95 duration-300">
                  <div className="text-xs uppercase tracking-[3px] text-gold-light mb-2">
                    {currentLetter.label}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
                    {currentLetter.title}
                  </h2>
                  <div className="space-y-4">
                    {currentLetter.body.map((p, i, arr) => (
                      <p
                        key={i}
                        className={`text-base sm:text-lg leading-relaxed ${
                          i === arr.length - 1
                            ? "text-gold-light italic font-display text-xl"
                            : "text-cream/90"
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </button>

            {revealed && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
                <button
                  onClick={() => {
                    if (letterIndex < letters.length - 1) {
                      setLetterIndex((i) => i + 1)
                      setRevealed(false)
                    } else {
                      setSealStage("done")
                    }
                  }}
                  className="inline-flex items-center gap-2 border border-gold text-gold-light font-display uppercase tracking-widest text-sm px-7 py-3 rounded-full hover:bg-gold hover:text-velvet-deep transition-all hover:-translate-y-0.5"
                >
                  {letterIndex < letters.length - 1 ? "Next letter" : "Finish"}
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}

        {sealStage === "done" && (
          <div className="flex flex-col items-center animate-in zoom-in fade-in duration-700 py-8">
            <Heart
              size={42}
              className="text-gold-light fill-gold-light drop-shadow-[0_8px_16px_rgba(201,162,75,0.35)] heart-beat mb-4"
            />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
              Anindita, <em className="text-gold-light italic">I love you.</em>
            </h2>
            <p className="text-lg text-cream/80 max-w-md mb-6 leading-relaxed">
              Every cat you'll ever love, every fry you'll steal off my plate,
              every sunny afternoon and every rainy one — I want all of it, with
              you.
            </p>
            <div className="font-display italic text-xl text-gold-light">
              — Sanwar, all yours
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
        <button
          onClick={() => navigate("/gallery")}
          className="group relative overflow-hidden text-left border border-gold/30 rounded-2xl min-h-[350px] p-8 flex flex-col justify-end transition-all hover:-translate-y-1 hover:border-gold/60 shadow-xl"
        >
          <img
            src="/photos/memory-03.jpg"
            alt="Sanwar and Anindita at sunset"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
          <Sparkles size={24} className="relative text-gold mb-4" />
          <h3 className="relative font-display text-3xl text-gold-light mb-3">
            Our Photo Stories
          </h3>
          <p className="relative text-cream/75 leading-relaxed mb-5">
            Sixteen photographs, each with the little story that made it worth
            keeping.
          </p>
          <span className="relative text-sm uppercase tracking-widest text-gold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Open gallery <ArrowRight size={14} />
          </span>
        </button>
        <button
          onClick={() => navigate("/about")}
          className="group text-left border border-gold/30 rounded-2xl p-8 bg-gradient-to-br from-velvet-deep/70 to-wine/25 transition-all hover:-translate-y-1 hover:border-gold/60"
        >
          <Heart size={24} className="text-gold mb-4" />
          <h3 className="font-display text-2xl text-gold-light mb-3">
            About Us
          </h3>
          <p className="text-cream/70 leading-relaxed mb-5">
            The short version of Sanwar and Anindita — how it started, and what
            keeps it going.
          </p>
          <span className="text-sm uppercase tracking-widest text-gold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Read our story <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </>
  )
}

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selected =
    selectedIndex === null ? null : allGalleryItems[selectedIndex]

  React.useEffect(() => {
    if (selectedIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null)
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + allGalleryItems.length) % allGalleryItems.length,
        )
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % allGalleryItems.length,
        )
      }
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [selectedIndex])

  return (
    <>
      <section className="gallery-hero relative overflow-hidden rounded-[2rem] border border-gold/30 min-h-[520px] sm:min-h-[610px] mb-16 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
        <img
          src="/photos/memory-02.jpg"
          alt="Sanwar kissing Anindita outdoors"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,9,7,0.96)_0%,rgba(23,9,7,0.7)_48%,rgba(23,9,7,0.12)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
        <div className="relative z-10 flex min-h-[520px] sm:min-h-[610px] max-w-xl flex-col justify-end p-8 sm:p-12">
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[4px] text-gold-light">
            <Camera size={15} /> Our story in photographs
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold leading-[0.92] mb-6">
            The moments
            <br />
            <em className="text-gold-light italic">I keep.</em>
          </h1>
          <p className="text-lg sm:text-xl text-cream/85 leading-relaxed max-w-lg">
            Sixteen little pieces of us — the milestones, the ordinary
            afternoons, and all the quiet ways we chose each other in between.
          </p>
          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[2px] text-cream/55">
            <span>155 photographs</span>
            <span className="h-px w-10 bg-gold/60" />
            <span>16 stories</span>
          </div>
        </div>
      </section>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[4px] text-gold-light mb-3">
            The collection
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Every frame, a feeling
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-cream/60 sm:text-right">
          Open any photograph to read the memory behind it. Use the arrow keys
          to wander through our story.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setSelectedIndex(i)}
            className={`gallery-card group ${
              item.size === "wide" ? "gallery-card-wide" : ""
            }`}
            style={{ animationDelay: `${i * 55}ms` }}
            aria-label={`Open ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading={i > 3 ? "lazy" : "eager"}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:saturate-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
              <div className="mb-2 text-[10px] uppercase tracking-[3px] text-gold-light/80">
                Memory {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl sm:text-[1.7rem] font-semibold leading-tight text-cream">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                {item.caption}
              </p>
            </div>
            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-ink/45 text-cream/80 opacity-0 backdrop-blur-md transition group-hover:opacity-100">
              <Maximize2 size={15} />
            </div>
          </button>
        ))}
      </div>

      <div className="my-20 text-center">
        <Quote size={24} className="mx-auto mb-5 text-gold/70" />
        <p className="mx-auto max-w-2xl font-display text-3xl sm:text-4xl italic leading-tight text-cream/90">
          “I would choose every ordinary day with you over any extraordinary day
          without you.”
        </p>
        <p className="mt-5 text-xs uppercase tracking-[3px] text-gold-light">
          — Sanwar
        </p>
      </div>

      <section className="mb-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[4px] text-gold-light">
              The complete archive
            </div>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Every photograph of us
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60 sm:text-right">
            Every still image from the collection, preserved here — including
            the HEIC and DNG originals, carefully converted for the web.
          </p>
        </div>
        <div className="archive-grid">
          {archiveItems.map((item, i) => {
            const memoryNumber = galleryItems.length + i + 1
            return (
              <button
                key={item.src}
                onClick={() => setSelectedIndex(galleryItems.length + i)}
                className="archive-card group"
                aria-label={`Open memory ${memoryNumber}`}
              >
                <img
                  src={item.src}
                  alt={`${item.caption} Memory ${memoryNumber}.`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left sm:p-4">
                  <span className="text-[9px] uppercase tracking-[2px] text-gold-light/80">
                    Memory {String(memoryNumber).padStart(3, "0")}
                  </span>
                  <p className="mt-1 font-display text-lg leading-tight text-cream">
                    {item.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-cream/65">
                    {item.caption}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {selected && selectedIndex !== null && (
        <div
          className="gallery-lightbox fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream transition hover:border-gold hover:text-gold-light sm:right-7 sm:top-7"
            aria-label="Close story"
          >
            <X size={20} />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation()
              setSelectedIndex(
                (selectedIndex - 1 + allGalleryItems.length) %
                  allGalleryItems.length,
              )
            }}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream transition hover:border-gold hover:text-gold-light sm:left-7"
            aria-label="Previous photograph"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation()
              setSelectedIndex((selectedIndex + 1) % allGalleryItems.length)
            }}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream transition hover:border-gold hover:text-gold-light sm:right-7"
            aria-label="Next photograph"
          >
            <ChevronRight size={22} />
          </button>
          <div
            className="grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-gold/30 bg-[#100807] shadow-2xl lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.75fr)] lg:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex min-h-[48vh] items-center justify-center bg-black/40 lg:min-h-[82vh]">
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-h-[60vh] w-full object-contain lg:max-h-[82vh]"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-cream/15 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[2px] text-cream/70 backdrop-blur-md">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {allGalleryItems.length}
              </div>
            </div>
            <div className="flex flex-col justify-center overflow-y-auto p-7 sm:p-10 lg:p-12">
              <div className="mb-5 text-[10px] uppercase tracking-[4px] text-gold-light">
                A memory of us
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-none">
                {selected.title}
              </h2>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-gold-light/90">
                {selected.caption}
              </p>
              <div className="my-7 h-px w-14 bg-gold/50" />
              <p className="text-base leading-7 text-cream/75">
                {selected.story}
              </p>
              <p className="mt-8 text-xs uppercase tracking-[3px] text-cream/35">
                Sanwar & Anindita
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function About() {
  return (
    <>
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Monogram size={56} />
        </div>
        <div className="text-xs uppercase tracking-[4px] text-gold-light mb-4">
          Our story, briefly
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">
          About Us
        </h1>
      </div>

      <div className="card-panel mb-14 grid overflow-hidden lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[440px] lg:min-h-full">
          <img
            src="/photos/memory-13.jpg"
            alt="Sanwar and Anindita together outdoors"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-velvet-deep/30" />
          <div className="absolute bottom-5 left-5 rounded-full border border-cream/20 bg-ink/55 px-4 py-2 text-[10px] uppercase tracking-[2px] text-cream/80 backdrop-blur-md">
            Sanwar & Anindita
          </div>
        </div>
        <div className="relative p-8 text-lg leading-relaxed text-cream/90 sm:p-10 lg:p-12">
          <Quote size={24} className="mb-6 text-gold/70" />
          <div className="space-y-5">
            <p>
              This is Sanwar's small corner of the internet, built for one
              person only — Anindita. Everything here, the colors, the letters,
              the little frames, exists for one reason: to say the things that
              are easy to feel and hard to say out loud.
            </p>
            <p>
              Anindita notices the small good things in a day — a cat crossing
              the road, the first bite of fries, the exact minute the sun
              softens before evening, the smell of rain before it starts. This
              site is built the same way: one small, deliberate thing at a time.
            </p>
            <p className="font-display text-xl italic text-gold-light">
              If you're reading this, Anindita — thank you for choosing to be
              loved this loudly.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-display text-3xl font-semibold">
          What I love about you
        </h2>
        <div className="h-px bg-gold/30 flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {aboutLoves.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-5 p-6 border border-gold/30 rounded-xl bg-gradient-to-br from-velvet-deep/65 to-wine/20 animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: `${i * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="icon-badge w-12 h-12">
              <item.icon size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-display text-xl text-gold-light mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-cream/75 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "gallery", element: <Gallery /> },
      { path: "about", element: <About /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
