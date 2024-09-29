import styled from "styled-components"

export const MainDiv = styled.main`
    padding: 2em 4em;

    @media (max-width: 768px) {
        padding: 1em;
    }
`
export const TituloDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    margin-top: 1em;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 1em;
    }
`
export const Line = styled.div`
  flex: 1; 
  height: 1px;
  background-color: #000000;
  margin: 0 1rem;

  @media (max-width: 768px) {
        width: 100%;
        margin: .5rem 0;
    }
`

export const TabelaContainer = styled.div`
    @media (max-width: 768px) {
        max-height: 400px;
    overflow-y: auto;
    margin: 1em 0; 
    }
    
`;

export const Tabela = styled.table`
    width: 100%;
    font-size: 1.2em;
    border-collapse: separate;
    border-spacing: 0;


    @media (max-width: 768px) {
        font-size: 1em;
    }
    `
export const Th = styled.th`
    text-align: start;
    border-collapse: separate;
    border: 1px solid #000;
    padding: 1em;

    @media (max-width: 768px) {
        padding: 0.5em;
    }
`

export const ThOrganizado = styled(Th)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 56px;
    }

`
export const Td = styled.td`
    border-collapse: separate;
    border: 1px solid #000;
    padding: 1em;

    @media (max-width: 768px) {
        padding: 0.5em;
    }
`
export const TdQuantidade = styled(Td)`
    background-color: ${props => props.quantidade > 0 ? "#99ff99" : "#ff7777"};
    border: 1px solid #000;
`
export const ActionDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2em;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export
    const ButtonPost = styled.button`
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1em;
    }
`
export
    const InputBusca = styled.input`
    font-size: 1.5em;
    padding: .5em;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 1em;
        margin-bottom: 1em;
    }
`

export
    const ActionBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export
    const ActionDivBg = styled.form`
    background-color: #FFF;
    padding: 1rem 2rem 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 7em;

    @media (max-width: 768px) {
        width: 80%;
    }

    label {
        font-weight: bold;
    }
    h2 {
        width: 100%;
        margin-bottom: 1em;
    }
`

export
    const Input = styled.input`
    width: 100%;
    margin: .5rem 0 1rem;
    padding: 0.5rem;
    border: 1px solid #000000;
    border-radius: 4px;  
    font-weight: bold;
`

export
    const CloseDiv = styled.div`
    text-align: end;
    img {
        cursor: pointer;
    }
`

export
    const ActionButton = styled.button`
    padding: .5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: .5em;
    margin-bottom: 1em;
    width: 100%;
    background-color: #55d655;
    border-radius: 10px;
    border-color: #55d655;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-top: 1em;
    }
`

export
    const TdAction = styled(Td)`
    display: flex;
    justify-content: space-around;
    img {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export
    const ConfirmButton = styled.button`
    padding: .5em;
    font-size: 1em;
    margin-right: 1em;
    background-color: ${props => props.confirm ? "#8fff8f" : "#ff8f8f" };
    border-radius: 10px;
    border-color: transparent;
    font-weight: bold;
    cursor: pointer;
`

