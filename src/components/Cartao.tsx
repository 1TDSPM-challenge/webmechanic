import styled from "styled-components";
import { Button } from "./Button";
import ImgCartao from "../assets/banner-card.jpg";

const CardContainer = styled.div`
    background-image: url(${ImgCartao});
    background-size: cover;
    background-position: center;
    border-radius: 45px;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 2438 / 1066;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media (max-width: 768px) {
        border-radius: 30px;
        max-width: 100%;
        aspect-ratio: 16 / 9;
    }

    @media (max-width: 480px) {
        border-radius: 20px;
        aspect-ratio: 16 / 10;
    }
`;

const CardConteudo = styled.div`
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    text-align: left;
    color: white;

    @media (max-width: 768px) {
        left: 20px;
    }

    @media (max-width: 480px) {
        left: 15px;
    }
`;

const CardTitulo = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: white;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        margin-bottom: 15px;
    }
`;

const CardTexto = styled.p`
    font-size: 0.8rem;
    margin-bottom: 20px;
    color: white;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
        margin-bottom: 10px;
    }
`;

const Cartao = () => {
    return (
        <CardContainer>
            <CardConteudo>
                <CardTitulo>Ganhe 20% de<br />desconto com o Cartão<br />WMCard</CardTitulo>
                <CardTexto>Pagando com Cartão de Crédito Porto Bank, você tem desconto<br />de 20% na contratação de qualquer serviço. E ainda pode<br />parcelar em até 10x sem juros!</CardTexto>
                <Button tipo={2}>Peça o seu cartão</Button>
            </CardConteudo>
        </CardContainer>
    );
};

export default Cartao;
