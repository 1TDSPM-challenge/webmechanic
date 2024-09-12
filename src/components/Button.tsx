import styled from "styled-components";

const BotaoBase = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
`;

interface ButtonProps {
    tipo: number;
}

export const Button = styled(BotaoBase)<ButtonProps>`
    background-color: ${(props) =>
        props.tipo === 1 ? "#255C99" :
        props.tipo === 2 ? "#D8E4FF" :
        "#262626"};
    color: ${(props) =>
        props.tipo === 1 ? "#D8E4FF" :
        props.tipo === 2 ? "#255C99" :
        "#D8E4FF"};

    &:hover {
        background-color: ${(props) =>
            props.tipo === 1 ? "#234377" :
            props.tipo === 2 ? "#84a2e6" :
            "#111111"};
    }
`;

export const ButtonSaibaMais = styled(BotaoBase)`
    background-color: #255C99;
    color: white;
    padding: 0.6rem 3rem;
    font-size: 1.2rem;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #1B4C7A;
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    &::after {
        content: "→";
        font-size: 1.5rem;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translateX(15px);
    }
`;