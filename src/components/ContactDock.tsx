import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Briefcase,
  User,
  Zap,
  Layers,
  Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ContactDock Component
 * A premium sidebar navigation hub that expands on hover.
 */
const ContactDock = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { id: "home", title: "Inicio", icon: <Home className="w-5 h-5" />, href: "#home", color: "text-blue-400", bgColor: "group-hover:bg-blue-500/10" },
    { id: "experience", title: "Experiencia", icon: <Briefcase className="w-5 h-5" />, href: "#experience", color: "text-purple-400", bgColor: "group-hover:bg-purple-500/10" },
    { id: "about", title: "Sobre Mí", icon: <User className="w-5 h-5" />, href: "#about", color: "text-emerald-400", bgColor: "group-hover:bg-emerald-500/10" },
    { id: "recognitions", title: "Reconocimientos", icon: <Trophy className="w-5 h-5" />, href: "#recognitions", color: "text-amber-500", bgColor: "group-hover:bg-amber-500/10" },
    { id: "services", title: "Servicios", icon: <Layers className="w-5 h-5" />, href: "#services", color: "text-blue-500", bgColor: "group-hover:bg-blue-500/10" },
    { id: "contact", title: "Contacto", icon: <Zap className="w-5 h-5" />, href: "#contact", color: "text-amber-400", bgColor: "group-hover:bg-amber-500/10" }
  ];

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          width: isHovered ? 210 : 64,
          backgroundColor: isHovered ? "rgba(10, 10, 15, 0.95)" : "rgba(3, 6, 11, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col bg-[#03060b] border border-white/10 backdrop-blur-3xl px-3 py-6 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5 relative overflow-hidden ring-1 ring-white/10"
      >
        {/* Glow Effect on Hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent pointer-events-none"
        />

        {/* Navigation Section */}
        <div className="flex flex-col gap-1.5 relative z-10">
          <p className={cn(
            "text-[8px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 px-3 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0 invisible"
          )}>
            Menú
          </p>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group relative",
                item.color,
                item.bgColor
              )}
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
        </div>
      </motion.div>
    </div>
  );
};

export default ContactDock;