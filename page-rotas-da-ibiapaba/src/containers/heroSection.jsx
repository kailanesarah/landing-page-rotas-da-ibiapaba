import ButtonRegister from "../components/buttonRegister";
import Header from "../components/header/header";
import "../css/hero-section.css";
import Container from "../containers/containerDefault";

const HeroSection = () => {
	return (
		<section className="hero-section">
			<Header />
			<Container>
				<div className="hero-text-section">
					<h1>Transforme seu negócio com apenas alguns cliques</h1>
					<p>
						Cadastre-se e tenha acesso a um sistema completo que aumenta sua
						visibilidade, agiliza suas vendas e oferece uma experiência única
						para seus clientes.
					</p>
					<ButtonRegister />
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
