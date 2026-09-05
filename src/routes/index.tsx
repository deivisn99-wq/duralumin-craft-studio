import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  AppWindow,
  ArrowUpRight,
  Building2,
  ChevronRight,
  DoorOpen,
  Hammer,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Phone,
  ReceiptText,
  Ruler,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import heroStraightenedCleanFloor from "@/assets/hero-straightened-clean-floor.jpg";
import { cn } from "@/lib/utils";
import {
  ADDRESS,
  EMAIL,
  EMAIL_MAILTO,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM,
  MAP_EMBED,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
  content,
  reviews,
  type Lang,
} from "@/lib/content";
const photo = (id: string) => `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/${id}`;
const heroImg = heroStraightenedCleanFloor;
const workshopImg = photo("02_Rreth-Nesh__IMG-20260902-WA0066-hhfwbYeeVSCO4BPBd5ds4JeJsgjQKq.jpg");
const svcWindows = photo(
  "03_Sherbime-01_Dritare-Alumini__IMG-20260902-WA0096-HeJ18lnX8aBKLFR3T0yeWdC6ivbsFq.jpg",
);
const svcDoors = photo(
  "04_Sherbime-02_Dyer-Alumini__IMG-20260902-WA0110-6BaAEs7VX4Tyiu12srtqaW2k7mQAyM.jpg",
);
const svcGlazing = photo(
  "05_Sherbime-03_Vetrata__IMG-20260902-WA0020-dKY2jaZwWF9mOxnicN37Z1ebF7JKlc.jpg",
);
const svcFacade = photo(
  "06_Sherbime-04_Fasada-Alumini__IMG-20260902-WA0081-jd1OhltX4FDR6tsHWFOSPELYpOVFXZ.jpg",
);
const svcPvc = photo(
  "07_Sherbime-05_Punime-PVC__IMG-20260902-WA0027-BrjvvX4nuICgvvJm4LQ7oVHLHyVNq1.jpg",
);
const svcShutters = photo(
  "08_Sherbime-06_Grila__IMG-20260902-WA0049-LRcr2u9tWmsMaOKM82Ec806IdzOa15.jpg",
);
const svcRailings =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10_Projekte-01_Dyer-me-hark-kafe__IMG-20260902-WA0112%20%281%29-YACm9jXXoHP3RGCG1fQbjIkL3mPK1c.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duralumin Methoxha — Dritare dhe dyer alumini në Tiranë" },
      {
        name: "description",
        content:
          "Prodhim dhe montim i dritareve dhe dyerve prej alumini në Tiranë. Cilësi e lartë, korrektësi dhe çmime transparente. 4.9★ në Google.",
      },
      {
        property: "og:title",
        content: "Duralumin Methoxha — Dritare dhe dyer alumini në Tiranë",
      },
      {
        property: "og:description",
        content: "Dritare, dyer, fasada dhe montim profesional në Tiranë.",
      },
    ],
  }),
  component: Index,
});

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden role="img">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.44v5.7C8.06 42.03 15.45 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.44C2.99 17.99 2.12 20.9 2.12 24s.87 6.01 2.32 8.18l7.25-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.45 2 8.06 5.97 4.44 12.12l7.25 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const servicesImages = [
  svcWindows,
  svcDoors,
  svcGlazing,
  svcFacade,
  svcPvc,
  svcShutters,
  svcRailings,
];
const proofIcons = [Layers, Ruler, ReceiptText, Building2];
const serviceIcons = [AppWindow, DoorOpen, Building2, Hammer, Wrench, Layers, Ruler];
const processIcons = [MessageCircle, ReceiptText, Hammer, Wrench, ShieldCheck];
const projectImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16_Rezerve_Kabine-dushi__IMG-20260902-WA0090-w1tDPBvrBLaUNMJBtWx2kmuoCvmPfI.jpg",
  photo(
    "11_Projekte-02_Dyer-me-hark-te-bardha__IMG-20260902-WA0078-feyvAulYoVWNvr8ATQORWplXJ78yRQ.jpg",
  ),
  photo("12_Projekte-03_Grila-te-bardha__IMG-20260902-WA0097-wqZyOfNzEgTQ0VeTff4bfoALym3UQJ.jpg"),
  photo("13_Projekte-04_Grila-kafe__IMG-20260902-WA0055-smWBpO31vjQCHKsuogixLyEOalijf8.jpg"),
  photo("14_Projekte-05_Dere-me-grila__IMG-20260902-WA0088-FTA3TysEwPmpgoIJFEtIF4KLLQSbqP.jpg"),
  photo(
    "15_Projekte-06_Vetrate-komerciale__IMG-20260902-WA0107-ybCZwbiEylIzIhClMGTqEsAfep0eNG.jpg",
  ),
  svcWindows,
  svcDoors,
  svcGlazing,
];
const projectCategoryKeys = ["all", "windows", "doors", "glazing", "railings"] as const;
type ProjectCategory = (typeof projectCategoryKeys)[number];
const projectCategories: Exclude<ProjectCategory, "all">[] = [
  "doors",
  "doors",
  "railings",
  "railings",
  "doors",
  "glazing",
  "windows",
  "doors",
  "glazing",
];

function Index() {
  const [lang, setLang] = useState<Lang>("al");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const t = content[lang] ?? content.al;

  useEffect(() => {
    document.documentElement.lang = lang === "al" ? "sq" : "en";
    document.title =
      lang === "al"
        ? "Duralumin Methoxha — Dritare dhe dyer alumini në Tiranë"
        : "Duralumin Methoxha — Aluminum Windows and Doors in Tirana";
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = t.hero.sub;
  }, [lang, t.hero.sub]);

  useEffect(() => {
    if (!quoteOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setQuoteOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [quoteOpen]);
  const openQuote = () => setQuoteOpen(true);
  return (
    <div className="min-h-screen overflow-x-clip bg-beige">
      <Nav lang={lang} setLang={setLang} onQuote={openQuote} />
      <main>
        <Hero lang={lang} onQuote={openQuote} />
        <About lang={lang} />
        <WhyUs lang={lang} />
        <Services lang={lang} onQuote={openQuote} />
        <Projects lang={lang} />
        <Process lang={lang} />
        <Quote lang={lang} />
      </main>
      <Footer lang={lang} />
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label={t.common.whatsappAria}
        className="group fixed bottom-24 right-5 z-50 grid size-14 place-items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        <MessageCircle className="size-6" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-brown-deep px-3 py-1.5 text-xs font-semibold text-beige opacity-0 transition-opacity group-hover:opacity-100">
          {t.common.whatsappTooltip}
        </span>
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500 opacity-25 animate-ping"
          aria-hidden="true"
        />
      </a>
      <AnimatePresence>
        {quoteOpen && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-brown-deep/75 p-4 backdrop-blur-sm"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setQuoteOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-brown p-6 text-beige shadow-2xl sm:p-9"
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
            >
              <button
                type="button"
                onClick={() => setQuoteOpen(false)}
                aria-label={t.common.closeQuote}
                className="absolute right-4 top-4 rounded-full p-2 text-beige/70 hover:bg-beige/10 hover:text-beige"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h2 id="quote-modal-title" className="pr-10 font-display text-3xl">
                {(content[lang] ?? content.al).quote.title}
              </h2>
              <p className="mt-2 text-sm text-beige/70">
                {(content[lang] ?? content.al).quote.sub}
              </p>
              <div className="mt-7">
                <QuoteForm lang={lang} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero({ lang, onQuote }: { lang: Lang; onQuote: () => void }) {
  const t = (content[lang] ?? content.al).hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 95]);
  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-brown-deep"
    >
      <motion.img
        src={heroImg}
        alt={t.imageAlt}
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-[115%] w-full object-cover object-[center_58%] sm:object-center"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease }}
        style={{ y }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brown-deep/95 via-brown-deep/60 to-brown-deep/15" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:pb-24 lg:px-8">
        <motion.p
          className="label-caps text-beige-deep"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {t.eyebrow}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-3xl font-display text-4xl text-beige sm:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-beige/85 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease }}
        >
          {t.sub}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease }}
        >
          <button
            type="button"
            onClick={onQuote}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-beige px-7 py-4 text-sm font-semibold text-brown-deep transition-transform hover:-translate-y-0.5"
          >
            {t.cta1}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-beige/60 px-7 py-4 text-sm font-semibold text-beige transition-colors hover:bg-beige/10"
          >
            {t.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHead({
  label,
  title,
  invert = false,
  size = "md",
}: {
  label: string;
  title: string;
  invert?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <Reveal>
      <p className={`label-caps ${invert ? "text-beige-deep/80" : "text-brown/70"}`}>{label}</p>
      <h2
        className={`mt-4 max-w-2xl font-display ${size === "lg" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"} ${invert ? "text-beige" : "text-brown-deep"}`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).about;
  return (
    <section id="about" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-24 lg:px-8">
        <Reveal className="relative">
          <img
            src={workshopImg}
            alt={t.imageAlt}
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </Reveal>
        <div className="border-l border-brown/30 pl-7 sm:pl-10">
          <SectionHead label={t.label} title={t.title} size="lg" />
          <Reveal delay={100}>
            <p className="mt-7 text-lg leading-relaxed text-foreground/80 sm:text-xl">{t.body}</p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { to: 4.9, decimals: 1, suffix: "", label: t.stats[0], star: true },
              { to: 10, decimals: 0, suffix: "+", label: t.stats[1], star: false },
              { to: 150, decimals: 0, suffix: "+", label: t.stats[2], star: false },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="border-t border-brown/20 pt-5">
                  <strong className="flex items-baseline gap-2 font-display text-4xl text-brown-deep sm:text-5xl">
                    <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                    {s.star && (
                      <Star
                        className="size-6 shrink-0 translate-y-[-0.15em] fill-current text-brown sm:size-7"
                        aria-hidden
                      />
                    )}
                  </strong>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const reviewPickIndices = [0, 1, 3] as const;

function GoldStars({ label }: { label: string }) {
  return (
    <span className="flex gap-1 text-amber-500" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

function ReviewsGrid({ lang }: { lang: Lang }) {
  const t = content[lang].why;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reviewPickIndices.map((idx, i) => {
        const r = reviews[idx]!;
        return (
          <Reveal as="figure" key={r.name + i} delay={i * 90}>
            <figure className="group/card flex h-full min-h-[340px] flex-col rounded-[1.5rem] border border-brown/10 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brown/25 hover:shadow-[0_18px_40px_-18px_rgba(58,44,30,0.18)] sm:p-9">
              <GoldStars label={t.reviewsStarsAria} />
              <blockquote className="mt-10 grow font-sans text-xl leading-[1.55] text-brown-deep sm:text-2xl">
                “{r.text[lang]}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brown font-display text-2xl text-beige">
                  {r.name.trim().charAt(0).toUpperCase()}
                </span>
                <span className="grid gap-1">
                  <span className="font-sans text-lg font-medium text-brown-deep">{r.name}</span>
                  <span className="text-base text-brown/70">{r.meta || t.reviewsGoogleReview}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        );
      })}
    </div>
  );
}

function PillarsDiagram({ lang }: { lang: Lang }) {
  const t = content[lang].why;
  const items = t.pillars;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = (from: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2500);
  };

  useEffect(() => {
    startTimer(active);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, items.length]);

  const handleClick = (i: number) => {
    setActive(i);
  };

  const current = items[active] ?? items[0]!;

  return (
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      {/* LEFT: static heading + fixed summary paragraph */}
      <div>
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t.summary}
          </p>
        </Reveal>
      </div>

      {/* RIGHT: circle diagram + active text below it */}
      <div>
        {/* desktop horizontal row */}
        <div className="relative hidden px-6 lg:block">
          <div className="absolute left-6 right-6 top-10 h-px bg-brown/20" />
          <div className="relative flex items-start justify-between">
            {items.map((p, i) => {
              const Icon = proofIcons[i] ?? Layers;
              const on = i === active;
              return (
                <button
                  key={p.t}
                  type="button"
                  onClick={() => handleClick(i)}
                  aria-pressed={on}
                  aria-label={p.t}
                  className="flex cursor-pointer flex-col items-center gap-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 focus-visible:ring-offset-beige-deep"
                >
                  <div
                    className={cn(
                      "grid size-20 place-items-center rounded-full border transition-all duration-500 ease-out",
                      on
                        ? "scale-110 border-brown bg-brown shadow-[0_18px_40px_-14px_rgba(58,44,30,0.45)]"
                        : "scale-100 border-brown/25 bg-surface",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-8 transition-colors duration-500",
                        on ? "text-beige" : "text-brown/40",
                      )}
                      strokeWidth={1.2}
                    />
                  </div>
                  <span
                    className={cn(
                      "max-w-24 text-center text-xs font-semibold uppercase tracking-wider transition-colors duration-500",
                      on ? "text-brown-deep" : "text-brown/40",
                    )}
                  >
                    {p.t}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* mobile vertical stack */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-8 left-7 top-8 w-px bg-brown/20" />
          <ol className="relative grid gap-8">
            {items.map((p, i) => {
              const Icon = proofIcons[i] ?? Layers;
              const on = i === active;
              return (
                <li key={p.t} className="relative flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => handleClick(i)}
                    aria-pressed={on}
                    aria-label={p.t}
                    className={cn(
                      "grid size-14 shrink-0 cursor-pointer place-items-center rounded-full border transition-all duration-500 ease-out outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 focus-visible:ring-offset-beige-deep",
                      on
                        ? "scale-110 border-brown bg-brown shadow-[0_12px_28px_-14px_rgba(58,44,30,0.45)]"
                        : "scale-100 border-brown/25 bg-surface",
                    )}
                  >
                    <Icon
                      className={cn("size-6", on ? "text-beige" : "text-brown/40")}
                      strokeWidth={1.2}
                    />
                  </button>
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider transition-colors duration-500",
                      on ? "text-brown-deep" : "text-brown/40",
                    )}
                  >
                    {p.t}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* active item text — sits below the whole diagram */}
        <div className="mt-12 min-h-24">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.t}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl"
            >
              {current.d}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function WhyUs({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).why;
  const featureIcons = [ShieldCheck, Ruler, Wrench];
  return (
    <section id="why" className="bg-brown-deep py-24 text-beige sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label-caps text-beige-deep">{t.label}</p>
          <h2 className="mt-4 font-display text-4xl text-beige sm:text-6xl">{t.headerTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-beige/65 sm:text-lg">
            {t.intro}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.features.map((feature, i) => {
            const FeatureIcon = (featureIcons[i] ?? ShieldCheck) as ElementType;
            return (
              <Reveal key={feature.t} delay={i * 90}>
                <article className="h-full rounded-2xl border border-beige/10 bg-beige/5 p-8 transition-colors duration-300 hover:border-beige-deep/50">
                  <FeatureIcon className="size-8 text-beige-deep" strokeWidth={1.3} />
                  <h3 className="mt-8 font-display text-2xl text-beige">{feature.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-beige/60">{feature.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#C5A059]">
            {t.reviewsLabel}
          </p>
          <h3 className="mt-3 font-display text-3xl text-beige sm:text-5xl">
            {t.reviewsRating} · {t.reviewsSupport}
          </h3>
          <div
            className="mt-4 flex justify-center gap-1 text-[#C5A059]"
            aria-label={t.reviewsStarsAria}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <div className="review-marquee-wrap mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="review-marquee flex w-max gap-5 hover:[animation-play-state:paused]">
              {[...Array(2)].flatMap((_, copy) =>
                reviewPickIndices.map((reviewIndex, i) => {
                  const review = reviews[reviewIndex]!;
                  return (
                    <article
                      key={`${copy}-${i}`}
                      className="min-w-[320px] max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm"
                    >
                      <div className="flex gap-1 text-[#C5A059]" aria-label={t.fiveStarsAria}>
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="size-3.5 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <blockquote className="mt-5 text-base leading-relaxed text-beige/80">
                        “{review.text[lang]}”
                      </blockquote>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <strong className="text-sm text-beige">{review.name}</strong>
                        <span className="rounded-full border border-beige/15 px-2.5 py-1 text-[10px] text-beige/60">
                          {t.reviewsGoogleReview}
                        </span>
                      </div>
                    </article>
                  );
                }),
              )}
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-beige/30 px-5 py-3 text-sm font-semibold text-beige transition-colors hover:bg-beige hover:text-brown-deep"
          >
            {t.reviewsCta} →
          </a>
        </div>
      </div>
    </section>
  );
}

function Services({ lang, onQuote }: { lang: Lang; onQuote: () => void }) {
  const t = (content[lang] ?? content.al).services;
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHead label={t.label} title={t.title} />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-foreground/75">{t.sub}</p>
          <button
            type="button"
            onClick={onQuote}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-semibold text-beige"
          >
            {t.cta} <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="grid gap-5">
          {t.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <Reveal as="article" key={s.t} delay={i * 70}>
                <div className="group grid min-h-72 overflow-hidden rounded-2xl border border-brown/10 bg-beige shadow-[0_4px_18px_-4px_rgba(58,44,30,0.08)] sm:grid-cols-[.75fr_1.25fr]">
                  {/* Placeholder photo — wrapper keeps the image filling the full card height */}
                  <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-auto lg:self-stretch">
                    <img
                      src={servicesImages[i]}
                      alt={s.t}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex min-h-56 flex-col justify-between gap-8 p-8 sm:p-10">
                    <div className="flex items-start justify-between">
                      <span className="label-caps text-brown/40">0{i + 1}</span>
                      <Icon className="size-6 text-brown" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-brown-deep sm:text-[1.75rem]">
                        {s.t}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-[1.75] text-foreground/65">{s.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects({ lang }: { lang: Lang }) {
  const t = content[lang].projects;
  const [active, setActive] = useState<number | null>(null);
  const [category, setCategory] = useState<ProjectCategory>("all");
  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight")
        setActive((current) => (current === null ? 0 : (current + 1) % projectImages.length));
      if (event.key === "ArrowLeft")
        setActive((current) =>
          current === null ? 0 : (current - 1 + projectImages.length) % projectImages.length,
        );
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="projects" className="bg-brown-deep py-24 text-beige sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead label={t.label} title={t.title} invert />
          <p className="max-w-sm text-sm leading-relaxed text-beige/65">{t.sub}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {projectCategoryKeys.map((key, index) => (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                category === key
                  ? "border-beige bg-beige text-brown-deep"
                  : "border-beige/25 text-beige/70 hover:border-beige/60",
              )}
            >
              {t.categories[index]}
            </button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {projectImages
            .map((image, i) => ({ image, i }))
            .filter(({ i }) => category === "all" || projectCategories[i] === category)
            .map(({ image, i }) => (
              <Reveal key={t.labels[i]} delay={i * 70} className="">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-brown text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige"
                >
                  <img
                    src={image}
                    alt={`${t.labels[i]} — Duralumin Methoxha`}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className={cn(
                      "size-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-75",
                      i === 4 && "object-[center_70%]",
                    )}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/90 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-beige sm:px-5 sm:pb-5">
                    {t.labels[i]}
                  </span>
                </button>
              </Reveal>
            ))}
        </div>
      </div>
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.labels[active]}
          className="fixed inset-0 z-50 grid place-items-center bg-brown-deep/95 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full border border-beige/40 px-4 py-2 text-sm text-beige"
          >
            {t.close}
          </button>
          <button
            type="button"
            aria-label={t.previous}
            onClick={(event) => {
              event.stopPropagation();
              setActive((active - 1 + projectImages.length) % projectImages.length);
            }}
            className="absolute left-3 rounded-full bg-beige px-4 py-3 text-brown-deep sm:left-8"
          >
            ←
          </button>
          <img
            src={projectImages[active]}
            alt={`${t.labels[active]} — Duralumin Methoxha`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-[88vw] object-contain"
          />
          <button
            type="button"
            aria-label={t.next}
            onClick={(event) => {
              event.stopPropagation();
              setActive((active + 1) % projectImages.length);
            }}
            className="absolute right-3 rounded-full bg-beige px-4 py-3 text-brown-deep sm:right-8"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

function Process({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).process;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .7", "end .7"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="process" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHead label={t.label} title={t.title} />
          <p className="mt-6 max-w-sm leading-relaxed text-foreground/70">{t.intro}</p>
        </div>
        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-4 top-0 z-0 w-px bg-brown/15">
            <motion.div className="w-full origin-top bg-brown" style={{ height }} />
          </div>
          <ol className="relative grid gap-4">
            {t.steps.map((s, i) => {
              const Icon = processIcons[i] ?? MessageCircle;
              return (
                <li key={s.t}>
                  <div className="grid grid-cols-[2rem_1fr] gap-5 pb-10">
                    <span className="relative z-10 grid size-8 place-items-center rounded-full border border-brown bg-beige font-display text-sm text-brown">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon className="size-6 shrink-0 text-brown" strokeWidth={1.2} />
                        <h3 className="font-display text-2xl text-brown-deep">{s.t}</h3>
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-foreground/70">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Quote({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).quote;
  return (
    <section id="quote" className="bg-brown py-24 text-beige sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHead label={t.label} title={t.title} invert />
          <p className="mt-6 max-w-md leading-relaxed text-beige/75">{t.sub}</p>
          <div className="mt-12 grid gap-4 text-sm">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-3 transition-colors hover:text-beige-deep"
            >
              <Phone className="size-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_MAILTO}
              className="flex items-center gap-3 transition-colors hover:text-beige-deep"
            >
              <Mail className="size-5" />
              {EMAIL}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-beige-deep"
            >
              <MessageCircle className="size-5" />
              {t.whatsapp}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-beige-deep"
            >
              <MapPin className="mt-0.5 size-5 shrink-0" />
              {t.address}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-beige-deep"
            >
              <Instagram className="size-5" />
              @duralumin_methoxha
            </a>
          </div>
        </div>
        <Reveal className="rounded-2xl border border-beige/20 bg-brown-deep/30 p-6 sm:p-9">
          <QuoteForm lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}


function Footer({ lang }: { lang: Lang }) {
  const t = content[lang] ?? content.al;
  return (
    <footer className="bg-beige px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl text-brown">Duralumin Methoxha</p>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex gap-2 text-sm text-foreground/70 transition-colors hover:text-brown"
          >
            <MapPin className="size-4 shrink-0 text-brown" />
            {t.footer.address}
          </a>
          <a
            href={PHONE_TEL}
            className="mt-2 block text-sm text-foreground/70 transition-colors hover:text-brown"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={EMAIL_MAILTO}
            className="mt-2 block text-sm text-foreground/70 transition-colors hover:text-brown"
          >
            {EMAIL}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.hours}</p>
        </div>
        <div>
          <p className="label-caps text-brown/70">{t.footer.quick}</p>
          <div className="mt-4 grid gap-2 text-sm">
            {[t.nav.services, t.nav.why, t.nav.process, t.footer.contact].map((x, i) => (
              <a
                key={x}
                href={["#services", "#why", "#process", "#quote"][i]}
                className="text-foreground/70 hover:text-brown"
              >
                {x}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="label-caps text-brown/70">{t.footer.contact}</p>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-brown/15"
          >
            <iframe
              title={t.footer.mapTitle}
              src={MAP_EMBED}
              loading="lazy"
              className="pointer-events-none h-32 w-full"
            />
          </a>
          <div className="mt-4 flex gap-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-black/10 p-2 text-brown transition-all hover:bg-[#C5A059] hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-black/10 p-2 text-brown transition-all hover:bg-[#C5A059] hover:text-white"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-brown/15 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Duralumin Methoxha. {t.footer.rights}
      </div>
    </footer>
  );
}
