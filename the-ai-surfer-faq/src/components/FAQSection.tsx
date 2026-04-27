import { AccordionItem } from "./Accordion";
import { FAQItem } from "../data/faqData";
import { motion } from "motion/react";

interface FAQSectionProps {
  key?: string | number;
  id: string;
  title: string;
  items: FAQItem[];
}

export function FAQSection({ id, title, items }: FAQSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-[800px] mb-10 mx-auto"
    >
      <div className="section-title mb-8 md:mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-text mb-2 block md:hidden">
          {title}
        </h2>
        <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-brand-text/40 font-bold">
          FAQs
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </motion.section>
  );
}
