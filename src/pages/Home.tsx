import styled from "styled-components";
import { Link } from "react-router-dom";

import { ButtonSaibaMais } from "../components/Button";
import Linha from "../components/Linha";
import Card from "../components/Card";
import Cartao from "../components/Cartao";
import Contato from "../components/Contato";

import ImgCard1 from "../assets/card1.jpg";
import ImgCard2 from "../assets/card2.jpg";
import ImgCard3 from "../assets/card3.png";
import ImgBanner from '../assets/banner.jpg';

const BannerContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${ImgBanner});
    background-size: cover;
    background-position: center;
    padding-top: 200px;

    @media (max-width: 900px) {
        height: 80vh;
    }

    @media (max-width: 600px) {
        height: 60vh;
    }
`;

const TextoImagemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    font-weight: bold;
    text-align: left;
    line-height: 0.8;
    font-size: 10vw;
    letter-spacing: 3px;
    font-family: "Bebas Neue", sans-serif;

    @media (max-width: 900px) {
        padding: 30px;
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

const BtnContainer = styled.div`
    margin-top: 20px;

    @media (max-width: 900px) {
        margin-top: 15px;
    };

    @media (max-width: 600px) {
        margin-top: 10px;
    };
`;

const Container = styled.section`
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

    @media (max-width: 900px) {
        font-size: 5vw;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`;

const Home = () => {
    return (
        <>
            <BannerContainer>
                <TextoImagemContainer>
                    <TextoPrincipal>CONHEÇA NOSSOS</TextoPrincipal>
                    <TextoSecundario>PLANOS DE SEGURO</TextoSecundario>
                </TextoImagemContainer>
                    <BtnContainer>
                        <Link to="/seguros">
                            <ButtonSaibaMais>Saiba Mais</ButtonSaibaMais>
                        </Link>
                    </BtnContainer>
            </BannerContainer>
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
            <Cartao />
            <Linha />
            <Container>
                <TituloSecao>Precisa de ajuda? Entre em contato conosco!</TituloSecao>
                <Contato />
            </Container>
        </>
    );
};

export default Home;
