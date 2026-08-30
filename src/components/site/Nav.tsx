import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { content, PHONE_TEL, type Lang } from "@/lib/content";

const links = ["services", "why", "process", "quote"] as const;

export function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = content[lang].nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 border-b border-brown/10 bg-beige/95 transition-all duration-300",
        scrolled && "backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="shrink-0 font-display text-lg leading-tight text-brown sm:text-xl"
        >
          Duralumin Methoxha
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm font-medium text-foreground/75 hover:text-brown"
              >
                {t[key]}
              </a>
            ))}
          </nav>
          <div className="flex rounded-full border border-brown/25 p-0.5 text-[10px] font-bold tracking-widest">
            {(["al", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-2 py-1 uppercase",
                  lang === l ? "bg-brown text-beige" : "text-brown/70",
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-full bg-brown px-4 py-2.5 text-sm font-semibold text-beige hover:bg-brown-deep sm:inline-flex"
          >
            <Phone className="size-4" />
            Kërko Ofertë
          </a>
          <button
            type="button"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full border border-brown/25 text-brown lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-brown/10 px-5 pb-5 pt-3 lg:hidden">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground/80 hover:bg-beige-deep"
            >
              {t[key]}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-brown/10 pt-4">
            <span className="label-caps text-brown/60">Gjuha</span>
            {(["al", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className="rounded-full border border-brown/25 px-3 py-1 text-xs uppercase"
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
