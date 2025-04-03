import { useState } from "react";
import "../css/components/faq.css";
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
	const contentFaq = [
		{
			pergunta: "Como funciona o totem de acesso?",
			resposta:
				"O totem permite que você compre produtos serranos, como tickets e souvenirs,\n" +
				"diretamente em estabelecimentos parceiros, trazendo mais comodidade e agilidade\n" +
				"para sua experiência.",
		},
		{
			pergunta: "Preciso estar no estabelecimento para comprar?",
			resposta:
				"Não necessariamente! Você pode adquirir produtos de qualquer parceiro que tenha\n" +
				"o totem, otimizando seu tempo e facilitando suas compras.",
		},
		{
			pergunta: "Quais tipos de produtos posso encontrar?",
			resposta:
				"Nossa solução inclui uma variedade de produtos serranos, como ingressos para\n" +
				"atrações, artesanato, souvenirs e outras opções típicas da região.",
		},
		{
			pergunta: "Como sei quais estabelecimentos possuem o totem?",
			resposta:
				"No site, você encontra uma lista de todos os parceiros que possuem o totem\n" +
				"de acesso.",
		},
		{
			pergunta: "Posso pagar com cartão ou PIX?",
			resposta:
				"Sim! Os totens aceitam diversos meios de pagamento, incluindo cartão de crédito,\n" +
				"débito e PIX, para garantir mais praticidade.",
		},
		{
			pergunta: "Sou dono de um estabelecimento. Como posso participar?",
			resposta: "É simples! É só fazer seu cadastro pelo nosso site.",
		},
		{
			pergunta: "Como funciona a integração dos produtos no totem?",
			resposta:
				"Você cadastra seus produtos na plataforma, e eles ficam disponíveis automaticamente\n" +
				"nos totens dos estabelecimentos parceiros.",
		},
		{
			pergunta: "Quem define os preços dos produtos?",
			resposta:
				"O próprio estabelecimento define os preços dos seus produtos, garantindo controle\n" +
				"total sobre suas vendas.",
		},
		{
			pergunta: "Como recebo o pagamento das vendas realizadas pelo totem?",
			resposta:
				"Os pagamentos são repassados diretamente para sua conta cadastrada dentro do\n" +
				"prazo estabelecido no contrato.",
		},
		{
			pergunta:
				"Posso escolher quais estabelecimentos parceiros venderão meus produtos?",
			resposta:
				"Sim! Você pode definir em quais locais seus produtos estarão disponíveis,\n" +
				"criando parcerias estratégicas para o seu negócio.",
		},
		{
			pergunta:
				"Se eu tiver problemas técnicos com o totem, como posso obter suporte?",
			resposta:
				"Nossa equipe de suporte está disponível para ajudar sempre que necessário.\n" +
				"Você pode entrar em contato pelo site ou por nossos canais de atendimento.",
		},
	];

	const [openQuestion, setOpenQuestion] = useState(null);

	const toggleAnswer = (index) => {
		setOpenQuestion(openQuestion === index ? null : index);
	};

	return (
		<div className="faq">
			{contentFaq.map((object, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div className="faq-item" key={index}>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div className="question" onClick={() => toggleAnswer(index)}>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<h5 >{object.pergunta}</h5>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<ChevronDown className="text-(--brand-green-default)"/>

					</div>
					<div className="answer">
						{openQuestion === index && <p>{object.resposta}</p>}

					</div>

				</div>
			))}
		</div>
	);
};

export default FAQ;
