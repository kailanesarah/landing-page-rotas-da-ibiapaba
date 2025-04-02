import "../css/containers/valuesSection.css";

const ValuesSection = () => {
	return (
		<section className="values-section">
			<div className="container values">
				<div className="text-section hidden:boder-r-1 md:border-r-1 border-( --brand-gray-default)">
					<h4>Visão</h4>
					<p>
						Ser a plataforma líder que conecta turistas e estabelecimentos da
						Serra, oferecendo soluções inovadoras que impulsionem o comércio
						local e proporcionem experiências únicas e acessíveis para todos.
					</p>
				</div>


				<div className="text-section">
					<h4>Missão</h4>
					<p>
						Buscamos fortalecer a economia local, promover a visibilidade dos
						pequenos negócios e garantir a conveniência e satisfação de nossos
						clientes em cada visita.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ValuesSection;
