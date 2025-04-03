
import CardSolution from "../components/cardSolution";
import LabelComponent from "../components/label";
import "../css/containers/solutionSection.css";

const SolutionSection = () => {
	return (
		<section className="container" >
			<div className="solution-section ">
			
			
				<div className="solution-text-section">
					<LabelComponent text={"Soluções"}/>
				
				
					
					<h1>Muito mais funcionalidades e conveniência para o seu negócio!</h1>
					<p>
						Nossa plataforma oferece tudo o que você precisa para otimizar
						processos e alcançar resultados com mais eficiência.
					</p>
				</div>
				<CardSolution />
			</div>
		</section>
	);
};

export default SolutionSection;
