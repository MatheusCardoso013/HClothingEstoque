import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
    background-color: #000000;
    color: #FFFFFF;
    padding: 1em;
    display: flex;
    justify-content: space-around;
`
const Logo = styled.img`
    max-width: 5em;
`

const NavLinks = styled.nav`
    text-decoration: none;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    gap: 2rem;
`

const Banner = () => {
    return (
        <Container>
            <Logo src="assets/logo.png" />
            <NavLinks>
                <Link to="/" style={{textDecoration: 'none', color: '#FFFFFF'}}>Início</Link>
                <Link to="/estoque" style={{textDecoration: 'none', color: '#FFFFFF'}}>Estoque</Link>
            </NavLinks>
        </Container>
    )
}

export default Banner;