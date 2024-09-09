import styled from "styled-components";

interface ButtonProps {
    tipo: number;
}

export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background-color: ${(props) =>
        props.tipo === 1 ? "#255C99" : 
        props.tipo === 2 ? "#D8E4FF" : 
        "#262626"};
    color: ${(props) =>
        props.tipo === 1 ? "#D8E4FF" : 
        props.tipo === 2 ? "#255C99" : 
        "#D8E4FF"};
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
        background-color: ${(props) =>
            props.tipo === 1 ? "#234377" : 
            props.tipo === 2 ? "#84a2e6" : 
            "#111111"};
    }
`

