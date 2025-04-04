import HeroSection from "./containers/heroSection";
import Banner from "./components/banner";
import SolutionSection from "./containers/solutionsSection";
import SecuritySection from "./containers/secutitySection";
import PartnersSection from "./containers/partnersSection";
import FaqSection from "./containers/faqSection";
import AboutSection from "./containers/aboutSection";
import CtaSection from "./containers/ctaSection";
import "./index.css";
import Footer from "./components/footer";


function App() {
	return (
		<>
			<HeroSection />
			<Banner />
			<SolutionSection />
			<SecuritySection />
			<PartnersSection />
			<FaqSection />
			<AboutSection />
			<CtaSection/>
			<Footer/>
		
		</>
	);
}

export default App;
