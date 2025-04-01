import ButtonRegister from "../components/buttonRegister";
import CardSecurity from "../components/cardSecurity";
import "../css/containers/securitySection.css";

const SecuritySection = () => {
    return (
        <section className="container">
            <div className="security-section">
            <div className="security-content-section">
                <div className="text">
                    <h1>Segurança é a sua prioridade.<br /> E a nossa também!</h1>
                    <ButtonRegister />
                </div>
                <CardSecurity />

            </div>

            </div>

           
        </section>
    );
}

export default SecuritySection;