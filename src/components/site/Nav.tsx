import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { content, type Lang } from "@/lib/content";

const links = ["about", "why", "services", "projects", "process"] as const;

export function Nav({
  lang,
  setLang,
  onQuote,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  onQuote: () => void;
}) {
  const t = (content[lang] ?? content.al).nav;
  const common = (content[lang] ?? content.al).common;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids: string[] = ["home", ...links];
      const current = [...ids].reverse().find((id: string) => {
        const el = document.getElementById(id);
        return !!el && el.getBoundingClientRect().top <= 140;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-brown/10 bg-beige/75 text-brown backdrop-blur-[16px]"
          : "border-transparent bg-transparent text-beige",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4 lg:px-8">
        <a
          href="#home"
          className="relative z-10 flex min-w-0 items-center gap-2 overflow-hidden font-display text-sm leading-tight sm:gap-2.5 sm:text-lg"
        >
          <img
            src="/favicon-192.png"
            alt=""
            width="40"
            height="40"
            className="size-9 shrink-0 sm:size-10"
          />
          <span className="truncate">Duralumin Met’hoxha</span>
        </a>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-7 lg:flex" aria-label={common.primaryNavigation}>
            {links.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className={cn("nav-link", active === key && "nav-link-active")}
              >
                {t[key]}
              </a>
            ))}
          </nav>
          <div
            className={cn(
              "flex rounded-full border p-0.5 text-[9px] font-bold tracking-widest transition-transform duration-200 ease-out hover:scale-105 sm:text-[10px]",
              scrolled ? "border-brown/25" : "border-beige/50",
            )}
          >
            {(["al", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-1.5 py-0.5 uppercase sm:px-2 sm:py-1",
                  lang === l ? "bg-brown text-beige" : scrolled ? "text-brown/70" : "text-beige/80",
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onQuote}
            className="hidden items-center gap-2 rounded-full bg-brown px-4 py-2.5 text-sm font-semibold text-beige transition-transform duration-200 ease-out hover:scale-105 sm:inline-flex"
          >
            <Phone className="size-4" />
            {t.quote}
          </button>
          <button
            type="button"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "relative z-10 grid size-9 place-items-center rounded-full border sm:size-10 lg:hidden",
              scrolled ? "border-brown/25 text-brown" : "border-beige/50 text-beige",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="absolute inset-x-0 top-full grid gap-1 border-t border-brown/10 bg-beige px-5 pb-5 pt-3 text-brown shadow-lg lg:hidden"
          aria-label={common.mobileNavigation}
        >
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-beige-deep"
            >
              {t[key]}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onQuote();
            }}
            className="mt-2 rounded-xl bg-brown px-3 py-3 text-left text-sm font-semibold text-beige"
          >
            {t.quote}
          </button>
        </nav>
      )}
    </header>
  );
}
