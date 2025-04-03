import ButtonRegister from "../components/buttonRegister";
import CardSecurity from "../components/cardSecurity";
import LabelComponent from "../components/label";
import "../css/containers/securitySection.css";

const SecuritySection = () => {
	return (
		<section className="container security-section">
			<div className="security-content-section">
				<div className="text">
					<LabelComponent text={"Segurança"} />
					<h1>
						Segurança é a sua prioridade.
						<br /> E a nossa também!
					</h1>
					<ButtonRegister />
				</div>
				<CardSecurity />
			</div>
		</section>
	);
};

export default SecuritySection;
