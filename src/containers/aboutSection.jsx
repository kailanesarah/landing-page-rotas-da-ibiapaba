import "../css/components/partnersCard.css";
import PartnersCard from "../components/partnersCard";
import funcionarios from "../assets/img/cards/investidores.jpg";

const AboutSection = () => {
	const content = `Nossa plataforma oferece as ferramentas essenciais para gerenciar seu negócio de forma eficiente. 

Missão: impulsionar o crescimento de negócios locais com soluções tecnológicas acessíveis e seguras. 

Visão: conectar estabelecimentos e consumidores, promovendo inovação e resultados.
`;

	return (
		<section className="about__section py-10" id="about">
			<PartnersCard
				img={funcionarios}
				title="Somos a plataforma ideal para fazer seu negócio decolar."
				description={content.split("\n").map((line, index) => (
					<span key={index}>
					  {line}
					  <br />
					</span>
				  ))}
				label="Sobre nós"
				className=" flex flex-row-reverse"
			/>
		</section>
	);
};

export default AboutSection;
