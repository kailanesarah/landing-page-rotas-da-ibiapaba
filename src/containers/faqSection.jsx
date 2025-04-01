import ButtonRegister from "../components/buttonRegister";
import FAQ from "../components/faq";
import "../css/containers/faqSection.css";
const FaqSection = () => {
	return (
		<section className="container">
			<div className="faq-section ">
			<div className="faq-text-section">
				<h1>Dúvidas frequentes</h1>
				<p>
					Dúvidas sobre como nossa plataforma pode beneficiar você? Aqui,
					respondemos às dúvidas mais comuns para que você entenda como podemos
					transformar seus processos e ajudar a alcançar resultados mais rápidos
					e eficazes.
				</p>
			</div>

			<FAQ />
			<ButtonRegister/>

			</div>
			
		</section>
	);
};

export default FaqSection;
