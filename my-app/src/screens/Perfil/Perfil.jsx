import React from 'react'

import './Perfil.css';

const Perfil = () => {
    return (
        <div class="profile">
            <div class="image">
                <img class="round" id='imgplant' src={planta.jpeg} width="100%"/>
            </div>

            <div class="info">
                <h1>Informações</h1>
                <ul>
                    <li>Aberaldo Pereira</li>
                    <li>Rua dos Fulanos, Bairro Beltrano, n123</li>
                    <li>Locais avaliados: 12</li>
                    <li>Avaliações aprovadas: 11</li>
                    <li>Avaliações reprovadas: 1</li>
                    <li>
                        <div class="progress-element">
                            <p class="progress-label">Score</p>
                            <div class="progress">
                                <progress value="75" max="100">75</progress>
                            </div>
                        </div>    
                    </li> 
                    
                </ul>
            </div>
        </div>
    );
}
 
export default Perfil;
