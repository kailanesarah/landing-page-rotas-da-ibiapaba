import LabelComponent from "../components/label";
import video_img from ".././assets/img/cards/video_img.svg";
import "../css/containers/aboutSection.css";
import Container from "./containerDefault";

const AboutSection = () => {
	return (
		<section className="about">
			<Container>
			<div className="about__content">
                <LabelComponent text="Sobre a solução"/>
				<div className="about__text">
					<h1>
						Simples, rápido e eficiente!<br/> Veja o Rotas da Ibiapaba em ação.
					</h1>
					<p>
						Veja como nossa plataforma funciona na prática e ajuda
						estabelecimentos da serra a vender mais e ganhar visibilidade de
						forma simples e rápida.
					</p>
				</div>

                <img src={video_img} alt="about_img" />
			</div>
			</Container>
		</section>
	);
};

export default AboutSection;
