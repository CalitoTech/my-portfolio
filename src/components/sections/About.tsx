import { BlurFade } from "@/components/ui/blur-fade";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation, Trans } from "react-i18next";

import myPhoto from "../../assets/my_photo.jpg";

import reactLogo from "../../assets/stack/react-logo.svg";
import nextjsLogo from "../../assets/stack/nextjs-logo.svg";
import tailwindLogo from "../../assets/stack/tailwind-logo.png";
import laravelLogo from "../../assets/stack/laravel-logo.svg";
import odooLogo from "../../assets/stack/odoo-logo.png";
import reactNativeLogo from "../../assets/stack/react-native-logo.svg";
import pythonLogo from "../../assets/stack/python-logo.svg";
import typescriptLogo from "../../assets/stack/typescript-logo.svg";
import javascriptLogo from "../../assets/stack/javascript-logo.svg";
import htmlLogo from "../../assets/stack/html-logo.svg";
import postgresLogo from "../../assets/stack/postgres-logo.png";
import mysqlLogo from "../../assets/stack/mysql-logo.svg";
import phpLogo from "../../assets/stack/php-logo.png";
import n8nLogo from "../../assets/stack/n8n-logo.svg";
import dockerLogo from "../../assets/stack/docker-logo.svg";
import gitLogo from "../../assets/stack/git-logo.svg";
import githubLogo from "../../assets/stack/github-logo.svg";
import bashLogo from "../../assets/stack/bash-logo.svg";
import cpanelLogo from "../../assets/stack/cpanel-logo.svg";
import viteLogo from "../../assets/stack/vite-logo.png";
import owlLogo from "../../assets/stack/owl-logo.png";

const About = () => {
  const { t } = useTranslation();

  const stack = [
    {
      title: t("about.stack.backend"),
      skills: [
        { name: "Python", img: pythonLogo },
        { name: "PostgreSQL", img: postgresLogo },
        { name: "MySQL", img: mysqlLogo },
        { name: "Odoo", img: odooLogo },
        { name: "PHP", img: phpLogo },
        { name: "Laravel", img: laravelLogo },
      ],
    },
    {
      title: t("about.stack.frontend"),
      skills: [
        { name: "React", img: reactLogo },
        { name: "React Native", img: reactNativeLogo },
        { name: "Tailwind", img: tailwindLogo },
        { name: "OWL", img: owlLogo },
        { name: "JavaScript", img: javascriptLogo },
        { name: "HTML5", img: htmlLogo },
      ],
    },
    {
      title: t("about.stack.tools"),
      skills: [
        { name: "n8n", img: n8nLogo },
        { name: "Vite", img: viteLogo },
        { name: "Git", img: gitLogo },
        { name: "GitHub", img: githubLogo },
        { name: "Bash", img: bashLogo },
        { name: "cPanel", img: cpanelLogo },
      ],
    },
    {
      title: t("about.stack.learning"),
      skills: [
        { name: "Docker", img: dockerLogo },
        { name: "TypeScript", img: typescriptLogo },
        { name: "Next.js", img: nextjsLogo },
      ],
    },
  ];

  const stats = [
    { value: "10x", label: t("about.stats.efficiency") },
    { value: "+5k", label: t("about.stats.active_users") },
    { value: "99.9%", label: t("about.stats.uptime") },
    { value: "100%", label: t("about.stats.digitalized") },
  ];

  return (
    <div className="w-full max-w-6xl">
      <SectionHeading
        index="02"
        label={t("about.badge")}
        title={<Trans i18nKey="about.title" components={{ 1: <em /> }} />}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <BlurFade inView delay={0.1} className="lg:col-span-4">
          <figure className="group relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-line bg-surface lg:max-w-none">
            <img
              src={myPhoto}
              alt={t("about.photo_alt")}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-canvas via-canvas/70 to-transparent p-5 pt-16">
              <span>
                <span className="block font-display text-2xl text-ink">Carlos Navas</span>
                <span className="block text-sm text-ink-soft">{t("about.role_title")}</span>
              </span>
              <span className="font-mono text-xs text-brand">VE</span>
            </figcaption>
          </figure>
        </BlurFade>

        <div className="flex flex-col gap-8 lg:col-span-8">
          <BlurFade inView delay={0.15}>
            <p className="font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
              {t("about.bio")}
            </p>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 bg-canvas/90 p-5">
                  <dt className="order-2 text-sm leading-snug text-ink-mute">{s.label}</dt>
                  <dd className="order-1 font-display text-4xl tabular-nums text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </BlurFade>

          <BlurFade inView delay={0.25}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{t("about.stack_title")}</h3>
            <dl className="mt-4 grid gap-x-8 gap-y-5 border-t border-line pt-5 sm:grid-cols-2">
              {stack.map((group) => (
                <div key={group.title}>
                  <dt className="text-sm font-medium text-ink-soft">{group.title}</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface py-1 pr-3 pl-1.5 text-[13px] text-ink transition-colors hover:border-line-strong"
                      >
                        <img src={skill.img} alt="" className="size-5 object-contain" />
                        {skill.name}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default About;
