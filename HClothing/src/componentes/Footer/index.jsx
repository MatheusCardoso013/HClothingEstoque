import styled from "styled-components";

const Rodape = styled.footer`
    background-color: #000000;
    color: #FFFFFF;
    padding: 2em;
    text-align: center;
`

const Footer = () => {
    return (
        <Rodape>
            <p>Todos os direitos reservados © Matheus Cardoso</p>
        </Rodape>
    )
}

export default Footer;