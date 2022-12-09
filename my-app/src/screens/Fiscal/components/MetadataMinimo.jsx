import React from 'react'

import './MetadataMinimo.css'

const MetadataMinimo = ({imgPath, lote, quadra, endereco, isSelecionado, isJob, onClickFunction, onClickButton}) => {
    return (  
        <div onClick={onClickFunction} className={isSelecionado ? 'wrapSelecionado' : 'wrap'}>
            <section>
                <img id='imgMetadataMinimo' src={imgPath} alt="Imagem do patrimônio"/>            
            </section>
            <section className='dados'>
                <div>
                    <p>
                        <span><strong>Lote:</strong> {lote}</span> 
                        <span><strong>Quadra:</strong> {quadra}</span>
                    </p>
                    <p><strong>Endereço: </strong>{endereco}</p>
                    <p><strong>Recompensa: 1 CELO</strong></p>
                </div>
            </section>
            <button id='metMinimo' className={isJob ? 'yes' : 'no'} onClick={onClickButton}>Avaliar</button>
        </div>
    );
}
 
export default MetadataMinimo;