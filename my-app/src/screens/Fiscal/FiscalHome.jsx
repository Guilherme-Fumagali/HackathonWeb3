import React from 'react'

import './FiscalHome.css';

import Header from './components/Header';
import ListaMetadatas from './components/ListaMetadata';
import Perfil from '../Perfil/Perfil';
import axios from 'axios';
const baseURL = 'http://localhost:8080';

function FiscalHome() {
    const [metadadosTokens, setMetadadosTokens] = React.useState(null)  
    
    React.useEffect(() => {
        axios.get(`${baseURL}/tokenMetadata`).then((response) => {
        setMetadadosTokens(response.data);
        })
    }, []);
    
    return (
        <div id='divWrapApp'>
        <Header />
        <ListaMetadatas metadados={metadadosTokens} />
        <Perfil />
        </div>
    );
}

export default FiscalHome;