import { motion, AnimatePresence } from "motion/react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

/**
 * Premium Language Switcher
 * Placed at the top-right of the screen for global accessibility.
 */
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    // Track scroll to change appearance
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        const currentLang = i18n.resolvedLanguage || i18n.language;
        const newLang = currentLang?.startsWith('es') ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const isSpanish = (i18n.resolvedLanguage || i18n.language)?.startsWith('es');

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-6 right-6 z-[100]"
        >
            <button
                onClick={toggleLanguage}
                className={`
                    group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl 
                    border border-white/10 backdrop-blur-xl transition-all duration-500
                    hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                    ${scrolled ? 'bg-[#03060b]/80 shadow-2xl' : 'bg-white/5'}
                    cursor-pointer overflow-hidden
                `}
            >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex items-center justify-center">
                    <Languages className="w-4 h-4 text-blue-400 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" />
                </div>

                <div className="relative flex items-center gap-2 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={isSpanish ? 'es' : 'en'}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-white"
                        >
                            {isSpanish ? 'ES' : 'EN'}
                        </motion.span>
                    </AnimatePresence>

                    <div className="h-3 w-[1px] bg-white/10" />

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/60 group-hover:text-blue-400 transition-colors">
                        {isSpanish ? 'EN' : 'ES'}
                    </span>
                </div>

                {/* Interaction Ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-blue-500/20 transition-all duration-500" />
            </button>
        </motion.div>
    );
};

export default LanguageSwitcher;
