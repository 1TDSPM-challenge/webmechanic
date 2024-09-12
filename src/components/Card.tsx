import styled from "styled-components";
import { Button } from "./Button";

const CardContainer = styled.div<{ temImagem: boolean; cor?: string; sombra?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ temImagem }) => (temImagem ? "flex-start" : "center")};
    background-color: #D8E4FF;
    border-radius: 10px;
    box-shadow: 0 8px 20px ${({ sombra }) => sombra || 'rgba(0, 0, 0, 0.1)'};
    padding: ${({ temImagem }) => (temImagem ? "0" : "20px")};
    width: 300px;
    height: 400px;
    text-align: center;
    margin: 20px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px ${({ sombra }) => sombra || 'rgba(0, 0, 0, 0.1)'};
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: ${({ cor }) => cor || "transparent"};
        border-radius: 10px 10px 0 0;
    }
`;

const TituloCard = styled.h3`
    font-size: 1.5rem;
    color: #255C99;
    margin-bottom: 10px;
`;

const TextoCard = styled.p`
    color: #333;
`;

const ImgCard = styled.img`
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

const ButtonCard = styled(Button)`
    margin-top: 30%;
`;

type CardProps = {
    titulo: string;
    texto: string;
    img?: string;
    textobtn?: string;
    tipoplano?: "ouro" | "prata" | "bronze" | "comum";
};

const Card = ({ titulo, texto, img, textobtn, tipoplano }: CardProps) => {
    const temImagem = Boolean(img);
    
    const corPlano = {
        ouro: "linear-gradient(90deg, #FCD53F, #FFA500)",
        prata: "linear-gradient(90deg, #b1b1b1, #d8d8d8)",
        bronze: "linear-gradient(90deg, #5c4006, #a97142)",
        comum: "linear-gradient(90deg, #F2F2F2, #D9D9D9)",
    };

    const sombraPlano = {
        ouro: "rgba(252, 214, 63, 0.753)",
        prata: "rgba(242, 242, 242, 0.5)",
        bronze: "rgba(92, 64, 6, 0.5)",
        comum: "rgba(0,0,0,0.1)"
    };

    const cor = tipoplano ? corPlano[tipoplano] : undefined;
    const sombra = tipoplano ? sombraPlano[tipoplano] : undefined;

    return (
        <CardContainer temImagem={temImagem} cor={cor} sombra={sombra}>
            {temImagem && <ImgCard src={img} alt={titulo} />}
            <TituloCard>{titulo}</TituloCard>
            <TextoCard>{texto}</TextoCard>
            {textobtn && <ButtonCard tipo={1}>{textobtn}</ButtonCard>}
        </CardContainer>
    );
};

export default Card;
