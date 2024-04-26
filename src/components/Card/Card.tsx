// Importando o estilo CSS para o componente Card
import './Card.css'

// Definindo uma interface para tipar as props do componente Card
interface CardProps {
    titulo: string; // Propriedade para o título do card, espera-se uma string
    descricao: string; // Propriedade para a descrição do card, espera-se uma string
}

// Definindo o componente Card, que recebe as props título e descrição
function Card({ titulo, descricao }: CardProps) {
    return (
        // Retornando a estrutura HTML do card
        <div className="card">
            {/* Renderizando o título do card */}
            <h1>{titulo}</h1>
            {/* Renderizando a descrição do card */}
            <p>{descricao}</p>
        </div>
    )
}

// Exportando o componente Card para que ele possa ser utilizado em outros lugares
export default Card
