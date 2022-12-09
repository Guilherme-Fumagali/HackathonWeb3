import React from 'react'

import Header from '../Fiscal/components/Header'
import './Perfil.css';

const Perfil = () => {
    return (
        <div>
        <Header></Header>
        <div id="body">         
            <div id="perfil" class="profile">
                <div class="image">
                    <img class="round" id='planta' alt='Foto de perfil' src={'/assets/planta.jpeg'} width="100%"/>    
                </div>

                <div class="info">
                    <h1>Informações</h1>
                    <ul>
                        <li>Abelardo Pereira</li>
                        <li>Rua dos Fulanos, Bairro Beltrano, n123</li>
                        <li>Locais avaliados: 12</li>
                        <li>Avaliações aprovadas: 11</li>
                        <li>Avaliações reprovadas: 1</li>
                        <li>
                            <div id="progressoElement" class="progress-element">
                                <p id="progressoLabel" class="progress-label">Score</p>
                                <div class="progress">
                                    <progress id="progresso" value="75" max="100">75</progress>
                                </div>
                            </div>    
                        </li> 
                        
                    </ul>
                </div>
            </div>
        </div>   
        </div> 
    );
}
 
export default Perfil;
