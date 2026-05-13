import {
  ArrowRight,
  Camera,
  CalendarRange,
  Clock3,
  Coffee,
  HeartHandshake,
  MapPin,
  Martini,
  Music4,
  PhoneCall,
  Sparkles,
  Star,
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import './App.css'

const revealViewport = { once: false, amount: 0.24 }
const easeOutExpo = [0.22, 1, 0.36, 1]

const houseNumbers = [
  { value: '12', label: 'layered scenes with independent depth shifts' },
  { value: '04', label: 'signature experience zones for menu, mood, and space' },
  { value: '100%', label: 'portfolio-led storytelling built for hospitality brands' },
]

const showcaseMoments = [
  {
    title: 'Arrival with cinematic restraint',
    copy:
      'A restrained first frame opens with smoked espresso tones, reflective brass, and enough breathing room to feel editorial instead of templated.',
    detail: 'Entrance direction',
    icon: Sparkles,
  },
  {
    title: 'The bar becomes the stage',
    copy:
      'Sticky sections and drifting surfaces give the counter, pastry pass, and signature pours a premium reveal sequence while the typography stays composed.',
    detail: 'Service choreography',
    icon: Coffee,
  },
  {
    title: 'Night service closes the narrative',
    copy:
      'Late-evening amber gradients, ambient motion, and warm testimonial blocks keep the story luxurious through the final call to reserve.',
    detail: 'After-dark finish',
    icon: Music4,
  },
]

const signatureExperiences = [
  {
    title: 'Tasting Room Identity',
    eyebrow: 'Brand world',
    description:
      'Full-screen atmosphere, menu storytelling, and material cues designed to make a boutique cafe feel destination-worthy on first scroll.',
    note: 'Ideal for flagship cafe launches and aesthetic repositioning.',
  },
  {
    title: 'Pastry & Pour Showcase',
    eyebrow: 'Visual merchandising',
    description:
      'A layered grid for hero drinks, plated desserts, and seasonal rituals that reads like a hospitality lookbook instead of a product list.',
    note: 'Built for monthly drops, tasting menus, and premium socials.',
  },
  {
    title: 'Private Event Presence',
    eyebrow: 'Revenue page',
    description:
      'Editorial panels for chef tables, listening nights, and brand collaborations, with space for availability, capacity, and inquiry triggers.',
    note: 'Useful for rentals, launch events, and curated community nights.',
  },
]

const testimonials = [
  {
    quote:
      'The pacing feels like a short film. Guests understand the room, the service, and the price point before they ever visit.',
    name: 'Maris Ortega',
    role: 'Creative Director, Atelier Hospitality',
  },
  {
    quote:
      'This layout gives a cafe the same editorial confidence that luxury hotels and modern fashion spaces aim for online.',
    name: 'Rae Holloway',
    role: 'Brand Consultant, House Form Studio',
  },
]

function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.24,
  })
  const revealDistance = reduceMotion ? 0 : 56
  const reveal = (delay = 0, distance = revealDistance) => ({
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, delay, ease: easeOutExpo },
    },
  })
  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  }

  const haloY = useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : -260])
  const haloScale = useTransform(scrollYProgress, [0, 0.28], [1, reduceMotion ? 1 : 1.32])
  const headingY = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : -160])
  const panelPrimaryY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -230])
  const panelSecondaryY = useTransform(scrollYProgress, [0, 0.45], [0, reduceMotion ? 0 : -170])
  const panelTertiaryY = useTransform(scrollYProgress, [0, 0.55], [0, reduceMotion ? 0 : -130])
  const ribbonX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -560])
  const storyLeftY = useTransform(scrollYProgress, [0.14, 0.68], [110, reduceMotion ? 110 : -150])
  const storyRightY = useTransform(scrollYProgress, [0.2, 0.72], [150, reduceMotion ? 150 : -120])
  const reserveY = useTransform(scrollYProgress, [0.55, 1], [90, reduceMotion ? 90 : -90])
  const heroSmokeY = useTransform(scrollYProgress, [0, 0.45], [0, reduceMotion ? 0 : 260])
  const heroSmokeX = useTransform(scrollYProgress, [0, 0.4], [0, reduceMotion ? 0 : 110])
  const beamRotate = useTransform(scrollYProgress, [0, 0.4], [0, reduceMotion ? 0 : -7])
  const beamY = useTransform(scrollYProgress, [0, 0.5], [0, reduceMotion ? 0 : 160])
  const portfolioGlowY = useTransform(scrollYProgress, [0.18, 0.78], [180, reduceMotion ? 180 : -170])
  const menuGlowY = useTransform(scrollYProgress, [0.35, 1], [200, reduceMotion ? 200 : -140])
  const reserveGlowY = useTransform(scrollYProgress, [0.55, 1], [120, reduceMotion ? 120 : -120])

  return (
    <div className="relative overflow-x-clip bg-[var(--canvas)] text-[var(--sand)]">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <div className="pointer-events-none fixed inset-0 grain opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(208,149,82,0.15),_transparent_30%),radial-gradient(circle_at_18%_24%,_rgba(130,74,39,0.16),_transparent_24%),linear-gradient(180deg,_rgba(8,5,4,0.22),_transparent_34%,_rgba(8,5,4,0.62))]" />
      <motion.div
        className="section-ambient fixed left-[-14rem] top-[22vh] h-[30rem] w-[30rem] opacity-60"
        style={{ y: heroSmokeY, x: heroSmokeX }}
      />

      <motion.header
        className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
        initial={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: easeOutExpo }}
      >
        <a href="#top" className="flex items-center gap-3 text-sm uppercase tracking-[0.38em] text-[var(--sand)]/90">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur-md">
            <Coffee className="h-4 w-4 text-[var(--accent)]" />
          </span>
          The Cozy Cup
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] lg:flex">
          <a href="#portfolio" className="transition hover:text-[var(--sand)]">Portfolio</a>
          <a href="#menu" className="transition hover:text-[var(--sand)]">Signature Pages</a>
          <a href="#reserve" className="transition hover:text-[var(--sand)]">Reserve</a>
        </nav>

        <a
          href="#reserve"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/6 px-5 py-3 text-sm text-[var(--sand)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
        >
          Book the experience
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.header>

      <main>
        <section id="top" className="relative isolate">
          <motion.div
            className="absolute left-1/2 top-20 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(214,162,97,0.22),_rgba(214,162,97,0.02)_52%,_transparent_72%)] blur-3xl"
            style={{ y: haloY, scale: haloScale }}
          />
          <motion.div className="ambient-beam absolute left-[8%] top-28" style={{ rotate: beamRotate, y: beamY }} />
          <motion.div
            className="section-ambient absolute bottom-[-8rem] right-[-10rem] h-[28rem] w-[28rem] opacity-50"
            style={{ y: panelSecondaryY }}
          />

          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:pb-32 lg:pt-12">
            <motion.div
              className="relative z-10 flex min-h-[78vh] flex-col justify-between gap-14"
              style={{ y: headingY }}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <div className="space-y-8">
                <motion.div className="hero-kicker text-xs uppercase tracking-[0.4em] text-[var(--muted)]" variants={reveal()}>
                  <span className="pill">Boutique hospitality</span>
                  <span className="pill">Premium scroll narrative</span>
                  <span className="pill">Parallax portfolio</span>
                </motion.div>

                <motion.div className="space-y-6" variants={reveal(0.06)}>
                  <p className="eyebrow">Luxury cafe portfolio system</p>
                  <h1 className="max-w-4xl [font-family:var(--font-display)] text-6xl leading-[0.92] tracking-[-0.04em] text-[var(--sand)] sm:text-7xl lg:text-[7.75rem]">
                    A cafe website with the weight, rhythm, and polish of a premium brand film.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)] lg:text-lg">
                    Built as a cinematic one-page portfolio, this concept layers editorial typography,
                    atmosphere-rich gradients, sticky storytelling, and deep scroll motion so the brand
                    feels expensive before the first booking request.
                  </p>
                </motion.div>

                <motion.div className="flex flex-col gap-4 sm:flex-row" variants={reveal(0.12)}>
                  <a
                    href="#reserve"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1b120b] transition hover:translate-y-[-2px] hover:bg-[#ddb27b]"
                  >
                    Start your brand reveal
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-7 py-4 text-sm uppercase tracking-[0.22em] text-[var(--sand)] transition hover:border-[var(--accent)] hover:bg-white/5"
                  >
                    Explore the layered sections
                  </a>
                </motion.div>
              </div>

              <motion.div className="grid gap-4 sm:grid-cols-3" variants={stagger}>
                {houseNumbers.map((item) => (
                  <motion.div key={item.label} className="section-shell p-5" variants={reveal()}>
                    <p className="text-4xl [font-family:var(--font-display)] text-[var(--sand)] sm:text-5xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative min-h-[780px] lg:min-h-[860px]"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.18, ease: easeOutExpo }}
            >
              <motion.div
                className="showcase-panel absolute right-0 top-12 w-full max-w-[34rem]"
                style={{ y: panelPrimaryY }}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: easeOutExpo }}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
                  <span>Flagship moodboard</span>
                  <span>Editorial hospitality</span>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,_rgba(42,28,18,0.95),_rgba(19,12,8,0.92))] p-8 sm:p-10">
                  <div className="parallax-orb absolute right-[-5rem] top-[-4rem] h-44 w-44" />
                  <div className="parallax-orb absolute bottom-[-7rem] left-[-4rem] h-52 w-52 opacity-60" />

                  <div className="relative flex min-h-[31rem] flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.34em] text-[var(--accent)]">
                        Midnight tasting room
                      </p>
                      <h2 className="max-w-md [font-family:var(--font-display)] text-4xl leading-tight text-[var(--sand)] sm:text-5xl">
                        A candlelit identity with sharp typography and warm material depth.
                      </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Space cues</p>
                        <p className="mt-3 text-sm leading-7 text-[var(--sand)]/85">
                          Smoked mirror shelves, amber downlight, bronze edges, and a bar front styled to read as a hero frame.
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Guest feeling</p>
                        <p className="mt-3 text-sm leading-7 text-[var(--sand)]/85">
                          Calm, elevated, and tactile. The page communicates premium pricing without needing to say it directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="showcase-panel absolute left-0 top-[18rem] w-[62%]"
                style={{ y: panelSecondaryY }}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.88, delay: 0.32, ease: easeOutExpo }}
              >
                <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(28,18,12,0.9),_rgba(12,8,6,0.95))] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Signature pour</p>
                  <div className="mt-5 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="[font-family:var(--font-display)] text-3xl text-[var(--sand)]">
                        Burnt sugar espresso
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--muted)]">
                        Dense crema, black cherry finish, and a menu reveal that feels more like a seasonal campaign than a card list.
                      </p>
                    </div>
                    <div className="bean" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="showcase-panel absolute bottom-8 right-4 w-[70%]"
                style={{ y: panelTertiaryY }}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.88, delay: 0.44, ease: easeOutExpo }}
              >
                <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(36,24,17,0.92),_rgba(14,9,6,0.95))] p-6">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="mt-4 text-base leading-8 text-[var(--sand)]/90">
                    “Every scroll beat feels intentional. It has the confidence of a luxury launch page without losing the warmth a cafe needs.”
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Guest impression study
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="marquee-shell">
            <motion.div className="marquee-track" style={{ x: ribbonX }}>
              {Array.from({ length: 2 }).map((_, index) => (
                <span key={index}>
                  Luxury hospitality direction • layered scroll motion • editorial cafe storytelling • tactile ambience • signature menu showcase • private event positioning •
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="relative z-10 px-6 py-20 lg:px-10 lg:py-28">
          <motion.div className="section-ambient absolute left-[-8rem] top-20 h-[24rem] w-[24rem] opacity-45" style={{ y: portfolioGlowY }} />
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.5fr_0.5fr]">
            <motion.div
              className="lg:sticky lg:top-8 lg:h-fit"
              style={{ y: storyLeftY }}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={reveal()}
            >
              <div className="section-shell overflow-hidden p-8 sm:p-10">
                <p className="eyebrow">Story architecture</p>
                <h2 className="mt-4 max-w-lg [font-family:var(--font-display)] text-4xl leading-tight text-[var(--sand)] sm:text-5xl">
                  The site moves like service: inviting first, memorable in the middle, and decisive at the close.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                  This portfolio structure is built to sell atmosphere, not just menu items. Every section uses contrast,
                  movement, and premium spacing so the brand can flex between brunch culture, evening service, and private events.
                </p>

                <div className="glow-line my-8" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Positioning</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--sand)]/85">
                      Boutique destination cafe with a premium, members-club-adjacent visual language.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Interaction style</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--sand)]/85">
                      Deep parallax layers, staggered reveal cards, and sticky sections that keep the page feeling substantial.
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <MapPin className="h-5 w-5 text-[var(--accent)]" />
                    <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Location</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--sand)]/85">Soho-inspired corner room with gallery-grade materials.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <Clock3 className="h-5 w-5 text-[var(--accent)]" />
                    <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Service arc</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--sand)]/85">Morning pastry rush through slow evening espresso and cocktails.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <Martini className="h-5 w-5 text-[var(--accent)]" />
                    <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Upsell</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--sand)]/85">Private tastings, chef collaborations, and after-hours reservations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6"
              style={{ y: storyRightY }}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              {showcaseMoments.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.article key={item.title} className="menu-card p-7 sm:p-8" variants={reveal(index * 0.08)}>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="eyebrow">{item.detail}</p>
                        <h3 className="mt-4 max-w-md [font-family:var(--font-display)] text-3xl text-[var(--sand)] sm:text-4xl">
                          {item.title}
                        </h3>
                      </div>
                      <Icon className="h-6 w-6 shrink-0 text-[var(--accent)]" />
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-8">
                      <p className="max-w-lg text-sm leading-8 text-[var(--muted)] sm:text-base">
                        {item.copy}
                      </p>
                      <p className="outline-number">0{index + 1}</p>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </section>

        <section id="menu" className="relative z-10 px-6 py-20 lg:px-10 lg:py-32">
          <motion.div className="section-ambient absolute right-[-10rem] top-16 h-[26rem] w-[26rem] opacity-40" style={{ y: menuGlowY }} />
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={reveal()}>
                <p className="eyebrow">Signature page modules</p>
                <h2 className="mt-4 max-w-3xl [font-family:var(--font-display)] text-4xl leading-tight text-[var(--sand)] sm:text-5xl lg:text-6xl">
                  Built like a hospitality portfolio, not a thin starter theme.
                </h2>
              </motion.div>
              <motion.p className="max-w-xl text-base leading-8 text-[var(--muted)]" variants={reveal(0.08)}>
                Each panel can stand alone for campaigns, seasonal launches, or private-event funnels while still feeling part of one polished world.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-6 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              {signatureExperiences.map((item, index) => (
                <motion.article key={item.title} className="menu-card p-7 sm:p-8" variants={reveal(index * 0.08)}>
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h3 className="mt-4 [font-family:var(--font-display)] text-3xl text-[var(--sand)]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-[var(--muted)]">{item.description}</p>
                  <div className="glow-line my-6" />
                  <p className="text-sm leading-7 text-[var(--sand)]/85">{item.note}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 px-6 pb-20 lg:px-10 lg:pb-32">
          <motion.div className="section-ambient absolute bottom-0 left-[10%] h-[24rem] w-[24rem] opacity-35" style={{ y: reserveGlowY }} />
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.6fr_0.4fr]">
            <motion.div
              className="section-shell p-8 sm:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <p className="eyebrow">Industry response</p>
              <motion.h2 className="mt-4 max-w-2xl [font-family:var(--font-display)] text-4xl leading-tight text-[var(--sand)] sm:text-5xl" variants={reveal()}>
                The finish stays warm and persuasive, so the portfolio feels luxurious without becoming cold.
              </motion.h2>

              <motion.div className="mt-10 grid gap-5" variants={stagger}>
                {testimonials.map((item, index) => (
                  <motion.blockquote
                    key={item.name}
                    className="rounded-[1.75rem] border border-white/10 bg-black/10 p-6"
                    variants={reveal(index * 0.1)}
                  >
                    <div className="flex items-center gap-2 text-[var(--accent)]">
                      <HeartHandshake className="h-5 w-5" />
                      <span className="text-xs uppercase tracking-[0.3em]">Brand testimonial</span>
                    </div>
                    <p className="mt-5 text-base leading-8 text-[var(--sand)]/90">“{item.quote}”</p>
                    <footer className="mt-6 text-sm leading-7 text-[var(--muted)]">
                      <span className="block text-[var(--sand)]">{item.name}</span>
                      <span>{item.role}</span>
                    </footer>
                  </motion.blockquote>
                ))}
              </motion.div>
            </motion.div>

            <motion.aside
              id="reserve"
              className="section-shell p-8 sm:p-10"
              style={{ y: reserveY }}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <p className="eyebrow">Reserve the concept</p>
              <motion.h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[var(--sand)] sm:text-5xl" variants={reveal()}>
                Designed for founders who want their cafe to look unmistakably premium.
              </motion.h2>
              <motion.p className="mt-6 text-base leading-8 text-[var(--muted)]" variants={reveal(0.06)}>
                Use this page as the foundation for menu storytelling, private event conversion, gallery updates, and future CI/CD deployment.
              </motion.p>

              <motion.div className="mt-8 grid gap-4" variants={stagger}>
                <motion.div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5" variants={reveal()}>
                  <div className="flex items-center gap-3 text-[var(--sand)]">
                    <CalendarRange className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Availability</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--sand)]/85">Brand direction slots open for June and July launch windows.</p>
                </motion.div>
                <motion.div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5" variants={reveal(0.08)}>
                  <div className="flex items-center gap-3 text-[var(--sand)]">
                    <PhoneCall className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Contact</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--sand)]/85">+1 (212) 555-0148</p>
                  <p className="text-sm leading-7 text-[var(--sand)]/85">reservations@thecozycup.studio</p>
                </motion.div>
                <motion.div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5" variants={reveal(0.16)}>
                  <div className="flex items-center gap-3 text-[var(--sand)]">
                    <Camera className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Social mood</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--sand)]/85">Editorial reels, espresso pours, pastry stills, and after-dark playlists.</p>
                </motion.div>
              </motion.div>

              <motion.a
                href="#top"
                className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[var(--sand)] transition hover:text-[var(--accent)]"
                variants={reveal(0.2, 24)}
              >
                Return to the opening scene
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
