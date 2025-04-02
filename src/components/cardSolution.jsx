import parceria from "../assets/img/parceria.webp";
import rendimentos from "../assets/img/rendimentos.webp";
import acesso from "../assets/img/acesso.webp";
import seguranca from "../assets/img/seguranca.webp";
import comissoes from "../assets/img/comissoes.webp";
import tablet from "../assets/img/dashboard.webp";

import "../css/components/cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSolution = () => {
	const contentCard = [
		{
			id: 1,
			image: rendimentos,
			title:
				"Receba seus rendimentos diretamente na sua conta de forma prática",
			description:
				"Você pode resgatar seus ganhos a qualquer momento e transferi-los diretamente" +
				" para a conta de sua escolha, com total conveniência e agilidade.",
		},
		{
			id: 2,
			image: parceria,
			title: "Feche parcerias flexíveis com qualquer estabelecimento",
			description:
				"Adicione facilmente novos parceiros à sua rede e amplie " + 
				"suas oportunidades de negócios.",
		},
		{
			id: 3,
			image: tablet,
			title: "Visão completa do seu negócio",
			description:
				"Acompanhe de forma fácil e intuitiva, por meio de um dashboard interativo,"+
				" sua receita, parceiros ativos, vendas e o histórico de tickets do seu estabelecimento.",
		},
		{
			id: 4,
			image: comissoes,
			title: "Ganhe comissões",
			description:
				"A cada produto de parceiros vendido em seu estabelecimento você ganha comissões, "
				+"ampliando suas fontes de receita enquanto oferece uma experiência única e diversificada aos seus clientes.",
		},
		{
			id: 5,
			image: seguranca,
			title: "Segurança garantida",
			description:
				"Suas transações e dados são protegidos com" + 
				"tecnologia de ponta para total confiança.",
		},
		{
			id: 6,
			image: acesso,
			title: "Acesso em tempo real",
			description:
				"Visualize todos os status dos tickets e "+
				"performance de vendas do seu negócio.",
		},
	];

	return (
		<div className="card-solution">
			<Swiper
				spaceBetween={8}
				slidesPerView={3}
				direction="horizontal"
				freeMode={true}
				breakpoints={{
					300: {
						slidesPerView: 1,
						direction: "horizontal",
						freeMode: true,
					},

					768: {
						slidesPerView: 3,
						direction: "horizontal",
					},
				}}
			>
				{contentCard.map((objects) => (
					<SwiperSlide key={objects.id}>
						<div className="card">
							{objects.id % 2 === 0 ? (
								<div className="p-3 bg-(--brand-green-dark) rounded-2xl gap-2">
									<img src={objects.image} alt="" className="w-full h-64 object-cover " />
									<div className="content-solution">
										<h4 className="text-white">{objects.title}</h4>
										<p className="text-white">{objects.description}</p>
									</div>
								</div>
							) : (
								<div className=" p-3 bg-(--brand-green-lemon-light) rounded-2xl gap-2">
									<div className="content-solution">
										<h4 className="text-(--brand-green-dark)">
											{objects.title}
										</h4>
										<p className="text-(--brand-green-dark)">
											{objects.description}
										</p>
									</div>
									<img src={objects.image} alt="" className="w-full h-64 object-cover object-center " />
								</div>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CardSolution;
