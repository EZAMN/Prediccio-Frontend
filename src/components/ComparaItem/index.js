import React, {Component} from 'react'
import moment from 'moment'
import config from '../../config'
import nomImatge from '../../config/imatges.js'


//Component per a mostrar el municipi comparat
//Gestiona la peticio al servidor per a les dades exteses i de prediccions del municipi requerit
//Gestiona el canvi de dates a partir de les dades extretes del servidor
class ComparaItem extends Component {

  constructor(props) {
    super(props);

    //es guarda la url del servidor extreta de l'arxiu de config
    this.apiUrl = JSON.parse(config.Config).serverUrl + '/municipis/';
    
    this.state = {
      dades: {},
      variables: {}
    };
  }

  //Al muntarse el component es imposible que ja tingui un municipi, pero per si es canvies la funcionalitat de l'aplicacio, no costa res intentar la crida de prediccions
  componentDidMount() {
    this.getDades(this.props.municipi)
  }

  //A l'actualitzar el municipi, si te municipi i no es el mateix que abans del canvi es demanen les prediccions al servidor
  componentDidUpdate(prevProps) {
    if (this.props.municipi !== undefined 
      && ( prevProps.municipi === undefined 
        || this.props.municipi.codi !== prevProps.municipi.codi )) {
      this.getDades(this.props.municipi);
    }
  }

  //Si es disposa de municipi es criden les dades de prediccio al servidor, es guarden totes les dades, i s'implementen els de la primera data, es podria canviar a l'ultima per tenir les dades mes actuals
  getDades(municipi){
    if(municipi !== undefined){
      let url = this.apiUrl + municipi.codi
      fetch(url)
        .then(response => response.json())
        .then(
          (result) => {
            result.prediccions.dies[0].variables.disabled = true;
            this.setState({
              isLoaded: true,
              dades: result,
              variables: result.prediccions.dies[0].variables
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
  } 

  //Funcio per a canviar la data que es mostra, s'actualitzen les dades i es canvia l'estat dels botons (disabled o no)
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  seleccionaData(variables) {
    let novesDades = this.state.dades;
    novesDades.prediccions.dies[0].variables.disabled = !novesDades.prediccions.dies[0].variables.disabled
    novesDades.prediccions.dies[1].variables.disabled = !novesDades.prediccions.dies[1].variables.disabled

    this.setState({
      variables:variables,
      dades:novesDades
    });
  }

  //Es guarden les dades de les que es disposa en variables i es mostra l'objecte amb aquestes variables.
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  render() {
    let municipi = this.props.municipi;
    let variables = this.state.variables;
    let dades = this.state.dades;
    let alt = '', nom, comarca, tmax, tmin, precipitacio, data1, data2, variables1, variables2, btn1, btn2
    let src = 'images/empty.png'

    if(variables !== undefined && municipi !== undefined && variables.estatCel !== undefined){
      alt = nomImatge[variables.estatCel.simbol + 'alt']
      src = 'images/' + nomImatge[variables.estatCel.simbol]
      tmax = variables.tmax.valor + " " + variables.tmax.unitats;
      tmin = variables.tmin.valor + " " + variables.tmin.unitats;
      precipitacio = variables.precipitacio.valor + " " + variables.precipitacio.unitat;
    }

    if(dades !== undefined && municipi !== undefined && dades.prediccions !== undefined) {
      data1 = moment(dades.prediccions.dies[0].data).format('DD/MM/YYYY');
      variables1 = dades.prediccions.dies[0].variables
      data2 = moment(dades.prediccions.dies[1].data).format('DD/MM/YYYY');
      variables2 = dades.prediccions.dies[1].variables
      btn1 = <button type="button" className="btn btn-info" onClick={e => this.seleccionaData(variables1)} disabled={variables1.disabled} >{data1}</button>
      btn2 = <button type="button" className="btn btn-info" onClick={e => this.seleccionaData(variables2)} disabled={variables2.disabled}>{data2}</button>
    }

    if(municipi !== undefined){
      nom = municipi.nom;
      comarca = municipi.comarca.nom;
    }
      
    return (
      <ul className="col-sm">
        <li>
          <div>{nom}</div>
          <div className="row">
            <div className="col-sm">{btn1}</div>
            <div className="col-sm">{btn2}</div>
          </div>
        </li>
        <li>{comarca}</li>
        <li><img src={src} alt={alt}/></li>
        <li>{tmax}</li>
        <li>{tmin}</li>
        <li>{precipitacio}</li>
      </ul>
    )
  }

}

export default ComparaItem
