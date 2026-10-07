import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useTranslation, Trans } from "react-i18next";
import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, MessageCircle } from "lucide-react";

const EMAIL = "carlosdanielnavas26@gmail.com";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/CalitoTech", Icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/carlos-navas04", Icon: Linkedin },
  ];

  const links = ["experience", "about", "recognitions", "services"] as const;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col justify-between pt-28 pb-10">
      <div className="my-auto">
        <BlurFade inView delay={0.05}>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
            <span className="text-brand">05</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            <span>{t("contact.eyebrow")}</span>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.1}>
          <h2 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-[8.5rem]">
            <Trans i18nKey="contact.cta" components={{ 1: <em className="italic text-brand" /> }} />
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{t("contact.lead")}</p>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
            <a
              href="https://wa.me/584146411020"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-8 text-base font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" />
              {t("contact.whatsapp")}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex h-14 items-center gap-1 rounded-full border border-line-strong bg-canvas/60 pr-1.5 pl-5">
              <a href={`mailto:${EMAIL}`} className="truncate text-sm font-medium text-ink hover:text-brand md:text-base">
                <span className="sr-only">{t("contact.email_label")}: </span>
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? t("contact.copied") : t("contact.copy")}
                className="ml-2 flex size-11 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-raised hover:text-ink cursor-pointer"
              >
                {copied ? <Check className="size-4 text-brand" /> : <Copy className="size-4" />}
              </button>
              <span className="sr-only" aria-live="polite">{copied ? t("contact.copied") : ""}</span>
            </div>

            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-14 items-center justify-center rounded-full border border-line-strong text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>

      <footer className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-sm text-ink-mute md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {t("contact.footer.title")}</p>
        <nav aria-label={t("nav.menu")} className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-ink">
              {t(`contact.nav.${id}`)}
            </a>
          ))}
          <a href="#home" className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-ink">
            {t("contact.back_top")} <ArrowUp className="size-3.5" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Contact;
