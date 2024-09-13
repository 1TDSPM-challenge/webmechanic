import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-light.png";

const FooterContainer = styled.footer`
    width: 100vw;
    height: 250px;
    background-color: #262626;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;

    div {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: auto;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;

            li {
                list-style: none;
            }
        }
    }
`;

const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 10px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;
    gap: 40px;
`;

const SocialLinks = styled.ul`
    display: flex;
    gap: 15px;

    li {
        list-style: none;

        i {
            font-size: 24px;
            color: #D8E4FF;
            transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
            cursor: pointer;

            &:hover {
                color: #ffffff;
                transform: scale(1.2);
                text-shadow: 0 0 10px rgba(53, 22, 231, 0.89);
            }
        }
    }
`;

const Coluna = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
        list-style: none;
    }
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #D8E4FF;
    position: relative;
    padding-bottom: 0.5vh;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0.3vh;
        background-color: #D8E4FF;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <h3>Páginas</h3>
                <FooterLinksWrapper>
                    <Coluna>
                        <li><FooterLink to="/">Home</FooterLink></li>
                        <li><FooterLink to="/apolice">Apólice</FooterLink></li>
                        <li><FooterLink to="/seguros">Seguros</FooterLink></li>
                        <li><FooterLink to="/sinistros">Sinistros</FooterLink></li>
                    </Coluna>
                    <Coluna>
                        <li><FooterLink to="/login">Login</FooterLink></li>
                        <li><FooterLink to="/perfil">Perfil</FooterLink></li>
                        <li><FooterLink to="/equipe">Equipe</FooterLink></li>
                        <li><FooterLink to="/contato">Contato</FooterLink></li>
                    </Coluna>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <img src={Logo} alt="Logo" />
                <p>Copyright © 2024 WebMechanic Solutions. Todos os direitos reservados.</p>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <h3>Redes Sociais</h3>
                <SocialLinks>
                    <li><i className="fi fi-brands-instagram"></i></li>
                    <li><i className="fi fi-brands-whatsapp"></i></li>
                    <li><i className="fi fi-brands-github"></i></li>
                </SocialLinks>
            </FooterLinksContainer>
        </FooterContainer>
    );
};

export default Footer;
