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
      <div className="section-title text-sm uppercase tracking-widest text-brand-text/50 font-bold mb-6 text-center">
        {title} FAQs
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </motion.section>
  );
}
