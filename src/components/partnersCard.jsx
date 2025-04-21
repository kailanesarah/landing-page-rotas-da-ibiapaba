import Container from "../containers/containerDefault";
import "../css/components/partnersCard.css";
import investidores from "../assets/img/cards/investidores.jpg";
import LabelComponent from "../components/label";
import ButtonRegister from "../components/buttonRegister";
const PartnersCard = () => {
  return (
    <section className="partners__card" id="partners">
      <div className="partners__wrapper">
        <div className="partners__image">
          <img
            src={investidores}
            alt="Imagem do card"
            className="image__content"
          />
        </div>

        <div className="partners__content ">
          <Container>
            <div className="pr-5 pl-5 md:pr-20 md:pl-20 flex flex-col items-center md:items-start">
              <LabelComponent text="Parcerias" />
              <h1 className="partners__title">
                Tenha parceiros por toda a Serra da Ibiapaba
              </h1>
              <p className="partners__description mb-4">
                Conecte-se a uma rede sólida de parceiros locais, fortaleça sua
                presença na região e amplie seus resultados. <br />
                <br />
                Com nossa plataforma segura, moderna e intuitiva, você tem todo
                o suporte necessário para crescer de forma sustentável e
                eficiente. Clique no botão abaixo e confira os parceiros mais
                próximos de você!
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default PartnersCard;
