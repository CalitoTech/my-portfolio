import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
  className?: string;
  /** Lightbox mode: no panel chrome, darker scrim. */
  bare?: boolean;
}

// Open dialogs, innermost last: only the top one reacts to Escape and the
// page stays locked until every dialog is closed.
const stack: symbol[] = [];

/**
 * Accessible modal shell rendered in a portal: Escape closes it,
 * focus moves to the close button and the page scroll is locked.
 */
export function Dialog({ open, onClose, label, children, className, bare = false }: DialogProps) {
  const { t } = useTranslation();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const id = Symbol("dialog");
    const main = document.querySelector("main");
    const previouslyFocused = document.activeElement as HTMLElement | null;
    stack.push(id);
    document.body.classList.add("no-scroll");
    main?.classList.add("no-scroll");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && stack[stack.length - 1] === id) onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      stack.splice(stack.indexOf(id), 1);
      if (stack.length === 0) {
        document.body.classList.remove("no-scroll");
        main?.classList.remove("no-scroll");
      }
      previouslyFocused?.focus?.();
    };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        >
          <div
            className={cn("absolute inset-0 backdrop-blur-sm", bare ? "bg-black/90" : "bg-black/75")}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 w-full",
              !bare && "max-h-[90vh] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/60 flex flex-col",
              className
            )}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t("common.close")}
              className={cn(
                "absolute z-20 flex size-11 items-center justify-center rounded-full border border-line bg-canvas/80 text-ink-soft backdrop-blur transition-colors hover:border-line-strong hover:text-ink cursor-pointer",
                bare ? "-top-14 right-0" : "top-4 right-4"
              )}
            >
              <X className="size-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
