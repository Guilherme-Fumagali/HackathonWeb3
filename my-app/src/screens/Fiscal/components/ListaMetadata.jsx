import React from 'react';

import FullMetadata from './FullMetadata';
import MetadataMinimo from './MetadataMinimo';

import './ListaMetadata.css'
const ListaMetadatas = ({metadados, Jobs, setJobs}) => {
    const [selecionado, setSelecionado] = React.useState(0)
    const [servicos] = React.useState(Jobs)
    const [click, setClick] = React.useState(false)

    const handleClickButton = (metadado) => {
        const i = servicos.findIndex(obj => obj.uuid === metadado.uuid)
        if(i >= 0)
            servicos.splice(i, 1)
        else
            servicos.push(metadado)
        setClick(!click)
        setJobs(servicos)
    }

    const isAJob = (metadado) => {
        return servicos.findIndex(obj => obj.uuid === metadado.uuid) >= 0
    } 

    let viewMetadata = <p>Carregando...</p>
    if (metadados.length >= 0) viewMetadata = metadados.map((metadado, i) => {
        return (
        <MetadataMinimo 
            imgPath={metadado.imgPath}
            lote={metadado.lote} 
            quadra={metadado.quadra} 
            endereco={metadado.endereco}
            isSelecionado={selecionado === i}
            onClickFunction={() => setSelecionado(i)}
            onClickButton={() => handleClickButton(metadado)}
            isJob={isAJob(metadado)}
            key={i} 
          />)
    })

    return ( 
        <div className='metadadosList'>
            <div>{viewMetadata}</div>
            <div>{metadados.length && <FullMetadata isJob={isAJob(metadados[selecionado])} metadado={metadados[selecionado]} />}</div>
        </div>
    );
}
 
export default ListaMetadatas;