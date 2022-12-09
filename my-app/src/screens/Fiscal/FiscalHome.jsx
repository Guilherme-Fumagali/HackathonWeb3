import React from 'react'

import './FiscalHome.css';

import Header from './components/Header';
import ListaMetadatas from './components/ListaMetadata';
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
            <div id='divButtons'>
                <button className='btnHome'>Home</button>
                <button className='btnHome'>My Jobs</button>
            </div>
            <p id={'listaView'}><ListaMetadatas metadados={metadadosTokens} /></p>
        </div>
    );
}

export default FiscalHome;