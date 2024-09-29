import { useEffect, useState } from "react";
import { MainDiv, TituloDiv, Line, Tabela, Th, Td, ActionDiv, ButtonPost, InputBusca, ActionBg, ActionDivBg, Input, ActionButton, CloseDiv, TdAction, ConfirmButton, TdQuantidade, ThOrganizado, TabelaContainer } from './EstoqueStyles.jsx';
import axios from "axios";

const Estoque = ({ estoque = [] }) => {
    //Pop-ups
    const [showPost, setShowPost] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showPut, setShowPut] = useState(false);
    const [showErro, setShowErro] = useState(false);

    //Produto Modelo
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');

    //Ações
    const [busca, setBusca] = useState('');
    const [idExcluir, setIdExcluir] = useState(null);
    const [idPut, setIdPut] = useState(null);

    //Organização
    const [ordem, setOrdem] = useState('neutro');
    const [estoqueOrganizado, setEstoqueOrganizado] = useState(estoque);

    useEffect(() => {
        setEstoqueOrganizado(estoque);
    }, [estoque]);

    async function postProduto() {
        const novoProduto = {
            nome,
            descricao,
            quantidade: parseInt(quantidade),
            valor: parseFloat(valor)
        };
        try {
            if (nome != "" && descricao != "" && quantidade >= 0 && valor > 0) {
                const response = await axios.post("http://localhost:5115/", novoProduto);
                console.log("Produto criado!", response.data);

                const currentScrollY = window.scrollY;
                window.location.reload();
                window.scrollTo(0, currentScrollY);

                setShowErro(false);
                setShowPost(false);
            } else {
                setShowErro(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProduto(id) {
        try {
            await axios.delete(`http://localhost:5115/${id}`);
            console.log("Produto deletado com sucesso!");

            const currentScrollY = window.scrollY;
            window.location.reload();
            window.scrollTo(0, currentScrollY);

        } catch (error) {
            console.log(error);
        }
    }

    async function putProduto(id) {
        const produtoEditado = {
            nome,
            descricao,
            quantidade: parseInt(quantidade),
            valor: parseFloat(valor)
        };
        try {
            if (nome != "" && descricao != "" && quantidade >= 0 && valor > 0) {
                const response = await axios.put(`http://localhost:5115/${id}`, produtoEditado);
                console.log("Produto editado!", response.data);

                const currentScrollY = window.scrollY;
                window.location.reload();
                window.scrollTo(0, currentScrollY);

                setShowPut(false);
            } else {
                setShowErro(true);
            }

        } catch (error) {
            console.log(error);
        }


    }

    const produtosFiltrados = estoqueOrganizado.filter(item =>
        item.nome.toLowerCase().includes(busca.toLowerCase()) ||
        item.descricao.toLowerCase().includes(busca.toLowerCase()) ||
        item.id.toString().includes(busca)
    )

    const organizaEstoque = (ordem) => {
        let sequencia = [...estoque];
        if (ordem == 'decrescente') {
            sequencia.sort((a, b) => b.quantidade - a.quantidade);
        } else if (ordem == 'crescente') {
            sequencia.sort((a, b) => a.quantidade - b.quantidade);
        }
        setEstoqueOrganizado(sequencia);
    }

    const imagemQuantidade = () => {
        if (ordem == 'neutro') return 'assets/neutro.png';
        if (ordem == 'decrescente') return 'assets/decrescente.png';
        if (ordem == 'crescente') return 'assets/crescente.png';
    }

    const ordemFiltro = () => {
        let novaOrdem = '';
        if (ordem == 'neutro') {
            novaOrdem = 'decrescente';
        } else if (ordem == 'decrescente') {
            novaOrdem = 'crescente';
        } else {
            novaOrdem = 'neutro';
        }
        setOrdem(novaOrdem);
        organizaEstoque(novaOrdem);
    }

    return (
        <MainDiv>
            <TituloDiv>
                <Line />
                <h1>Controle de Estoque</h1>
                <Line />
            </TituloDiv>
            <ActionDiv>
                <ButtonPost onClick={() => setShowPost(true)}>Incluir produto</ButtonPost>
                <InputBusca
                    type="text"
                    placeholder="Busque o produto"
                    value={busca}
                    onChange={e => setBusca(e.target.value)} />
            </ActionDiv>
            <TabelaContainer>
                <Tabela>
                    <thead>
                        <tr>
                            <Th>ID</Th>
                            <Th>Nome do Produto</Th>
                            <Th>Descrição</Th>
                            <ThOrganizado onClick={ordemFiltro}>
                                <p>Quantidade</p>
                                <img src={imagemQuantidade()} />
                            </ThOrganizado>
                            <Th>Valor</Th>
                            <Th>Ações</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtosFiltrados.map(item =>
                            <tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.nome}</Td>
                                <Td>{item.descricao}</Td>
                                <TdQuantidade quantidade={item.quantidade}>
                                    {item.quantidade}

                                </TdQuantidade>
                                <Td>R$ {item.valor},00</Td>
                                <TdAction>
                                    <img src="assets/editar.png" onClick={() => {
                                        setNome(item.nome);
                                        setDescricao(item.descricao);
                                        setQuantidade(item.quantidade);
                                        setValor(item.valor);
                                        setIdPut(item.id);
                                        setShowPut(true);
                                    }
                                    } />
                                    <img src="assets/deletar.png" onClick={() => {
                                        setIdExcluir(item.id);
                                        setShowDelete(true);
                                    }
                                    } />
                                </TdAction>
                            </tr>
                        )}
                    </tbody>
                </Tabela>
            </TabelaContainer>
            {showPost &&
                <ActionBg>
                    <ActionDivBg>
                        <CloseDiv>
                            <img src="assets/x-icon.png" alt="ícone de fechamento" onClick={() => {
                                setShowPost(false);
                                setShowErro(false);
                            }} />
                        </CloseDiv>
                        <label>Nome do produto</label>
                        <Input id="nome" onChange={e => setNome(e.target.value)} />
                        <label>Descrição</label>
                        <Input id="descricao" onChange={e => setDescricao(e.target.value)} />
                        <label>Quantidade</label>
                        <Input type="number" min="0" id="quantidade" onChange={e => setQuantidade(e.target.value)} />
                        <label>Valor</label>
                        <Input id="valor" onChange={e => setValor(e.target.value)} />
                        {showErro && <p>Não foi possível incluir produto!</p>}
                        <ActionButton onClick={(e) => {
                            e.preventDefault();
                            postProduto();
                        }
                        }>Postar produto</ActionButton>
                    </ActionDivBg>
                </ActionBg>
            }
            {showDelete &&
                <ActionBg>
                    <ActionDivBg>
                        <h2>Tem certeza que deseja excluir esse produto?</h2>
                        <div>
                            <ConfirmButton confirm onClick={(event) => {
                                event.preventDefault();
                                deleteProduto(idExcluir);
                                setShowDelete(false);
                            }
                            }>SIM</ConfirmButton>
                            <ConfirmButton confirm={false} onClick={() => setShowDelete(false)}>CANCELAR</ConfirmButton>
                        </div>
                    </ActionDivBg>
                </ActionBg>
            }
            {showPut &&
                <ActionBg>
                    <ActionDivBg>
                        <CloseDiv>
                            <img src="assets/x-icon.png" alt="ícone de fechamento" onClick={() => {
                                setShowPut(false);
                                setShowErro(false);
                            }} />
                        </CloseDiv>
                        <label>Nome do produto</label>
                        <Input id="nome" onChange={e => setNome(e.target.value)} value={nome} />
                        <label>Descrição</label>
                        <Input id="descricao" onChange={e => setDescricao(e.target.value)} value={descricao} />
                        <label>Quantidade</label>
                        <Input type="number" id="quantidade" onChange={e => setQuantidade(e.target.value)} value={quantidade} />
                        <label>Valor</label>
                        <Input id="valor" onChange={e => setValor(e.target.value)} value={valor} />
                        {showErro && <p>Não foi possível editar o produto!</p>}
                        <ActionButton onClick={(e) => {
                            e.preventDefault();
                            putProduto(idPut);
                        }
                        }>Salvar alterações</ActionButton>
                    </ActionDivBg>
                </ActionBg>
            }
        </MainDiv>

    )
}

export default Estoque;

