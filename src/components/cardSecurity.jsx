import { Lightbulb } from 'lucide-react';
import "../css/components/cardSecurity.css";
const CardSecurity = () => {
    const contentCard = [
        {
            id: 1,
            title: "Notificações em tempo real",
            description:
                "Acompanhe todas as movimentações instantaneamente" +
                "pedidos realizados, resgatados, reembolsados e valores recebidos," +
                " diretamente no seu celular. Tudo ao vivo, para você não perder nenhum detalhe",
        },
        {
            id: 2,
            title: "Acesso protegido",
            description:
                "Com autenticação de dois fatores ou senha, garantimos uma " +
                "camada extra de segurança para o acesso ao nosso site, mantendo seus dados" +
                "e informações protegidos",
        },
        {
            id: 3,
            title: "Manutenção do totem",
            description:
                "Nosso totem é projetado para garantir o melhor desempenho, mas" +
                " caso precise de manutenção, nossa equipe de suporte está disponível para " +
                "realizar ajustes rápidos.",
        },
    ];
    return (
        <div className="card-security-container">
            {contentCard.map((object) => (
                <div key={object.id} className="card-security">
                    <Lightbulb color="#ffffff"/>
                    
                    <div className="content-security">
                        <h4>{object.title}</h4>
                        <p>{object.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardSecurity;
