import styled from "styled-components";
import ImgBanner from '../assets/banner.jpg';
import { ButtonSaibaMais } from "../components/Button";

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
    padding: 5vh 10vw;
    text-align: center;
    width: 100%;
`;

const TituloSecao = styled.h2`
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: 5vh;
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
            </Container>
        </>
    );
};

export default Home;
