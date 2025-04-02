import LabelComponent from "../components/label";
import "../css/containers/partnersSection.css";
const PartnersSection = () => {
  return (
    <section className="container partners-section">
     
        <div className="partners-content-section">
          <div className="partners-map-section">
            <iframe
              className="map"
              title="Parceiros mais próximos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.45767176256!2d-46.63881882776089!3d-23.55052056735758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597e2a7c9c81%3A0x8cddbbf625b58ee7!2sSão%20Paulo%2C%20SP!5e0!3m2!1sen!2sbr!4v1615197425242!5m2!1sen!2sbr"
              style={{ border: 0 }}
              aria-hidden="false"
            />
          </div>

          <div className="partners-text">

            <LabelComponent text={"Parceiros"} />
            <h1>Encontre os parceiros mais próximos de você!</h1>
            <p>
              Conecte-se com parceiros estratégicos ao seu redor para expandir
              seus negócios, fazer novas parcerias e aproveitar oportunidades
              locais. Com nossa plataforma, você pode descobrir empresas e
              profissionais próximos que compartilham os mesmos interesses e
              objetivos, facilitando a colaboração e o crescimento mútuo.
            </p>
          </div>
        </div>
   
    </section>
  );
};

export default PartnersSection;
