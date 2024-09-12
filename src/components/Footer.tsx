import styled from "styled-components";
import Logo from "../assets/logo-light.png"

const FooterContainer = styled.footer`
    width: 100vw;
    height: 200px;
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: auto;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <h3>Páginas</h3>
                <ul>
                    <li>Home</li>
                    <li>Apólice</li>
                    <li>Serviços</li>
                    <li>Sinistros</li>
                    <li>Login</li>
                    <li>Perfil</li>
                    <li>Equipe</li>
                </ul>
            </div>
            <div>
                <img src={Logo} alt="Logo" />
                <p>Copyright © 2024 WebMechanic Solutions. Todos os direitos reservados.</p>
            </div>
            <div>
                <h3>Redes Sociais</h3>
                <ul>
                    <li><i className="fi fi-brands-instagram"></i></li>
                    <li> </li>
                    <li> </li>
                </ul>
            </div>
        </FooterContainer>
    );
}

export default Footer;