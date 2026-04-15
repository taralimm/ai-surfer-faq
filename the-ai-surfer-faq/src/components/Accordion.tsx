import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";

interface AccordionItemProps {
  key?: string | number;
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-brand-button shadow-[0_10px_25px_-5px_rgba(0,240,255,0.1)]" : "border-slate-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group transition-all"
        aria-expanded={isOpen}
      >
        <span className="text-[17px] font-semibold text-brand-text">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-slate-300 group-hover:text-brand-button transition-colors"
        >
          <div className={`w-2.5 h-2.5 border-r-2 border-b-2 border-current transition-transform duration-300 ${isOpen ? "-rotate-[135deg] mt-1.5" : "rotate-45"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[15px] text-brand-text/70 leading-relaxed prose prose-slate max-w-none">
              <ReactMarkdown 
                components={{
                  p: ({ children }) => <p className="mb-3 last:mb-0 whitespace-pre-wrap">{children}</p>,
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline break-all">
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => <ul className="list-disc ml-5 mb-3">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal ml-5 mb-3">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  strong: ({ children }) => <strong className="font-bold text-brand-text">{children}</strong>,
                  img: ({ src, alt }) => (
                    <img 
                      src={src} 
                      alt={alt} 
                      className="rounded-xl border border-slate-200 shadow-sm my-4 max-w-full h-auto" 
                      referrerPolicy="no-referrer"
                    />
                  ),
                }}
              >
                {answer}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
