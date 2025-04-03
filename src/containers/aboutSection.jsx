import fotoTeam from "../assets/img/fotoTeam.png";
import fotoTeamAll from "../assets/img/fotoTeamAll.png";
import LabelComponent from "../components/label";
import "../css/containers/aboutSection.css";
import ValuesSection from "./valuesSection";

const AboutSection = () => {
	return (
		<>
			<section className="about-section ">
				<div className="about container">
					<div className="about-text-section">
						<LabelComponent text="Sobre nós"/>
						<h1>Somos a NexTech!</h1>
						<p>
							Rotas da Ibiapaba é uma solução desenvolvida pela empresa NexTech.
							Nosso principal objetivo é proporcionar uma experiência completa,
							ágil e sem complicação para turistas e estabelecimentos. <br />
							<br />
							Para os turistas, oferecemos a oportunidade de consumir produtos
							típicos da Serra (como ingressos, souvenirs e muito mais) em
							qualquer estabelecimento parceiro que tenha o totem de acesso,
							garantindo praticidade e agilidade em suas visitas. <br />
							<br />
							Para os estabelecimentos, nossa solução permite que os
							proprietários vendam seus produtos em uma rede de parceiros,
							impulsionando as vendas e oferecendo mais agilidade no processo.
						</p>
					</div>

					<div className="about-photos-section">
						<img src={fotoTeam} alt="foto-equipe-nexTech" />
						<img src={fotoTeamAll} alt="foto-equipe-nexTech" />
					</div>
				</div>
			</section>
			<ValuesSection />
		</>
	);
};

export default AboutSection;
