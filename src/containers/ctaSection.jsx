import ButtonRegister from "../components/buttonRegister";
import Image from "../assets/img/cta.png";
import "../css/containers/ctaSection.css";
import LabelComponent from "../components/label";

const CtaSection = () => {
    return (
        <section className="cta-section container" style={{ background: `url(${Image})` }}>
          
                <div className="cta-text-section">
                    <LabelComponent text="Entre em contato" />
                    <h1>Transforme  seu negócio com apenas alguns cliques!</h1>
                    <ButtonRegister />
                </div>
            
        </section>
    );
};

export default CtaSection;
