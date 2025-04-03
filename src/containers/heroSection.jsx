import ButtonRegister from "../components/buttonRegister";
import Header from "../components/header/header";
import "../css/containers/heroSections.css";
import bannerHero from "../assets/img/bannerHero.png";
import LabelComponent from "../components/label";


const HeroSection = () => {
	return (
		<section className="container bg-cover bg-center"  
		style={{ backgroundImage: `url(${bannerHero})` }}>
			<div className="hero-section">
			<Header />
				<div className="hero-text-section">
					<LabelComponent text="Em breve!"/>
					<h1>Transforme seu negócio com apenas alguns cliques</h1>
					<p>
						Cadastre-se e tenha acesso a um sistema completo que aumenta sua
						visibilidade, agiliza suas vendas e oferece uma experiência única
						para seus clientes.
					</p>
					<ButtonRegister />

					
				</div>

			</div>
			
		</section>
	);
};

export default HeroSection;
