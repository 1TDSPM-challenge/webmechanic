import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoImg from "../assets/logo-light.png";
import { Button } from "./Button";

const HeaderContainer = styled.header`
    background-color: rgb(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 100px;
    width: 100%;
`

const Logo = styled.img`
    height: 80px;
    width: auto;
    margin-left: 40px;
`

const Nav = styled.nav`
    display: flex;
    gap: 40px;
`

const Nav2 = styled.nav`
    display: flex;
    gap: 40px;
    padding-right: 40px;
`

const NavLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: #D8E4FF;
    position: relative;
    padding-bottom: 5px;
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
        height: 1.5px;
        background-color: #D8E4FF;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`

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
                <Button tipo={2}>Seu Perfil</Button>
                <Button tipo={2}>Entre</Button>
            </Nav2>
        </HeaderContainer>
    );
}

export default Header;