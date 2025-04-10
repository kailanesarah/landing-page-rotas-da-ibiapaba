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
            <p>
              Sabemos que a confiança é construída com base na proteção dos seus
              dados e da sua tranquilidade. Por isso, desenvolvemos cada solução
              com foco em segurança desde o primeiro clique até a última linha
              de código.
            </p>
          </div>
          <CardSecurity />
        </div>
      </Container>
    </section>
  );
};

export default SecuritySection;
