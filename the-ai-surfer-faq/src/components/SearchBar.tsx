import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { faqData } from "../data/faqData";
import { AccordionItem } from "./Accordion";
import { motion, AnimatePresence } from "motion/react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const results: { question: string; answer: string; section: string }[] = [];
    const lowerQuery = query.toLowerCase();

    faqData.forEach((section) => {
      section.items.forEach((item) => {
        if (
          item.question.toLowerCase().includes(lowerQuery) ||
          item.answer.toLowerCase().includes(lowerQuery)
        ) {
          results.push({
            ...item,
            section: section.title,
          });
        }
      });
    });

    return results;
  }, [query]);

  return (
    <div className="w-full max-w-[600px] mx-auto mb-12">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className={`w-4 h-4 transition-colors ${query ? 'text-brand-button' : 'text-slate-400 group-focus-within:text-brand-button'}`} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for keywords (e.g. 'billing', 'remixer', 'wax')..."
          className="w-full pl-11 pr-11 py-3 bg-white border-2 border-slate-100 rounded-xl text-brand-text placeholder:text-slate-400 focus:outline-none focus:border-brand-button focus:ring-4 focus:ring-brand-button/5 transition-all shadow-sm text-base"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-brand-text transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm uppercase tracking-widest text-brand-text/50 font-bold">
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length > 0 && (
                <span className="text-xs text-slate-400 italic">
                  Showing results across all sections
                </span>
              )}
            </div>

            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-4">
                {searchResults.map((result, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -top-3 left-6 z-10 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#f48ab7] to-[#d46a97] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {result.section}
                    </div>
                    <AccordionItem
                      question={result.question}
                      answer={result.answer}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white border-2 border-dashed border-slate-100 rounded-2xl">
                <p className="text-slate-400">No results found for "{query}"</p>
                <p className="text-xs text-slate-300 mt-2">Try different keywords or browse the categories below</p>
              </div>
            )}
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h2 className="text-sm uppercase tracking-widest text-brand-text/50 font-bold mb-4 text-center">
                Browse by Category
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
