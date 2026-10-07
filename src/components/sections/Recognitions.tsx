import { useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Dialog } from "@/components/Dialog";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation, Trans } from "react-i18next";
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, Play } from "lucide-react";

import imgClaude from "@/assets/certificates/certificate-claude-code.png";
import pdfClaude from "@/assets/documents/certificate-claude-code.pdf";
import imgAlegrIA from "@/assets/certificates/certificate-agroo-labs.png";
import pdfAlegrIA from "@/assets/documents/certificate-alegria-labs.pdf";
import imgCorpoEureka from "@/assets/certificates/certificate-corpoeureka.png";
import pdfCorpoEureka from "@/assets/documents/certificate-corpoeureka.pdf";
import imgTSU from "@/assets/certificates/certificate-technical-degree.jpg";
import pdfTSU from "@/assets/documents/certificate-technical-degree.pdf";

import alegVideo from "@/assets/hackathons/alegria-2025/video1.mp4";
import alegImg1 from "@/assets/hackathons/alegria-2025/image1.jpeg";
import alegImg2 from "@/assets/hackathons/alegria-2025/image2.jpeg";
import alegImg3 from "@/assets/hackathons/alegria-2025/image3.jpeg";
import alegImg4 from "@/assets/hackathons/alegria-2025/image4.jpeg";
import alegImg5 from "@/assets/hackathons/alegria-2025/image5.jpeg";
import alegImg6 from "@/assets/hackathons/alegria-2025/image6.png";

import corpoImg1 from "@/assets/hackathons/corpoeureka-2025/image1.png";
import corpoImg2 from "@/assets/hackathons/corpoeureka-2025/image2.png";
import corpoImg3 from "@/assets/hackathons/corpoeureka-2025/image3.jpg";

interface Certification {
  name: string;
  description: string;
  origin: string;
  image: string;
  fileUrl: string;
  photos?: string[];
}

const corpoPhotos = [corpoImg1, corpoImg2, corpoImg3];

/** Horizontal, snap-scrolling strip of thumbnails with prev/next buttons. */
const Gallery = ({ images, label, onOpen }: { images: string[]; label: string; onOpen: (src: string) => void }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{label}</span>
        <div className="flex gap-1.5">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scroll(dir)}
              aria-label={dir === -1 ? t("common.previous") : t("common.next")}
              className="flex size-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink cursor-pointer"
            >
              {dir === -1 ? <ChevronLeft className="size-4" /> : <ChevronRight className="size-4" />}
            </button>
          ))}
        </div>
      </div>
      <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(src)}
            aria-label={`${t("common.enlarge")} ${i + 1}`}
            className="group relative aspect-[4/3] w-28 shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-raised cursor-zoom-in"
          >
            <img src={src} alt="" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Recognitions = () => {
  const { t } = useTranslation();
  const [zoomed, setZoomed] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);

  const certifications: Certification[] = (["tsu", "claude", "alegria", "corpoeureka"] as const).map((key) => ({
    name: t(`recognitions.certs.items.${key}.name`),
    description: t(`recognitions.certs.items.${key}.description`),
    origin: t(`recognitions.certs.items.${key}.origin`),
    ...{
      tsu: { image: imgTSU, fileUrl: pdfTSU },
      claude: { image: imgClaude, fileUrl: pdfClaude },
      alegria: { image: imgAlegrIA, fileUrl: pdfAlegrIA },
      corpoeureka: { image: imgCorpoEureka, fileUrl: pdfCorpoEureka, photos: corpoPhotos },
    }[key],
  }));

  return (
    <div className="w-full max-w-6xl">
      <SectionHeading
        index="03"
        label={t("recognitions.badge")}
        title={<Trans i18nKey="recognitions.title" components={{ 1: <em /> }} />}
      />

      <BlurFade inView delay={0.1}>
        <article className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative block aspect-video w-full overflow-hidden bg-raised lg:aspect-auto lg:h-full cursor-pointer"
            aria-label={`${t("recognitions.hackathons.items.alegria.name")} — video`}
          >
            <video
              src={`${alegVideo}#t=5`}
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-brand text-brand-ink shadow-xl shadow-black/40 transition-transform group-hover:scale-110">
                <Play className="ml-1 size-6 fill-current" />
              </span>
            </span>
            <span className="absolute top-4 left-4 rounded-full bg-canvas/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-brand backdrop-blur">
              {t("recognitions.hackathons.items.alegria.badge")}
            </span>
          </button>

          <div className="flex flex-col gap-4 p-6 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold text-ink">{t("recognitions.hackathons.items.alegria.name")}</h3>
              <span className="font-display text-3xl text-brand">{t("recognitions.hackathons.items.alegria.stats")}</span>
            </div>
            <p className="leading-relaxed text-ink-soft">{t("recognitions.hackathons.items.alegria.description")}</p>
            <div className="mt-auto">
              <Gallery
                images={[alegImg1, alegImg2, alegImg3, alegImg4, alegImg5, alegImg6]}
                label={t("recognitions.gallery")}
                onOpen={setZoomed}
              />
            </div>
          </div>
        </article>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{t("recognitions.certs.title")}</h3>
          <p className="text-sm text-ink-mute">{t("recognitions.certs.description")}</p>
        </div>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.name} className="group relative flex gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong">
              <span className="h-12 w-16 shrink-0 overflow-hidden rounded-md border border-line bg-raised">
                <img src={cert.image} alt="" loading="lazy" className="size-full object-cover object-top" />
              </span>
              <span className="min-w-0 flex-1">
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold leading-snug text-ink transition-colors after:absolute after:inset-0 after:rounded-xl group-hover:text-brand"
                >
                  {cert.name}
                  <span className="sr-only"> — {t("recognitions.view_certificate")}</span>
                </a>
                <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{cert.origin}</span>
                <span className="mt-1 line-clamp-2 block text-sm leading-snug text-ink-soft">{cert.description}</span>
                {cert.photos && (
                  <button
                    type="button"
                    onClick={() => setPhotosOpen(true)}
                    className="relative z-10 mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-brand cursor-pointer"
                  >
                    <Images className="size-3.5" /> {t("recognitions.photos")} ({cert.photos.length})
                  </button>
                )}
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-ink-mute transition-colors group-hover:text-brand" />
            </li>
          ))}
        </ul>
      </BlurFade>

      <Dialog
        open={photosOpen}
        onClose={() => setPhotosOpen(false)}
        label={t("recognitions.hackathons.items.corpoeureka.name")}
        className="max-w-3xl"
      >
        <div className="overflow-y-auto p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-brand">{t("recognitions.hackathons.items.corpoeureka.badge")}</p>
          <h3 className="mt-1 pr-12 text-2xl font-semibold text-ink">{t("recognitions.hackathons.items.corpoeureka.name")}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{t("recognitions.hackathons.items.corpoeureka.description")}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {corpoPhotos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setZoomed(src)}
                aria-label={`${t("common.enlarge")} ${i + 1}`}
                className="aspect-[4/3] overflow-hidden rounded-lg border border-line bg-raised cursor-zoom-in"
              >
                <img src={src} alt="" loading="lazy" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Dialog>

      <Dialog open={videoOpen} onClose={() => setVideoOpen(false)} label={t("recognitions.hackathons.items.alegria.name")} bare className="max-w-5xl">
        <video src={alegVideo} controls autoPlay playsInline className="aspect-video w-full rounded-xl bg-black" />
      </Dialog>

      <Dialog open={zoomed !== null} onClose={() => setZoomed(null)} label={t("common.enlarge")} bare className="max-w-6xl">
        {zoomed && <img src={zoomed} alt="" className="max-h-[85vh] w-full rounded-xl object-contain" />}
      </Dialog>
    </div>
  );
};

export default Recognitions;
