import React from 'react';
import { Link } from 'react-router-dom';
import Mapa from './Mapa';
import literals from '../../../config/literals'; //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions
import './styles.css';


//Component per mostrar un municipi de la llista, gestiona els events de click per a comparar i deixar de comparar
const Municipi = (props) => {

    //Es mostra un mapa amb les coordenades de cada municipi a metode informatiu
    //El boto mostra "comparar" o "treu" en funcio del seu estat
    const municipi = props.municipi;
    let comparingClass = props.compared ? "compare" : ""
    let textButton = props.compared ? literals.treu : literals.compara

    const {codi1, codi2} = props.currentUrl;
    let linkProps = {};

    //Defineix el contingut del enllaç que genera per a seleccionar i deseleccionar municipis
    if(props.compared){

        linkProps.to = codi1 === municipi.codi || codi1 === undefined ? '' : '/' + codi1;
        linkProps.to += codi2 === municipi.codi || codi2 === undefined ? '' : '/' + codi2;

    }else{

        linkProps.to = codi1 ? '/' + codi1 : '' ;
        linkProps.to +=  '/' + municipi.codi;
        linkProps.to += codi2 ? codi2 + '/' : '/';

    }

    if(props.disabled && !props.compared){
        textButton = literals.ple;
        comparingClass = "ple";

        linkProps.onClick = e => e.preventDefault();
        linkProps.className = 'disabled';
        linkProps.to = '';
    }
    
    const classe = `municipi ${comparingClass}`;    

    return (
    <li key={municipi.codi} className="col-sm-6 col-md-3">
        <Link {...linkProps}>
            <div className={classe} >
                <Mapa coordenades={municipi.coordenades} />
                <div className="image_overlay"/>
                <div className="view_details">{textButton}</div>
                <div className="stats">
                    <div className="stats-container">
                        <span className="municipi_name">{municipi.nom}</span>
                        <span className="municipi_code">{municipi.codi}</span>
                        <p>{municipi.comarca.nom}</p>
                    </div>
                </div>
            </div>
        </Link>
    </li>
    );
}

export default Municipi
