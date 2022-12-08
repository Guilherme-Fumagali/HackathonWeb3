import React from 'react';

import FullMetadata from './FullMetadata';
import MetadataMinimo from './MetadataMinimo';

import './ListaMetadata.css'
const ListaMetadatas = ({metadados}) => {
    const [selecionado, setSelecionado] = React.useState(0)

    let viewMetadata = <p>Carregando...</p>
    if (metadados) viewMetadata = metadados.map((metadado, i) => {
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
        <div className='metadadosList'>
            <div>{viewMetadata}</div>
            <div>{metadados && <FullMetadata metadado={metadados[selecionado]} />}</div>
        </div>
    );
}
 
export default ListaMetadatas;