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

const NavLink = styled(Link) `
    text-decoration: none;
    color: #D8E4FF;
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
            <Nav>
                <Button tipo={1}>Seu Perfil</Button>
                <Button tipo={1}>Entre</Button>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;w