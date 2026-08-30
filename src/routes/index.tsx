import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Layers,
  Handshake,
  BadgeEuro,
  Award,
  AppWindow,
  DoorOpen,
  Building2,
  Wrench,
  Hammer,
  Star,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/Reveal";
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
/* PLACEHOLDER — replace with real project photography */
import heroImg from "@/assets/hero-facade.jpg";
/* PLACEHOLDER — replace with real project photography */
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duralumin Methoxha — Dritare & Dyer Alumini në Tiranë" },
      {
        name: "description",
        content:
          "Prodhim dhe montim dritareve e dyerve prej alumini në Tiranë. Cilësi e lartë, korrektësi dhe çmime konkurruese. 4.9★ në Google. Kërko ofertë falas.",
      },
      { property: "og:title", content: "Duralumin Methoxha — Dritare & Dyer Alumini në Tiranë" },
      {
        property: "og:description",
        content:
          "Punime duralumini nga Ermal Met'hoxha: dritare, dyer, fasada dhe montim profesional në Tiranë.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillarIcons = [Layers, Handshake, BadgeEuro, Award];
const serviceIcons = [AppWindow, DoorOpen, Building2, Hammer, Wrench];

function Index() {
  const [lang, setLang] = useState<Lang>("al");

  return (
    <div className="min-h-screen bg-beige">
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <WhyUs lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Quote lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

/* ---------- HERO ---------- */

function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    if (reduced || !desktop) return; // no parallax on mobile or reduced motion
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.12, 110)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      {/* PLACEHOLDER — replace with real project photography */}
      <img
        src={heroImg}
        alt="Fasadë moderne me dritare alumini me profil të hollë në Tiranë"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-[115%] w-full object-cover"
        style={{ transform: `translateY(-${offset}px)` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brown-deep/92 via-brown-deep/55 to-brown-deep/15" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:pb-24 lg:px-8">
        <p className="label-caps text-beige-deep">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl text-beige sm:text-5xl lg:text-6xl">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-beige/85 sm:text-lg">{t.sub}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-sm bg-brown px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-150 hover:bg-brown-deep md:hover:scale-[1.02] md:hover:shadow-lift"
          >
            {t.cta1}
          </a>
          <a
            href="#why"
            className="inline-flex items-center justify-center rounded-sm border border-beige/60 px-7 py-4 text-sm font-semibold tracking-wide text-beige transition-all duration-150 hover:border-beige hover:bg-beige/10"
          >
            {t.cta2}
          </a>
        </div>

        <p className="mt-7 text-sm tracking-wide text-beige-deep">{t.trust}</p>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function SectionHead({
  label,
  title,
  invert = false,
}: {
  label: string;
  title: string;
  invert?: boolean;
}) {
  return (
    <Reveal>
      <p className={`label-caps ${invert ? "text-beige-deep/80" : "text-brown/70"}`}>{label}</p>
      <h2
        className={`mt-4 max-w-2xl text-3xl sm:text-4xl ${invert ? "text-beige" : "text-brown-deep"}`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = content[lang].about;
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          {/* PLACEHOLDER — replace with real project photography */}
          <img
            src={workshopImg}
            alt="Mjeshtri duke matur një kornizë alumini në punishte"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-4/5 w-full rounded-sm object-cover shadow-soft"
          />
        </Reveal>
        <div>
          <SectionHead label={t.label} title={t.title} />
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-foreground/85">{t.body}</p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {t.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-sm border border-brown/15 bg-beige px-4 py-3 text-sm font-semibold text-brown"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} / 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brown text-brown" strokeWidth={1} />
      ))}
    </span>
  );
}

function WhyUs({ lang }: { lang: Lang }) {
  const t = content[lang].why;
  return (
    <section id="why" className="bg-beige-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead label={t.label} title={t.title} />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map((p, i) => {
            const Icon = pillarIcons[i] ?? Award;
            return (
              <Reveal as="li" key={p.t} delay={i * 90}>
                <div className="h-full rounded-sm border border-brown/15 bg-surface p-6 transition-all duration-150 md:hover:scale-[1.02] md:hover:shadow-lift">
                  <Icon className="h-7 w-7 text-brown" strokeWidth={1.25} />
                  <h3 className="mt-5 text-base font-semibold text-brown-deep">{p.t}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{p.d}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-16">
          <h3 className="label-caps text-brown/70">{t.reviewsTitle}</h3>
        </Reveal>

        {/* Built to accept more reviews later — only real reviews are listed. */}
        <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 90}
              className="min-w-[80%] snap-start sm:min-w-[48%] lg:min-w-0"
            >
              <figure className="flex h-full flex-col rounded-sm border border-brown/15 bg-surface p-6">
                <Stars n={r.stars} />
                <blockquote className="mt-4 grow text-sm leading-relaxed text-foreground/85">
                  {r.text[lang]}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-brown-deep">
                  {r.name}
                  {r.meta && (
                    <span className="ml-2 font-normal text-muted-foreground">{r.meta}</span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 grid gap-4 sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-sm font-semibold text-brown-deep">
            <Stars /> {t.ratingBadge}
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-brown px-6 py-3 text-sm font-semibold text-brown transition-all duration-150 hover:bg-brown hover:text-primary-foreground"
          >
            {t.reviewsCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */

function Services({ lang }: { lang: Lang }) {
  const t = content[lang].services;
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead label={t.label} title={t.title} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? Wrench;
            return (
              <Reveal as="li" key={s.t} delay={i * 80}>
                <div className="h-full rounded-sm border border-brown/15 bg-beige p-7 transition-all duration-150 md:hover:scale-[1.02] md:hover:shadow-lift">
                  <Icon className="h-7 w-7 text-brown" strokeWidth={1.25} />
                  <h3 className="mt-5 text-lg font-semibold text-brown-deep">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */

function Process({ lang }: { lang: Lang }) {
  const t = content[lang].process;
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-beige py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead label={t.label} title={t.title} />

        <div ref={lineRef} className="relative mt-14">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <div
            className="absolute left-5 top-2 w-px bg-brown/40 transition-transform duration-1000 ease-out lg:left-0 lg:right-0 lg:top-5 lg:h-px lg:w-full"
            style={{
              height: "calc(100% - 2rem)",
              transform: drawn ? "scale(1)" : "scaleY(0)",
              transformOrigin: "top left",
            }}
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {t.steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 110} className="pl-14 lg:pl-0">
                <span className="absolute left-0 grid h-10 w-10 place-items-center rounded-full bg-brown font-display text-sm text-primary-foreground lg:static">
                  {i + 1}
                </span>
                <h3 className="mt-0 text-base font-semibold text-brown-deep lg:mt-6">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- QUOTE ---------- */

function Quote({ lang }: { lang: Lang }) {
  const t = content[lang].quote;
  return (
    <section id="quote" className="bg-brown py-20 text-beige sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHead label={t.label} title={t.title} invert />
        <Reveal delay={80}>
          <p className="mt-5 text-base text-beige/85">{t.sub}</p>
        </Reveal>

        <Reveal delay={140} className="mt-10">
          <QuoteForm lang={lang} />
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <p className="label-caps text-beige-deep/70">{t.or}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-3 rounded-sm border border-beige/40 px-5 py-4 text-sm font-semibold transition-colors hover:bg-beige/10"
            >
              <Phone className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              <span className="min-w-0 truncate">
                {t.callLabel}: {PHONE_DISPLAY}
              </span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-sm border border-beige/40 px-5 py-4 text-sm font-semibold transition-colors hover:bg-beige/10"
            >
              <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  const nav = t.nav;
  const f = t.footer;
  const year = new Date().getFullYear();
  const links = ["home", "about", "why", "services", "process", "quote"] as const;

  return (
    <footer className="bg-beige py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-xl text-brown">Duralumin Methoxha</p>
          <p className="mt-2 text-sm text-muted-foreground">{f.tagline}</p>
          <p className="mt-5 flex items-start gap-2 text-sm text-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brown" strokeWidth={1.5} />
            {ADDRESS}
          </p>
          <p className="mt-2 text-sm text-foreground/80">
            <a href={PHONE_TEL} className="hover:text-brown">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{f.hours}</p>
        </div>

        <div>
          <p className="label-caps text-brown/70">{f.quick}</p>
          <ul className="mt-4 grid gap-2">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l}`} className="text-sm text-foreground/80 hover:text-brown">
                  {nav[l]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps text-brown/70">{f.contact}</p>
          <iframe
            title={lang === "al" ? "Harta e lokacionit" : "Location map"}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 h-40 w-full rounded-sm border border-brown/20"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-brown/15 px-5 pt-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          © {year} Duralumin Methoxha. {f.rights}
        </p>
      </div>
    </footer>
  );
}
