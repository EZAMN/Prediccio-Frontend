import React, { Component } from 'react';
import { connect } from 'react-redux';
import nomImatge from '../../config/imatges.js';
import DatesButton from './DatesButton';
import { predict, selectDate } from '../../actions';


//Component per a mostrar el municipi comparat
//Gestiona la peticio al servidor per a les dates exteses i de prediccions del municipi requerit
//Gestiona el canvi de dates a partir de les dates extretes del servidor
class ComparaItem extends Component {

  //A l'actualitzar el municipi, si te municipi i no es el mateix que abans del canvi es demanen les prediccions al servidor
  componentDidUpdate(prevProps) {

    if (this.props.municipi !== undefined 
      && this.props.municipi.codi !== undefined
      && ( prevProps.municipi === undefined 
        || this.props.municipi.codi !== prevProps.municipi.codi )) {

          this.props.predict(this.props.municipi.codi);

    }

  }

  //Funcio per a canviar la data que es mostra, s'actualitzen les dates i es canvia l'estat dels botons (disabled o no)
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  seleccionaData(codi, date) {

    const newDate = {
      codi: codi,
      ...date
    }

    this.props.selectDate(newDate);
  }

  renderMunicipi(municipi){
    return [municipi.nom, municipi.comarca.nom];
  }

  renderValues(variables){

    const alt = nomImatge[variables.estatCel.simbol + 'alt']
    const src = 'images/' + nomImatge[variables.estatCel.simbol]
    const tmax = variables.tmax.valor + " " + variables.tmax.unitats;
    const tmin = variables.tmin.valor + " " + variables.tmin.unitats;
    const precipitacio = variables.precipitacio.valor + " " + variables.precipitacio.unitat;
    
    return [ alt, src, tmax, tmin, precipitacio]
  }

  renderPrediccions(prediccions, selectedData){

    const botons = prediccions.dies.map( (prediccio) => {
    
      return <DatesButton
        data={prediccio.data}
        onClick={() => this.seleccionaData(prediccions.codi, prediccio)} 
        disabled={ prediccio.data === selectedData.data } 
        />

    });
    
    return botons;
  }

  //Es guarden les dates de les que es disposa en prediccions i es mostra l'objecte amb aquestes prediccions.
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  render() {
    const municipi = this.props.municipi;
    const prediccions = this.props.prediccions.find((prediccio)=>{ return prediccio.codi === municipi.codi }); 
    const selectedData = this.props.dates.find((prediccio)=>{ return prediccio.codi === municipi.codi }); 

    const municipiExists = (municipi !== undefined && municipi.codi !== undefined);
    const prediccionsExists = (prediccions !== undefined && prediccions.prediccions !== undefined);
    const dataExists = (selectedData !== undefined && selectedData.variables !== undefined);

    let alt = '', nom, comarca, tmax, tmin, precipitacio, btn1, btn2;
    let src = 'images/empty.png';

    if(municipiExists){
      [ nom, comarca ] = this.renderMunicipi(municipi);

      if(prediccionsExists) 
        [ btn1, btn2 ] = this.renderPrediccions(prediccions.prediccions, selectedData);

      if(dataExists)
        [ alt, src, tmax, tmin, precipitacio ] = this.renderValues(selectedData.variables);
      
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

const mapStateToProps = (state) => {
  return { prediccions: state.prediccions, dates: state.dates }
};

export default connect( mapStateToProps, { predict, selectDate } )(ComparaItem);