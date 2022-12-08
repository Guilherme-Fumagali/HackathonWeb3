import React from 'react';
import { CgProfile } from 'react-icons/cg';

import './Header.css';

const Header = () => {
    return ( 
        <header>
            <span style={{width: "10%"}}></span>
            <span>PFRD</span>
            <span>Portal de Fiscalização de Registros Descentralizados</span>
            <span  id='usuario'>
                <span id='CgProf'><CgProfile /></span>
                <span>Olá, Abelardo</span>
            </span>
            <span style={{width: "10%"}}></span>
        </header>
    );
}
export default Header;