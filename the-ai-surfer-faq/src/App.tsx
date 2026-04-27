import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FAQSection } from "./components/FAQSection";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { faqData } from "./data/faqData";

function FAQPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = faqData.find((s) => s.id === sectionId);

  if (!section) {
    return <Navigate to={`/faq/${faqData[0].id}`} replace />;
  }

  return (
    <FAQSection
      id={section.id}
      title={section.title}
      items={section.items}
    />
  );
}

export default function App() {
  const navItems = faqData.map((section) => ({
    id: section.id,
    label: section.title,
  }));

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
        <Hero />
        
        <main className="px-6 md:px-[60px] py-10 md:py-20 max-w-7xl mx-auto">
          <SearchBar />
          <Navbar items={navItems} />
          
          <div className="mt-12">
            <Routes>
              <Route path="/faq/:sectionId" element={<FAQPage />} />
              <Route path="/" element={<Navigate to={`/faq/${faqData[0].id}`} replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
