import React from 'react'

import './FiscalHome.css';

import Header from '../components/Header';
import ListaMetadatas from './components/ListaMetadata';
import axios from 'axios';
const baseURL = 'http://localhost:8080';

function FiscalHome() {
    const [metadadosTokens, setMetadadosTokens] = React.useState([])  
    const [Jobs, setJobs] = React.useState([])
    const painel = ['Imóveis a serem avaliados', 'Imóveis em avaliação']
    const [painelSelecionado, setPainelSelecionado] = React.useState(painel[0])
    const [renderiza, setRenderiza] = React.useState(false)

    console.log(Jobs)
    if(painelSelecionado === painel[1] && Jobs.length === 0)
        setPainelSelecionado(painel[0])

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
        setRenderiza(true)
        if(jobs.length === 0){
            setPainelSelecionado(painel[0])
            setRenderiza(false)
        }
    }

    return (
        <div id='divWrapApp'>
            <Header />
            <div id='divButtons'>
                <button onClick={(e) => handleButtonClick(e)} className={painelSelecionado === painel[0] ? 'btnHomeSelecionado' : 'btnHome'}>{painel[0]}</button>
                <button onClick={(e) => handleButtonClick(e)} style={renderiza ? {} : {color: "gray"}} className={painelSelecionado === painel[1] ? 'btnAvaliacaoSelecionado' : 'btnAvaliacao'}>{painel[1]}</button>
            </div>
            {painelSelecionado === painel[0] && <p id={'listaView'}><ListaMetadatas metadados={metadadosTokens} Jobs={Jobs} setJobs={handleSetJobs} /></p>}
            {painelSelecionado === painel[1] && <p id={'listaView'}><ListaMetadatas metadados={Jobs} Jobs={Jobs} setJobs={handleSetJobs} /></p>}
        </div>
    );
}

export default FiscalHome; 