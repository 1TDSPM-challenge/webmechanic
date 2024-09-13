import React, { useState } from 'react';
import styled from 'styled-components';

import img1 from "../assets/plano1.jpg";
import img2 from "../assets/plano2.jpg";
import img3 from "../assets/plano3.jpg";
import img4 from "../assets/plano4.jpg";

import { Button } from '../components/Button';

const planos = [
    {
        id: 1,
        imagem: img1,
        nome: 'Plano Comum',
        preco: 'R$ 1.200,00 por ano',
        caracteristicas: [
            { texto: 'Cobertura básica', ativo: true },
            { texto: 'Atendimento rápido e eficiente', ativo: true },
            { texto: 'Assistência 24 horas', ativo: false },
            { texto: 'Proteção de terceiros', ativo: false }
        ]
    },
    {
        id: 2,
        imagem: img2,
        nome: 'Plano Bronze',
        preco: 'R$ 1.400,00 por ano',
        caracteristicas: [
            { texto: 'Cobertura básica', ativo: true },
            { texto: 'Atendimento rápido e eficiente', ativo: true },
            { texto: 'Assistência 24 horas', ativo: false },
            { texto: 'Proteção de terceiros', ativo: false }
        ]
    },
    {
        id: 3,
        imagem: img3,
        nome: 'Plano Prata',
        preco: 'R$ 1.800,00 por ano',
        caracteristicas: [
            { texto: 'Cobertura básica', ativo: true },
            { texto: 'Atendimento rápido e eficiente', ativo: true },
            { texto: 'Assistência 24 horas', ativo: true },
            { texto: 'Proteção de terceiros', ativo: false }
        ]
    },
    {
        id: 4,
        imagem: img4,
        nome: 'Plano Ouro',
        preco: 'R$ 2.300,00 por ano',
        caracteristicas: [
            { texto: 'Cobertura básica', ativo: true },
            { texto: 'Atendimento rápido e eficiente', ativo: true },
            { texto: 'Assistência 24 horas', ativo: true },
            { texto: 'Proteção de terceiros', ativo: true }
        ]
    }
];

const CarrosselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
`;

const CarrosselImagem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CarrosselSeta = styled.button<{ esquerda?: boolean }>`
    position: absolute;
    top: 50%;
    ${({ esquerda }) => (esquerda ? 'left: 10px;' : 'right: 10px;')}
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    z-index: 1;

    i {
        font-size: 2rem;
    }
`;

const CarrosselDetalhes = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TituloPlano = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const PrecoPlano = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`;

const ListaCaracteristicas = styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 0;
`;

const CaracteristicaItem = styled.li<{ ativo: boolean }>`
    font-size: 16px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    color: ${({ ativo }) => (ativo ? 'green' : 'red')};

    i {
        margin-right: 8px;
    }
`;

const Seguros: React.FC = () => {
    const [planoAtual, setPlanoAtual] = useState(0);

    const proximoPlano = () => {
        setPlanoAtual((prev) => (prev + 1) % planos.length);
    };

    const planoAnterior = () => {
        setPlanoAtual((prev) => (prev - 1 + planos.length) % planos.length);
    };

    return (
        <CarrosselContainer>
            <CarrosselImagem>
                <CarrosselSeta esquerda onClick={planoAnterior}>
                    <i className="fi fi-rr-angle-left"></i>
                </CarrosselSeta>
                <Imagem src={planos[planoAtual].imagem} alt={planos[planoAtual].nome} />
                <CarrosselSeta onClick={proximoPlano}>
                    <i className="fi fi-rr-angle-right"></i>
                </CarrosselSeta>
            </CarrosselImagem>

            <CarrosselDetalhes>
                <TituloPlano>{planos[planoAtual].nome}</TituloPlano>
                <PrecoPlano>{planos[planoAtual].preco}</PrecoPlano>

                <ListaCaracteristicas>
                    {planos[planoAtual].caracteristicas.map((caracteristica, index) => (
                        <CaracteristicaItem key={index} ativo={caracteristica.ativo}>
                            {caracteristica.ativo ? (
                                <i className="fi fi-br-check"></i>
                            ) : (
                                <i className="fi fi-br-cross"></i>
                            )}
                            {caracteristica.texto}
                        </CaracteristicaItem>
                    ))}
                </ListaCaracteristicas>

                <Button tipo={1}>Adquirir</Button>
            </CarrosselDetalhes>
        </CarrosselContainer>
    );
};

export default Seguros;
