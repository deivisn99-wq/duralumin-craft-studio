import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { content, PHONE_TEL, type Lang } from "@/lib/content";

const sections = ["home", "about", "why", "services", "process", "quote"] as const;

export function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = content[lang].nav;
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-brown/10 bg-beige/90 backdrop-blur-md transition-all duration-300",
        condensed ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-sm bg-brown font-display text-primary-foreground transition-all duration-300",
              condensed ? "h-8 w-8 text-sm" : "h-10 w-10 text-base",
            )}
          >
            D
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display leading-tight text-brown transition-all duration-300",
                condensed ? "text-base" : "text-lg",
              )}
            >
              Duralumin Methoxha
            </span>
            <span className="hidden label-caps text-muted-foreground sm:block">
              Punime Duralumini
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-5">
          <nav className="hidden items-center gap-6 lg:flex">
            {sections.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-brown"
              >
                {t[key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center rounded-sm border border-brown/25 text-[0.7rem] font-semibold tracking-widest">
            {(["al", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "px-2 py-1 uppercase transition-colors",
                  lang === l ? "bg-brown text-primary-foreground" : "text-brown/70 hover:text-brown",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-sm bg-brown px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-brown-deep sm:inline-flex md:hover:scale-[1.02] md:hover:shadow-lift"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {t.call}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.menu}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-brown/25 text-brown lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mt-3 grid gap-1 border-t border-brown/10 pt-3 lg:hidden">
          {sections.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-2.5 text-sm font-medium text-foreground/85 hover:bg-beige-deep"
            >
              {t[key]}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="mt-1 inline-flex items-center gap-2 rounded-sm bg-brown px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> {t.call}
          </a>
        </nav>
      )}
    </header>
  );
}
