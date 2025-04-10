import AboutSection from "./containers/aboutSection";
import HeroSection from "./containers/heroSection";
import PartnersSection from "./components/partnersCard";
import SecuritySection from "./containers/secutitySection";
import SolutionSection from "./containers/solutionsSection";

import "./index.css";
import FaqSection from "./containers/faqSection";
import Footer from "./components/footer";
import CtaSection from "./containers/ctaSection";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <SecuritySection />
      <PartnersSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
