import styled from "styled-components";
import { Button } from "./Button";

const CardContainer = styled.div`
    background-color: #D8E4FF;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* padding: 20px; */
    width: 300px;
    height: 400px;
    text-align: center;
    margin: 20px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-10px);
    }
`;

const TituloCard = styled.h3`
    font-size: 1.5rem;
    color: #255C99;
    margin-bottom: 10px;
`;

const TextoCard = styled.p`
    color: #333;
`;

const ImgCard = styled.img`
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

type CardProps = {
    titulo: string;
    texto: string;
    img?: string;
    textobtn?: string;
};

const Card = ({ titulo, texto, img, textobtn }: CardProps) => {
    const temImagem = Boolean(img);

    return (
        <CardContainer>
            {temImagem && <ImgCard src={img} alt={titulo} />}
            <TituloCard>{titulo}</TituloCard>
            <TextoCard>{texto}</TextoCard>
            {textobtn && <Button tipo={1}>{textobtn}</Button>}
        </CardContainer>
    );
};

export default Card;
