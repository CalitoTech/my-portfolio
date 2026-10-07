import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const SECTIONS = ["home", "experience", "about", "recognitions", "services", "contact"] as const;

/**
 * Global header: wordmark, section links with scroll-spy, language toggle
 * and contact CTA. On small screens the links move into a full-screen menu.
 */
const Header = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lang = (i18n.resolvedLanguage || i18n.language || "es").startsWith("es") ? "es" : "en";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll-spy: the section crossing the middle of the viewport is active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // The page scrolls on <main> (desktop snap) or on window (mobile).
  useEffect(() => {
    const main = document.querySelector("main");
    const onScroll = () => setScrolled((main?.scrollTop ?? 0) > 24 || window.scrollY > 24);
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const toggleLanguage = () => i18n.changeLanguage(lang === "es" ? "en" : "es");

  const links = SECTIONS.filter((id) => id !== "home" && id !== "contact").map((id) => ({
    id,
    label: t(`nav.${id}`),
  }));

  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink"
      >
        {t("nav.skip")}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
          scrolled || menuOpen
            ? "border-b border-line bg-canvas/80 backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <div className="px-5 md:px-8">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          <a href="#home" className="group flex items-baseline gap-1.5" onClick={() => setMenuOpen(false)}>
            <span className="font-display text-2xl leading-none text-ink">Carlos Navas</span>
            <span className="size-1.5 rounded-full bg-brand transition-transform group-hover:scale-150" aria-hidden="true" />
          </a>

          <nav aria-label={t("nav.menu")} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active === link.id ? "text-ink" : "text-ink-mute hover:text-ink"
                    )}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-raised ring-1 ring-line"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t("nav.language")}
              className="flex h-10 items-center gap-1.5 rounded-full border border-line px-3.5 font-mono text-xs tracking-wider transition-colors hover:border-line-strong cursor-pointer"
            >
              <span className={lang === "es" ? "text-ink" : "text-ink-mute"}>ES</span>
              <span className="text-line-strong" aria-hidden="true">/</span>
              <span className={lang === "en" ? "text-ink" : "text-ink-mute"}>EN</span>
            </button>

            <a
              href="#contact"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-brand px-4 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-px sm:flex"
            >
              {t("nav.cta")}
              <ArrowUpRight className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t("nav.close_menu") : t("nav.open_menu")}
              className="flex size-10 items-center justify-center rounded-full border border-line text-ink lg:hidden cursor-pointer"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label={t("nav.menu")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-canvas/95 px-5 pt-24 pb-10 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-brand">0{i}</span>
                    <span className={cn("font-display text-4xl", active === id ? "text-ink" : "text-ink-soft")}>
                      {t(id === "home" ? "nav.start" : `nav.${id}`)}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
