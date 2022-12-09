import React from 'react'

import './FullMetadata.css';

const FullMetadata = ({metadado, isJob}) => {
    if(!metadado) return (<section className='wrapFullMetadata'>Selecione um patrimônio para ver mais detalhes</section>)
    return ( 
        <section className='wrapFullMetadata'>
            <img id='imgFullMetadata' src={metadado.imgPath} alt="Imagem do patrimônio"/>
            <div>
                <p><a href="https://documentonobrasil.com.br/img5.1/certidao-imovel.jpg"><strong>Certidão de matrícula: </strong>{metadado.uuid}</a></p>
                <p className='loteQuadra'>
                    <span><strong>Lote: </strong> {metadado.lote}</span>
                    <span><strong>Quadra: </strong>{metadado.quadra}</span>
                </p>
                <p><strong>Proprietário: </strong>{metadado.proprietario}</p>
                <p><strong>Metragem do solo: </strong>{metadado.metragem_solo}m<sup>2</sup></p>
                <p><strong>Metragem construída: </strong>{metadado.metragem_construida}m<sup>2</sup></p>
                <p><strong>Endereço: </strong>{metadado.endereco}</p>
                

               {/*  <label for="story"></label>
                <textarea id="story" name="story"
                        rows="5" cols="33">
                </textarea>
                <button>Avaliar</button> */}
                
            </div>
        </section>
    
    );
}
 
export default FullMetadata;