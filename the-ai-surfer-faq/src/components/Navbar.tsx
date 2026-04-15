import { motion } from "motion/react";
import { NavLink, Link } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-slate-200 py-6 px-[60px]">
      <div className="max-w-[800px] flex flex-wrap gap-4 items-center justify-center mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={`/faq/${item.id}`}
              className={({ isActive }) => 
                `px-5 py-2 rounded-lg text-sm font-semibold transition-all border ${
                  isActive 
                    ? "bg-brand-gradient text-white border-transparent shadow-md" 
                    : "bg-white text-brand-text border-slate-200 hover:border-brand-button"
                }`
              }
            >
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                {item.label}
              </motion.span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
