import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { FAQSection } from "./components/FAQSection";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { faqData } from "./data/faqData";

function ScrollHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If we're at the very top (Hero section), reset the URL to /
      if (window.scrollY < 100 && location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, location.pathname]);

  return null;
}

function FAQPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  // Default to first section if no ID (at root path)
  const activeId = sectionId || faqData[0].id;
  const section = faqData.find((s) => s.id === activeId);

  if (!section) {
    return <Navigate to="/" replace />;
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
      <ScrollHandler />
      <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
        <Hero />
        
        <main id="main-content" className="px-6 md:px-[60px] py-10 md:py-20 max-w-7xl mx-auto">
          <SearchBar />
          <Navbar items={navItems} />
          
          <div className="mt-12">
            <Routes>
              <Route path="/faq/:sectionId" element={<FAQPage />} />
              <Route path="/:sectionId" element={<FAQPage />} />
              <Route path="/" element={<FAQPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
