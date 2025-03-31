import ButtonRegister from "../components/buttonRegister";
import CardSecurity from "../components/cardSecurity";
import "../css/sections.css";

const SecuritySection = () => {
    return (
        <section className="security-section">
            <div className="container">
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