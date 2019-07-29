import React, {Component} from 'react'
import Municipi from '../Municipi'
import Compara from '../../components/Compara'
import './styles.css'
import config from '../../config'

//Component que mostra la llista de municipis i la zona de comparacio. 
//Gestiona tota la logica de quins municipis es comparen i es mostren a la comparacio
class MunicipisList extends Component {

  constructor(props) {
    super(props);

    //Guarda en aquesta variable la URL del servidor tret de l'arxiu de config
    this.apiUrl = JSON.parse(config.Config).serverUrl + '/municipis/metadades';
    
    this.state = {
      error: null,
      isLoaded: false,
      municipis: [],
      compared:{
        item1: undefined,
        item2: undefined
      }
    };
  }

  //Al haver carregat el component, s'extreu la llista de municipis del server
  componentDidMount() {
    this.getMunicipis()
  }

  //Crida al server, guarda els municipis a l'state per a que es renderitzi tot altre cop
  getMunicipis(){
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            municipis: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  } 

  //Funcio per deixar de comparar un municipi
  removeMunicipi(codi) {
    this.setState({compared: this.treuMunicipi(codi)});
    return true;
  }

  //Retorna l'objecte compared sense el municipi a treure, probablement seria mes senzill haver-ho fet amb un array en comptes de item1 item2
  treuMunicipi(codi) {
    let key, nouCompared = this.state.compared;

    for (key in nouCompared) {
      if(nouCompared[key] !== undefined && nouCompared[key].codi === codi){
        nouCompared[key] = undefined;
      }
    }

    return nouCompared
  }

  //S'afageix el municipi desitjat a l'objecte de comparacions, altre cop en un array hauria set mes senzill i entenedor
  compareMunicipi(municipi) {
    if(this.state.compared.item1 === undefined){
      this.setState({
        compared: {
          item1: municipi,
          item2: this.state.compared.item2
        }
      }); 
      return true;
    }else{
      if(this.state.compared.item2 === undefined){
        this.setState({
          compared: {
            item1: this.state.compared.item1,
            item2: municipi
          }
        });
        return true;
      }
    }
    return false;
  }

  render() {
    let municipis = this.state.municipis;

    return (
      <section className="municipisList">
        <ul className="row mt-3">
        {municipis.map(municipi =>
          <Municipi 
            key={municipi.codi} 
            municipi={municipi} 
            compareMunicipi={(e) => this.compareMunicipi(municipi, e)} 
            removeMunicipi={(e) => this.removeMunicipi(municipi.codi, e)} />
        )}
        </ul>
        <Compara compared={this.state.compared}/>
      </section>
    )
  }

}

export default MunicipisList
