import Container from "../containers/containerDefault";
import "../css/components/partnersCard.css";
import investidores from "../assets/img/cards/investidores.jpg";
import LabelComponent from "../components/label";
import ButtonRegister from "../components/buttonRegister";
const PartnersCard = () => {
	return (
		<section className="partners__card">
			<div className="partners__wrapper">
				<div className="partners__image">
					<img
						src={investidores}
						alt="Imagem do card"
						className="image__content"
					/>
				</div>

				<div className="partners__content pb-5 pr-5 pl-5 md:pr-10 md:pl-10">
					<Container>
						<div className="flex flex-col items-center md:items-start">
							<LabelComponent text="Parcerias" />
							<h1 className="partners__title">
								Tenha parceiros por toda a Serra da Ibiapaba
							</h1>
							<p className="partners__description">
								Conecte-se a uma rede sólida de parceiros locais, fortaleça sua
								presença na região e amplie seus resultados. <br/><br/>
								Com nossa
								plataforma segura, moderna e intuitiva, você tem todo o suporte
								necessário para crescer de forma sustentável e eficiente.
								Clique no botão abaixo e confira os parceiros mais próximos de você!
							</p>
						</div>
						<ButtonRegister text="Buscar parceiros" />
					</Container>
				</div>
			</div>
		</section>
	);
};

export default PartnersCard;
