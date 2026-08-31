import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { content, PHONE_TEL, type Lang } from "@/lib/content";

const links = ["about", "why", "services", "process", "quote"] as const;

export function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = content[lang].nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = ["home", ...links].findLast((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 140;
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="relative z-10 shrink-0 font-display text-lg leading-tight sm:text-xl"
        >
          Duralumin Methoxha
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <a href="#home" className={cn("nav-link", active === "home" && "nav-link-active")}>
              {t.home}
            </a>
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
              "flex rounded-full border p-0.5 text-[10px] font-bold tracking-widest",
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
                  "rounded-full px-2 py-1 uppercase",
                  lang === l ? "bg-brown text-beige" : scrolled ? "text-brown/70" : "text-beige/80",
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-full bg-brown px-4 py-2.5 text-sm font-semibold text-beige transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="size-4" />
            {t.quote}
          </a>
          <button
            type="button"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "relative z-10 grid size-10 place-items-center rounded-full border lg:hidden",
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
          aria-label="Mobile navigation"
        >
          {["home", ...links].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-beige-deep"
            >
              {t[key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
