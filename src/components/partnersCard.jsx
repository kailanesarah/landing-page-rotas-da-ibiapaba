import Container from "../containers/containerDefault";
import "../css/components/partnersCard.css";
import LabelComponent from "../components/label";

const PartnersCard = ({ img, title, description, label, className }) => {
  return (
    <section className="partners__card" id="partners">
      <div className={`partners__wrapper ${className}`}>
        <div className="partners__image">
          <img
            src={img}
            alt="Imagem do card"
            className="image__content"
          />
        </div>

        <div className="partners__content">
          <Container>
            <div className="pr-5 pl-5 md:pr-10 md:pl-10 flex flex-col items-center md:items-start">
              <LabelComponent text={label} />
              <h1 className="partners__title">
                {title}
              </h1>
              <p className="partners__description mb-4">
                {description}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default PartnersCard;
