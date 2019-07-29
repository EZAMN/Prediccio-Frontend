import React, {Component} from 'react'
import './styles.css'
import Mapa from '../Mapa'
import literals from '../../config/literals.js' //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions


//Component per mostrar un municipi de la llista, gestiona els events de click per a comparar i deixar de comparar
class Municipi extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comparing:false
        };
        this.clickButton = this.clickButton.bind(this);
    }

    //Crida la funcio de municipisList adient per a cada event, canvia l'estat de comparant en funcio del que retorni aquesta funcio
    clickButton() {
        if(this.state.comparing === true){
            if(this.props.removeMunicipi() === true){
                this.toggleCompare();
            }
        }else{
            if(this.props.compareMunicipi() === true){
                this.toggleCompare();
            }
        }
    }

    //Funcio per canviar l'estat de comparing
    toggleCompare(){
        this.setState({
            comparing: !this.state.comparing
        });
    }

    //Es mostra un mapa amb les coordenades de cada municipi a metode informatiu
    //El boto mostra "comparar" o "treu" en funcio del seu estat
    render() {
        const municipi = this.props.municipi;
        const comparing = this.state.comparing ? "compare" : ""
        const classe = `municipi ${comparing}`;

        return (
        <li key={municipi.codi} className="col-sm-6 col-md-3" onClick={this.clickButton}>
            <div className={classe} >
                <Mapa coordenades={municipi.coordenades} />
                <div className="image_overlay"/>
                <div className="view_details">
                {this.state.comparing ? literals.treu : literals.compara}
                </div>
                <div className="stats">
                    <div className="stats-container">
                        <span className="municipi_name">{municipi.nom}</span>
                        <span className="municipi_code">{municipi.codi}</span>
                        <p>{municipi.comarca.nom}</p>
                    </div>
                </div>
            </div>
        </li>)
    }
}

export default Municipi
