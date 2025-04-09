import "../css/containers/ctaSection.css";
import ButtonRegister from "../components/buttonRegister";
import Image from "../assets/img/cards/funcionario2.jpg";
import LabelComponent from "../components/label";
import Form from "../components/header/form";
import Container from "./containerDefault";

const CtaSection = () => {
	return (
		<section
			className="cta-section"
			style={{ backgroundImage: `url(${Image})` }}
		>
			<div className="cta-overlay"> </div>
			<Container>
				<div className="cta-wrapper">
					<div className="cta-text">
						<LabelComponent text="Entre em contato" />
						<h1 className="cta-title">
							Transforme seu negócio com apenas alguns cliques!
						</h1>
					</div>

					<div className="cta-form">
						<Form />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CtaSection;
