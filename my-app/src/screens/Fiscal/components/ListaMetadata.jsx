import React from 'react';

import FullMetadata from './FullMetadata';
import MetadataMinimo from './MetadataMinimo';

import './ListaMetadata.css'
const ListaMetadatas = ({metadados}) => {
    const [selecionado, setSelecionado] = React.useState(1)
    const [servicos, setServicos] = React.useState([])

    console.log(servicos)

    const handleClickButton = (metadado) => {
        const i = servicos.findIndex(obj => obj.uuid === metadado.uuid)
        if(i >= 0)
            servicos.splice(i, 1)
        else
            servicos.push(metadado)
    }

    const searchInServicos = (metadado) => {
        const i = servicos.findIndex(obj => obj.uuid === metadado.uuid)
        if(i >= 0)
            return true
        else
            return false
    }

    let viewMetadata = <p>Carregando...</p>
    if (metadados) viewMetadata = metadados.map((metadado, i) => {
        const isJob = searchInServicos(metadado)
        return (
        <MetadataMinimo 
            imgPath={metadado.imgPath}
            lote={metadado.lote} 
            quadra={metadado.quadra} 
            endereco={metadado.endereco}
            isSelecionado={selecionado === i}
            onClickFunction={() => setSelecionado(i)}
            onClickButton={() => handleClickButton(metadado)}
            isJob={isJob}
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