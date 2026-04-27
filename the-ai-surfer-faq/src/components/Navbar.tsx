import { motion } from "motion/react";
import { NavLink, useLocation } from "react-router-dom";
import { faqData } from "../data/faqData";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const location = useLocation();
  const firstId = faqData[0]?.id;

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-slate-200 py-4 md:py-6 -mx-6 md:-mx-[60px] px-6 md:px-[60px]">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-text/40 font-bold mb-3 md:hidden text-center">
          Tap to switch category
        </p>
        <div className="flex overflow-x-auto md:flex-wrap gap-2 pb-2 md:pb-0 scrollbar-hide justify-start md:justify-center">
          {items.map((item) => {
            const isHomeDefault = location.pathname === "/" && item.id === firstId;
            
            return (
              <NavLink
                key={item.id}
                to={`/faq/${item.id}`}
                className={({ isActive }) => {
                  const actuallyActive = isActive || isHomeDefault;
                  return `whitespace-nowrap px-4 md:px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all border flex-shrink-0 ${
                    actuallyActive 
                      ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-brand-main/20 scale-105" 
                      : "bg-white text-brand-text border-slate-200 hover:border-brand-button"
                  }`;
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  {item.label}
                </motion.span>
              </NavLink>
            );
          })}
          {/* Spacer for horizontal scroll on mobile */}
          <div className="w-6 flex-shrink-0 md:hidden" />
        </div>
      </div>
    </nav>
  );
}
