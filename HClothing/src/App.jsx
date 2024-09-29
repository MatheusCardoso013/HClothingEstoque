import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Estoque from "./pages/Estoque";
import Header from "./componentes/Header";
import './global.css';
import Banner from "./componentes/Banner";
import { useEffect, useState } from "react";
import produtos from "./produtos.json";
import axios from "axios";
import Footer from "./componentes/Footer";

function App() {
    const [produtosLista, setProdutosLista] = useState(produtos);
    const [estoqueLista, setEstoqueLista] = useState([])

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:5115/');
                setEstoqueLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error); 
            }
        };

        fetchProdutos(); 
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Banner />
            <Routes>
                <Route path="/" element={<Inicio produtos={produtosLista}/>} />
                <Route path="/estoque" element={<Estoque estoque={estoqueLista}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;