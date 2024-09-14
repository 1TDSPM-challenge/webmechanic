import styled from "styled-components";

import { Button } from "../components/Button";
import Linha from "../components/Linha";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

const Titulo = styled.h1`
    font-size: 2.5rem;
    color: #D8E4FF;
`;

const SubTitulo = styled.h2`
    font-size: 1.8rem;
    color: #262626;
    margin: 20px 0;
`;

const Texto = styled.p`
    font-size: 1.2rem;
    margin: 10px 0;
`;

const ListaCoberturas = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
`;

const CoberturaItem = styled.li`
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-size: 1rem;
    text-align: left;
    color: #255C99;
`;

interface ApoliceDetalhes {
    numero: string;
    validade: string;
    valor: string;
    coberturas: string[];
}

const Apolice = () => {
    const apolice: ApoliceDetalhes = {
        numero: "AP123456789",
        validade: "30/12/2025",
        valor: "R$ 2.500,00",
        coberturas: [
            "Cobertura contra incêndio",
            "Cobertura contra roubo e furto",
            "Cobertura para danos elétricos",
            "Assistência 24 horas",
            "Cobertura para desastres naturais",
            "Cobertura para danos acidentais",
            "Cobertura para danos de transporte",
            "Cobertura para danos comerciais",
            "Cobertura para danos industriais",
            "Cobertura para danos de construção",
        ]
    };

    return (
        <Container>
            <Titulo>Detalhes da Apólice</Titulo>
            
            <SubTitulo>Informações Gerais</SubTitulo>
            <Texto><strong>Número da Apólice:</strong> {apolice.numero}</Texto>
            <Texto><strong>Validade:</strong> {apolice.validade}</Texto>
            <Texto><strong>Valor Total:</strong> {apolice.valor}</Texto>

            <Linha />

            <SubTitulo>Coberturas Incluídas</SubTitulo>
            <ListaCoberturas>
            {apolice.coberturas.map((cobertura, index) => (
                <CoberturaItem key={index}>{cobertura}</CoberturaItem>
            ))}
            </ListaCoberturas>

            <Linha />

            <Button tipo={1} onClick={() => alert("Entre em contato para mais detalhes.")}>
                Contatar Suporte
            </Button>
        </Container>
    );
};

export default Apolice;