import React from 'react';

import './App.css';

import MetadataMinimo from './MetadataMinimo';
import Header from './Header';
import FullMetadata from './FullMetadata';


import axios from 'axios';
const baseURL = 'http://localhost:8080';

function App() {
  const [tokenMetadata, setTokenMetadata] = React.useState(null)
  React.useEffect(() => {
    axios.get(`${baseURL}/tokenMetadata`).then((response) => {
      setTokenMetadata(response.data);
    })
  }, []);

  let viewMetadata = <p>Carregando...</p>
  if (tokenMetadata) viewMetadata = tokenMetadata.map((metadado, i) => {
      return (
      <MetadataMinimo 
          imgPath={metadado.imgPath}
          lote={metadado.lote} 
          quadra={metadado.quadra} 
          endereco={metadado.endereco} 
          key={i} 
        />)
    })
  return (
    <>
     <Header />
     {viewMetadata}
     {tokenMetadata && <FullMetadata metadado={tokenMetadata[0]} />}
    </>
  );
}

export default App;