import styled from "styled-components";
import Contato from "../components/Contato";

const SecaoContato = styled.div`
    padding: 50px;
    text-align: center;
`

const PaginaContato = () => {
    return (
        <SecaoContato>
            <h1>Fale Conosco</h1>
            <Contato />
        </SecaoContato>
    );
};

export default PaginaContato;
