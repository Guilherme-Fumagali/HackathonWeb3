import React from 'react';

import './App.css';

import MetadataMinimo from './MetadataMinimo';
import Header from './Header';
import FullMetadata from './FullMetadata';


import axios from 'axios';
const baseURL = 'http://localhost:8080';

function App() {
  const [tokenMetadata, setTokenMetadata] = React.useState(null)  
  const [selecionado, setSelecionado] = React.useState(2)

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
    <div id='divWrapApp'>
      <Header />
      <div className='metadadosMenu'>
        <div>{viewMetadata}</div>
        <div>{tokenMetadata && <FullMetadata metadado={tokenMetadata[selecionado]} />}</div>
      </div>
    </div>
  );
}

export default App;