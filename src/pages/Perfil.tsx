import styled from 'styled-components';
import {Button} from '../components/Button';
import Linha from '../components/Linha';
import { Link } from 'react-router-dom';

const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f5f5f5;
    width: 100%;
    height: 100vh;
    padding: 20px;
`;

const InfoContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 1200px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h1`
    font-size: 32px;
    color: #333;
    margin-bottom: 10px;
`;

const Info = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 5px;
`;

const ApoContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ApoInfo = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
`;

const BotaoContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const Perfil = () => {
  return (
    <PerfilContainer>
        <InfoContainer>
            <Titulo>Informações do Usuário</Titulo>
            <Info>Nome: João da Silva</Info>
            <Info>Email: joao.silva@email.com</Info>
            <Info>Telefone: (11) 99999-9999</Info>
            <BotaoContainer>
                <Button tipo={1}>Atualizar informações</Button>
            </BotaoContainer>
        </InfoContainer>

        <Linha />
        
        <ApoContainer>
            <Titulo>Sua Apólice</Titulo>
            <ApoInfo>Número da Apólice: 123456789</ApoInfo>
            <ApoInfo>Data de Início: 01/01/2024</ApoInfo>
            <ApoInfo>Data de Expiração: 01/01/2025</ApoInfo>
            <BotaoContainer>
                <Link to="/apolice">
                    <Button tipo={1}>Ver mais</Button>
                </Link>
            </BotaoContainer>
        </ApoContainer>
    </PerfilContainer>
  );
};

export default Perfil;
