import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoImg from "../assets/logo-light.png";
import { Button } from "./Button";

const HeaderContainer = styled.header`
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 5vw;
    height: 15vh;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1vh 3vw;
    }
`;

const Logo = styled.img`
    height: 13vh;
    width: auto;

    @media (max-width: 768px) {
        height: 10vh;
        margin-bottom: 1vh;
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 5vw;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2vh;
        align-items: center;
        margin-bottom: 1vh;
    }

    @media (max-width: 480px) {
        gap: 1vh;
    }
`;

const Nav2 = styled.nav`
    display: flex;
    gap: 5vw;
    padding-right: 2vw;

    @media (max-width: 768px) {
        gap: 2vw;
        padding-right: 0;
        margin-bottom: 1vh;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1vh;
    }
`;

const NavLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: #D8E4FF;
    position: relative;
    padding-bottom: 0.5vh;
    font-size: 1rem;
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

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/"><Logo src={LogoImg} alt="Logo WebMechanic Solutions" /></Link>
            <Nav>
                <NavLink to="/seguros">Seguros</NavLink>
                <NavLink to="/apolice">Sua apólice</NavLink>
                <NavLink to="/sinistros">Sinistros</NavLink>
                <NavLink to="/equipe">Equipe</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </Nav>
            <Nav2>
                <Link to="/perfil">
                    <Button tipo={2}>Seu Perfil</Button>
                </Link>
                <Link to="/login">
                    <Button tipo={2}>Entre</Button>
                </Link>
            </Nav2>
        </HeaderContainer>
    );
};

export default Header;
