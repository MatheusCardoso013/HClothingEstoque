import styled from "styled-components";

const MainDiv = styled.main`
    padding: 2em 4em;
`
const TituloDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
`
const Line = styled.div`
  flex: 1; 
  height: 1px;
  background-color: #000000;
  margin: 0 1rem;
`;

const ProdutosDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Produto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 15px #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1em;
`

const Jersey = styled.img`
    max-width: 15em;
    margin-bottom: 1em;
`

const Status = styled.h3`
    background-color: ${props => (props.status == "Disponível" ? '#90ee90' : '#ff8b8b')}; 
    width: 100%;
    margin-bottom: 1em;
    text-align: center;
    padding: 1em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
`

const Inicio = ({produtos = []}) => {
    return (
        <MainDiv>
            <TituloDiv>
                <Line />
                <h1>Mais vendidos</h1>
                <Line />
            </TituloDiv>
            <ProdutosDiv>
                {produtos.map(produto =>
                <div>
                    <Produto>
                        <Jersey src={"produtos/"+produto.url} />
                        <h2>{produto.descricao}</h2>
                        <p>{produto.preco}</p>
                    </Produto>
                    <Status status={produto.status}>{produto.status}</Status>
                </div>
                )}
            </ProdutosDiv>
        </MainDiv>
    )
}

export default Inicio;