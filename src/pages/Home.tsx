import styled from "styled-components";

import ImgBanner from '../assets/banner.jpg';
import { ButtonSaibaMais } from "../components/Button";
import Linha from "../components/Linha";
import Card from "../components/Card";
import ImgCard1 from "../assets/card1.jpg"
import ImgCard2 from "../assets/card2.jpg"
import ImgCard3 from "../assets/card3.png"

const Banner = styled.img`
    width: 100vw;
    height: auto;
`;

const TextoImagemContainer = styled.div`
    position: absolute;
    top: 50vh;
    left: 5vw;
    color: white;
    font-weight: bold;
    line-height: 1;
    font-size: 10vw;
    letter-spacing: 3px;
    font-family: "Bebas Neue", sans-serif;

    @media (max-width: 900px) {
        top: 36vh;
    };

    @media (max-width: 600px) {
        top: 30vh;
    };

    @media (max-width: 400px) {
        top: 25vh;
    };
`;

const TextoPrincipal = styled.p`
    margin: 0;
    color: white;
`;

const TextoSecundario = styled.p`
    margin: 0;
    color: #255C99;
`;

// mexer na responsividade depois
const BtnContainer = styled.div`
    position: absolute;
    top: 82vh;
    right: 5vw;

    @media (max-width: 900px) {
        top: 50vh;
    };

    @media (max-width: 600px) {
        top: 30vh;
    };

    @media (max-width: 400px) {
        top: 25vh;
    };
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    padding: 5vh;
    text-align: center;
    width: 100%;
`;

const TituloSecao = styled.h2`
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: 5vh;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    justify-content: center;
`;

const Home = () => {
    return (
        <>
            <Banner src={ImgBanner} alt="Banner" />
            <TextoImagemContainer>
                <TextoPrincipal>CONHEÇA NOSSOS</TextoPrincipal>
                <TextoSecundario>PLANOS DE SEGURO</TextoSecundario>
            </TextoImagemContainer>
            <BtnContainer>
                <ButtonSaibaMais>Saiba Mais</ButtonSaibaMais>
            </BtnContainer>
            <Container>
                <TituloSecao>Por que contratar a WebMechanic?</TituloSecao>
                <p>Aqui nós pensamos 100% nos clientes, trazendo diversos<br />
                    benefícios e um atendimento especial. Se liga nos nossos<br />
                    serviços:</p>
                <CardsContainer>
                    <Card titulo="Pague tipo assinatura" texto="Sem juros e renovação automática." img={ImgCard1} />
                    <Card titulo="Você decide. Você escolhe." texto="Escolha os serviços que mais lhe convêm." img={ImgCard2} />
                    <Card titulo="Simples de usar e direto com você." texto="Controle seus planos facilmente no celular." img={ImgCard3} />
                </CardsContainer>
            </Container>
            <Linha />
            <Container>
                <TituloSecao>Principais Planos</TituloSecao>
                <CardsContainer>
                    <Card
                        titulo="Plano Comum" 
                        texto=" Ideal para quem busca proteção essencial do carro com um custo acessível e coberturas básicas para o dia a dia." 
                        textobtn="Saiba Mais" 
                        tipoplano="comum"
                    />
                    <Card
                        titulo="Plano Bronze" 
                        texto="Oferecendo coberturas essenciais com alguns benefícios extras, ideal para quem quer mais segurança sem aumentar muito os custos." 
                        textobtn="Saiba Mais"
                        tipoplano="bronze"
                    />
                    <Card 
                        titulo="Plano Prata" 
                        texto="Com coberturas ampliadas, incluindo assistência a terceiros mais completa e benefícios adicionais, perfeito para quem busca mais tranquilidade no dia a dia." 
                        textobtn="Saiba Mais"
                        tipoplano="prata"
                    />
                    <Card
                        titulo="Plano Ouro"
                        texto="Oferecendo cobertura total, assistência premium 24 horas, proteção ampliada para terceiros e benefícios exclusivos, ideal para quem quer o máximo de segurança e conveniência." 
                        textobtn="Saiba Mais"
                        tipoplano="ouro" />
                </CardsContainer>
            </Container>
            <Linha />
        </>
    );
};

export default Home;
