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
`;

const CardConteudo = styled.div`
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    text-align: left;
`;

const CardTitulo = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 30px;
`;

const CardTexto = styled.p`
    font-size: 0.8rem;
    margin-bottom: 20px;
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
