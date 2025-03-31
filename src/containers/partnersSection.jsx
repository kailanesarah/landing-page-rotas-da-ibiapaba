import "../css/sections.css";
import Image from "../assets/img/cta.png";
const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-content-section">
          <img
            src={Image}
            alt=""
            className="partners-img"
          />

          <div className="partners-text">
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
      </div>
    </section>
  );
};

export default PartnersSection;
