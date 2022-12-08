import React from 'react';

import './App.css';


import Header from './Header';
import ListaMetadatas from './ListaMetadata';
import Perfil from '../screens/Perfil/Perfil';
import axios from 'axios';
const baseURL = 'http://localhost:8080';

function App() {
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

export default App;