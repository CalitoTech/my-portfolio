import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Briefcase,
  User,
  Zap,
  Layers,
  Trophy,
  Languages
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

/**
 * ContactDock Component
 * A premium sidebar navigation hub that expands on hover for desktop,
 * and a sleek floating dock for mobile.
 */
const ContactDock = () => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { id: "home", title: t("contact.nav.home"), icon: <Home className="w-5 h-5" />, href: "#home" },
    { id: "experience", title: t("contact.nav.experience"), icon: <Briefcase className="w-5 h-5" />, href: "#experience" },
    { id: "about", title: t("contact.nav.about"), icon: <User className="w-5 h-5" />, href: "#about" },
    { id: "recognitions", title: t("contact.nav.recognitions"), icon: <Trophy className="w-5 h-5" />, href: "#recognitions" },
    { id: "services", title: t("contact.nav.services"), icon: <Layers className="w-5 h-5" />, href: "#services" },
    { id: "contact", title: t("contact.nav.contact") || "Contacto", icon: <Zap className="w-5 h-5" />, href: "#contact" }
  ];

  return (
    <div className="contents">
      {/* Desktop Dock (Side) */}
      <div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            width: isHovered ? 210 : 64,
            backgroundColor: isHovered ? "rgba(10, 10, 15, 0.98)" : "rgba(3, 6, 11, 0.6)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="flex flex-col bg-[#03060b] border border-white/10 backdrop-blur-3xl px-3 py-6 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/10"
        >
          {/* Navigation Section */}
          <div className="flex flex-col gap-1.5 relative z-10">
            <p className={cn(
              "text-[8px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 px-3 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 invisible"
            )}>
              {t("contact.nav.title") || "Menú"}
            </p>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group relative text-slate-400 hover:text-white hover:bg-white/5"
              >
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap text-slate-300 group-hover:text-white"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            ))}

            {/* Language Switcher Button (Desktop) */}
            <hr className="my-2 border-white/5" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group relative text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 cursor-pointer"
            >
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Languages className="w-5 h-5" />
              </div>
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap"
                  >
                    {i18n.language === 'es' ? 'English' : 'Español'}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Dock (Bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] lg:hidden w-auto max-w-[95vw]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-1 bg-[#03060b]/90 border border-white/10 backdrop-blur-2xl p-2 rounded-[2rem] shadow-2xl ring-1 ring-white/10"
        >
          {navItems.map((item) => (
            <a
              key={`mobile-${item.id}`}
              href={item.href}
              className="flex items-center justify-center p-3 rounded-full text-slate-400 hover:text-white transition-all active:scale-90"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
            </a>
          ))}
          <div className="w-[1px] h-6 bg-white/10 mx-1" />
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-3 rounded-full text-blue-400 hover:text-blue-300 transition-all active:scale-90 cursor-pointer"
          >
            <Languages className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDock;
