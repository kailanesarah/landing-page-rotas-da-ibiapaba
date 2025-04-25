import Container from "../containers/containerDefault";
import "../css/components/partnersCard.css";
import LabelComponent from "../components/label";

const PartnersCard = ({ img, label }) => {
	return (
		<section className="partners__card" id="partners">
			<div className="partners__wrapper">
				<div className="partners__image">
					<img src={img} alt="Imagem do card" className="image__content" />
				</div>

				<div className="partners__content">
					<Container>
						<div className="pr-5 pl-5 md:pr-10 md:pl-10 flex flex-col items-center md:items-start">
							<LabelComponent text={label} />
							<h1 className="partners__title">
								Nossa plataforma oferece as ferramentas essenciais para
								gerenciar seu negócio de forma eficiente.
							</h1>
							<p className="partners__description">
								<strong className="font-bold">Missão:</strong> impulsionar o
								crescimento de negócios locais com soluções tecnológicas
								acessíveis e seguras.
							</p>
							<p className="partners__description">
								<strong className="font-bold">Visão:</strong> conectar
								estabelecimentos e consumidores, promovendo inovação e
								resultados.
							</p>
							<ul className="partners__description list-disc list-inside">
								<span>Nossos valores</span>
								<li>Compromisso com o cliente</li>
								<li>Acessibilidade e inclusão</li>
								<li>Segurança e Confiabilidade</li>
								<li>Inovação com Propósito</li>
							</ul>
						</div>
					</Container>
				</div>
			</div>
		</section>
	);
};

export default PartnersCard;
