import React from 'react';
import Mapa from '../Mapa';
import literals from '../../config/literals'; //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions
import './styles.css';


//Component per mostrar un municipi de la llista, gestiona els events de click per a comparar i deixar de comparar
const Municipi = (props) => {

    //Crida la funcio de municipisList adient per a cada event, canvia l'estat de comparant en funcio del que retorni aquesta funcio
    const clickButton = () => {
        if(props.compared)
            props.removeMunicipi();
        else
            props.compareMunicipi(); 
    }

    //Es mostra un mapa amb les coordenades de cada municipi a metode informatiu
    //El boto mostra "comparar" o "treu" en funcio del seu estat
    const municipi = props.municipi;
    let comparingClass = props.compared ? "compare" : ""
    let textButton = props.compared ? literals.treu : literals.compara

    if(props.disabled && !props.compared){
        textButton = literals.ple;
        comparingClass = "ple";
    }
    
    const classe = `municipi ${comparingClass}`;    

    return (
    <li key={municipi.codi} className="col-sm-6 col-md-3" onClick={clickButton}>
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
    </li>
    );
}

export default Municipi
