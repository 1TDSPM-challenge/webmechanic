import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonSaibaMais } from "../components/Button";

const ContatoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: dashed 1px #D8E4FF;
    padding: 60px;

    h3 {
        margin-bottom: 30px;
        font-size: 1.5rem;
    }

    p {
        line-height: 40px;
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
`;

const Contato = () => {
    return (
        <ContatoContainer>
            <h3>Nossos contatos:</h3>
            <p>
                <strong>E-mail:</strong> webmechanic@hotmail.com<br />
                <strong>Whatsapp:</strong> (11) 985619925<br />
                <strong>Telefone:</strong> 2254-9080<br />
                <strong>Repositório Github:</strong> https://github.com/1TDSPM-challenge/webmechanic
            </p>
            <Link to="/contato">
                <ButtonSaibaMais>Fale Conosco</ButtonSaibaMais>
            </Link>
        </ContatoContainer>
    );
};

export default Contato;
