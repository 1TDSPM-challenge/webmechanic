import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import Linha from '../components/Linha';

interface Sinistro {
    id: number;
    descricao: string;
    data: string;
}

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Titulo = styled.h1`
    font-size: 2.5rem;
    color: #D8E4FF;
    text-align: center;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-size: 1.2rem;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`;

const ListaSinistros = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const SinistroItem = styled.li`
    padding: 15px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #255C99;
`;

const DataSinistro = styled.span`
    display: block;
    font-size: 0.9rem;
    color: #999;
    margin-top: 5px;
`;

const Sinistros = () => {
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [sinistros, setSinistros] = useState<Sinistro[]>([]);

    const registrarSinistro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const novoSinistro: Sinistro = {
            id: sinistros.length + 1,
            descricao: descricao,
            data: data
        };

        setSinistros([...sinistros, novoSinistro]);
        setDescricao('');
        setData('');
    };

    return (
        <Container>
            <Titulo>Registro de Sinistros</Titulo>
            <Formulario onSubmit={registrarSinistro}>
                <Label htmlFor="descricao">Descrição do Sinistro</Label>
                <Input
                    id="descricao"
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva o sinistro"
                    required
                />

                <Label htmlFor="data">Data do Sinistro</Label>
                <Input
                    id="data"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />

                <Button tipo={1} type="submit">Registrar Sinistro</Button>
            </Formulario>

            <Linha />

            <Titulo>Sinistros Registrados</Titulo>
            <ListaSinistros>
                {sinistros.length === 0 ? (
                <p>Nenhum sinistro registrado até o momento.</p>
                ) : (
                sinistros.map((sinistro) => (
                    <SinistroItem key={sinistro.id}>
                    {sinistro.descricao}
                    <DataSinistro>{sinistro.data}</DataSinistro>
                    </SinistroItem>
                ))
                )}
            </ListaSinistros>
        </Container>
    );
};

export default Sinistros;