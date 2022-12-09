import React from 'react'

import './FiscalHome.css';

import Header from './components/Header';
import ListaMetadatas from './components/ListaMetadata';
import axios from 'axios';
const baseURL = 'http://localhost:8080';

function FiscalHome() {
    const [metadadosTokens, setMetadadosTokens] = React.useState(null)  
    const [painelSelecionado, setPainelSelecionado] = React.useState('Home')
    const painel = ['Home', 'My Jobs']

    React.useEffect(() => {
        axios.get(`${baseURL}/tokenMetadata`).then((response) => {
        setMetadadosTokens(response.data);
        })
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault()
        setPainelSelecionado(e.target.innerText)
    }
    
    return (
        <div id='divWrapApp'>
            <Header />
            <div id='divButtons'>
                <button onClick={(e) => handleButtonClick(e)} className={painelSelecionado === painel[0] ? 'btnHomeSelecionado' : 'btnHome'}>{painel[0]}</button>
                <button onClick={(e) => handleButtonClick(e)} className={painelSelecionado === painel[1] ? 'btnHomeSelecionado' : 'btnHome'}>{painel[1]}</button>
            </div>
            <p id={'listaView'}><ListaMetadatas metadados={metadadosTokens} /></p>
        </div>
    );
}

export default FiscalHome;