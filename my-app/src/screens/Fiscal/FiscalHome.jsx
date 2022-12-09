import React from 'react'

import './FiscalHome.css';

import Header from './components/Header';
import ListaMetadatas from './components/ListaMetadata';
import axios from 'axios';
const baseURL = 'http://localhost:8080';

function FiscalHome() {
    const [metadadosTokens, setMetadadosTokens] = React.useState([])  
    const [Jobs, setJobs] = React.useState([])
    const [painelSelecionado, setPainelSelecionado] = React.useState('Home')
    const painel = ['Home', 'My Jobs']

    console.log(Jobs)
    if(painelSelecionado === painel[1] && Jobs.length === 0)
        setPainelSelecionado('Home')

    React.useEffect(() => {
        axios.get(`${baseURL}/tokenMetadata`).then((response) => {
        setMetadadosTokens(response.data);
        })
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault()
        setPainelSelecionado(e.target.innerText)
    }
    
    const handleSetJobs = (jobs) => {
        setJobs(jobs)
        if(jobs.length === 0)
            setPainelSelecionado(painel[0])
    }

    return (
        <div id='divWrapApp'>
            <Header />
            <div id='divButtons'>
                <button onClick={(e) => handleButtonClick(e)} className={painelSelecionado === painel[0] ? 'btnHomeSelecionado' : 'btnHome'}>{painel[0]}</button>
                <button onClick={(e) => handleButtonClick(e)} className={painelSelecionado === painel[1] ? 'btnHomeSelecionado' : 'btnHome'}>{painel[1]}</button>
            </div>
            {painelSelecionado === painel[0] && <p id={'listaView'}><ListaMetadatas metadados={metadadosTokens} Jobs={Jobs} setJobs={handleSetJobs} /></p>}
            {painelSelecionado === painel[1] && <p id={'listaView'}><ListaMetadatas metadados={Jobs} Jobs={Jobs} setJobs={handleSetJobs} /></p>}
        </div>
    );
}

export default FiscalHome;