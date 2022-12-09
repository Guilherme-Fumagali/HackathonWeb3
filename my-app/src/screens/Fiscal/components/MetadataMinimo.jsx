import React from 'react'

import './MetadataMinimo.css'

const MetadataMinimo = ({imgPath, lote, quadra, endereco, isSelecionado, isJob, onClickFunction, onClickButton}) => {
    if(isJob) console.log(endereco)
    return (  
        <div onClick={onClickFunction} className={isSelecionado ? 'wrapSelecionado' : 'wrap'}>
            <section>
                <img id='imgMetadataMinimo' src={imgPath}/>            
            </section>
            <section className='dados'>
                <div>
                    <p>
                        <span><strong>Lote:</strong> {lote}</span> 
                        <span><strong>Quadra:</strong> {quadra}</span>
                    </p>
                    <p><strong>Endereço: </strong>{endereco}</p>
                </div>
            </section>
            <button className={isJob ? 'yes' : 'no'} onClick={onClickButton}>Aceitar</button>
        </div>
    );
}
 
export default MetadataMinimo;