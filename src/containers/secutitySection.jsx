import ButtonRegister from "../components/buttonRegister";
import CardSecurity from "../components/cardSecurity";
import LabelComponent from "../components/label";
import "../css/containers/securitySection.css";
import Container from "./containerDefault";

const SecuritySection = () => {
	return (
		<section className="security">
			<Container>
			<div className="security__content">
				<div className="security__text">
					<LabelComponent text={"Segurança"} />
					<h1>
						Segurança é a sua prioridade.
						<br /> E a nossa também!
					</h1>
				</div>
				<CardSecurity />
			</div>
			</Container>
		</section>
	);
};

export default SecuritySection;
