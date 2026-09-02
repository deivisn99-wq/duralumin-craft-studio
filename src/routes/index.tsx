import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  MapPin,
  MessageCircle,
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
import { cn } from "@/lib/utils";
import {
  ADDRESS,
  GOOGLE_REVIEWS_URL,
  MAP_EMBED,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
  content,
  reviews,
  type Lang,
} from "@/lib/content";
import heroImg from "@/assets/hero-facade.jpg";
import workshopImg from "@/assets/workshop.jpg";
// Placeholder stock imagery — one distinct photo per service card
import svcWindows from "@/assets/svc-windows.jpg";
import svcDoors from "@/assets/svc-doors.jpg";
import svcGlazing from "@/assets/svc-glazing.jpg";
import svcFacade from "@/assets/svc-facade.jpg";
import svcPvc from "@/assets/svc-pvc.jpg";
import svcShutters from "@/assets/svc-shutters.jpg";
import svcRailings from "@/assets/svc-railings.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duralumin Methoxha — Dritare & Dyer Alumini në Tiranë" },
      {
        name: "description",
        content:
          "Prodhim dhe montim dritareve e dyerve prej alumini në Tiranë. Cilësi e lartë, korrektësi dhe çmime konkurruese. 4.9★ në Google.",
      },
      { property: "og:title", content: "Duralumin Methoxha — Dritare & Dyer Alumini në Tiranë" },
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

function Index() {
  const [lang, setLang] = useState<Lang>("al");
  return (
    <div className="min-h-screen overflow-x-clip bg-beige">
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <WhyUs lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Process lang={lang} />
        <Quote lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileContactBar lang={lang} />
    </div>
  );
}

function Hero({ lang }: { lang: Lang }) {
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
        alt="Fasadë moderne me dritare alumini në Tiranë"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-[115%] w-full object-cover"
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
          {
            "Prodhim dhe montim profesional i dritareve dhe dyerve prej alumini në Tiranë — cilësi e lartë, korrektësi në punë dhe oferta transparente."
          }
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease }}
        >
          <a
            href="#quote"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-beige px-7 py-4 text-sm font-semibold text-brown-deep transition-transform hover:-translate-y-0.5"
          >
            {t.cta1}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="#why"
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
            alt="Mjeshtri duke matur një kornizë alumini në punishte"
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
              { to: 4.9, decimals: 1, suffix: "", label: "Vlerësim në Google", star: true },
              { to: 10, decimals: 0, suffix: "+", label: "Vjet Në Treg", star: false },
              { to: 150, decimals: 0, suffix: "+", label: "Klientë të Kënaqur", star: false },
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
                  <span className="text-base text-brown/70">
                    {r.meta || (lang === "al" ? "Vlerësim në Google" : "Google Review")}
                  </span>
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
  return (
    <section id="why" className="bg-beige-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <PillarsDiagram lang={lang} />

        <div className="mt-20">
          <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
            <p className="label-caps text-brown/70">{t.reviewsLabel}</p>
            <div className="mt-4 flex items-center gap-3">
              <GoogleLogo className="size-9 shrink-0" />
              <p className="font-display text-5xl text-brown-deep sm:text-6xl">{t.reviewsRating}</p>
            </div>
            <div className="mt-3">
              <GoldStars label={t.reviewsStarsAria} />
            </div>
            <p className="mt-3 text-sm text-foreground/70">{t.reviewsSupport}</p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brown px-5 py-3 text-sm font-semibold text-brown transition-colors hover:bg-brown hover:text-beige"
              aria-label={t.reviewsCta}
            >
              {t.reviewsCta} <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
          <div className="mt-14">
            <ReviewsGrid lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).services;
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHead label={t.label} title={t.title} />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-foreground/75">
            Zgjidhje të menduara për hapësira që zgjasin.
          </p>
          <a
            href="#quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-semibold text-beige"
          >
            Kërko ofertë <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-5">
          {t.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <Reveal as="article" key={s.t} delay={i * 70}>
                <div className="group grid overflow-hidden rounded-2xl border border-brown/10 bg-beige shadow-[0_4px_18px_-4px_rgba(58,44,30,0.08)] sm:grid-cols-[.75fr_1.25fr]">
                  <img
                    src={servicesImages[i]}
                    alt={s.t}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
                  />
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
  const isAlbanian = lang === "al";
  const projectImages = [heroImg, workshopImg, heroImg, workshopImg, heroImg, workshopImg];
  const projectLabels = isAlbanian
    ? [
        "Rezidencë private",
        "Punishte & detaje",
        "Fasadë moderne",
        "Hapësirë komerciale",
        "Dritare alumini",
        "Projekt në Tiranë",
      ]
    : [
        "Private residence",
        "Workshop details",
        "Modern façade",
        "Commercial space",
        "Aluminum windows",
        "Tirana project",
      ];

  return (
    <section id="projects" className="bg-brown-deep py-24 text-beige sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead
            label={isAlbanian ? "Projektet Tona" : "Our Projects"}
            title={isAlbanian ? "Punë që flasin vetë" : "Work that speaks for itself"}
            invert
          />
          <p className="max-w-sm text-sm leading-relaxed text-beige/65">
            {isAlbanian
              ? "Një përzgjedhje nga punimet dhe detajet që krijojmë çdo ditë."
              : "A selection of the spaces, details, and finishes we create every day."}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {projectImages.map((image, i) => (
            <Reveal
              key={`${projectLabels[i]}-${i}`}
              delay={i * 70}
              className={i === 1 || i === 4 ? "sm:translate-y-10" : ""}
            >
              <figure className="group relative overflow-hidden rounded-2xl bg-brown">
                <img
                  src={image}
                  alt={`${projectLabels[i]} — Duralumin Methoxha`}
                  loading="lazy"
                  className="aspect-[3/5] w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/90 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-beige sm:px-5 sm:pb-5">
                  {projectLabels[i]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
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
          <p className="mt-6 max-w-sm leading-relaxed text-foreground/70">
            Nga ideja e parë deri te montimi, çdo hap është i qartë.
          </p>
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
            <a href={PHONE_TEL} className="flex items-center gap-3 hover:text-beige-deep">
              <Phone className="size-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-beige-deep"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5" />
              {ADDRESS}
            </p>
          </div>
        </div>
        <Reveal className="rounded-2xl border border-beige/20 bg-brown-deep/30 p-6 sm:p-9">
          <QuoteForm lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}

function MobileContactBar({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    const quote = document.getElementById("quote");
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      (entries) => {
        const hidden = entries.some((entry) => entry.isIntersecting);
        setVisible(window.scrollY > (hero?.clientHeight ?? 500) - 80 && !hidden);
      },
      { threshold: 0.08 },
    );
    [quote, footer].forEach((el) => el && observer.observe(el));
    const onScroll = () => setVisible(window.scrollY > (hero?.clientHeight ?? 500) - 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const t = (content[lang] ?? content.al).quote;
  return (
    <div
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-2 rounded-full bg-brown p-2 text-beige shadow-lift transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0",
      )}
    >
      <a
        href={PHONE_TEL}
        className="flex items-center justify-center gap-2 rounded-full bg-beige px-4 py-3 text-sm font-semibold text-brown"
      >
        <Phone className="size-4" />
        {t.callLabel}
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang] ?? content.al;
  return (
    <footer className="bg-beige px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl text-brown">Duralumin Methoxha</p>
          <p className="mt-4 flex gap-2 text-sm text-foreground/70">
            <MapPin className="size-4 shrink-0 text-brown" />
            {ADDRESS}
          </p>
          <a href={PHONE_TEL} className="mt-2 block text-sm text-foreground/70">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.hours}</p>
        </div>
        <div>
          <p className="label-caps text-brown/70">{t.footer.quick}</p>
          <div className="mt-4 grid gap-2 text-sm">
            {["Shërbimet", "Pse Ne", "Procesi", "Kontakt"].map((x, i) => (
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
          <p className="label-caps text-brown/70">Kontakt</p>
          <iframe
            title="Harta e lokacionit"
            src={MAP_EMBED}
            loading="lazy"
            className="mt-4 h-32 w-full rounded-xl border border-brown/15"
          />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-brown/15 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Duralumin Methoxha. {t.footer.rights}
      </div>
    </footer>
  );
}
