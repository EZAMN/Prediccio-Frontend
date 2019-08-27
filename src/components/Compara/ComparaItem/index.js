import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import nomImatge from '../../../config/imatges.js';
import DatesButton from './DatesButton';
import { predict, selectDate } from '../../../actions';
import './styles.css'


//Component per a mostrar el municipi comparat
//Gestiona la peticio al servidor per a les dates exteses i de prediccions del municipi requerit
//Gestiona el canvi de dates a partir de les dates extretes del servidor
const ComparaItem = (props) => {

  useEffect( () => { predictMunicipi(props.municipi) }, [props.municipi] );
  const municipi = props.municipi;
  const prediccions = useSelector(state => state.prediccions[municipi.codi]);
  const selectedData = useSelector(state => state.dates[municipi.codi]);
  const dispatch = useDispatch();

  //A l'actualitzar el municipi, si te municipi i no es el mateix que abans del canvi es demanen les prediccions al servidor
  const predictMunicipi = (oMunicipi) => {

    if (typeof oMunicipi.codi !== 'undefined') 
          dispatch(predict(oMunicipi.codi));

  }

  //Funcio per a canviar la data que es mostra, s'actualitzen les dates i es canvia l'estat dels botons (disabled o no)
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  const seleccionaData = (codi, date) => {

    const newDate = {
      codi: codi,
      ...date
    }

    dispatch(selectDate(newDate));
  }

  const renderMunicipi = (oMunicipi) => {
    return [ oMunicipi.nom, oMunicipi.comarca.nom ];
  }

  const renderValues = (variables) => {

    const rAlt = nomImatge[variables.estatCel.simbol + 'alt']
    const rSrc = '/images/' + nomImatge[variables.estatCel.simbol]
    const rTmax = variables.tmax.valor + " " + variables.tmax.unitats;
    const rTmin = variables.tmin.valor + " " + variables.tmin.unitats;
    const rPrecipitacio = variables.precipitacio.valor + " " + variables.precipitacio.unitat;
    
    return [ rAlt, rSrc, rTmax, rTmin, rPrecipitacio ]
  }

  const renderPrediccions = (oPrediccions, oSelectedData) => {

    const botons = oPrediccions.dies.map( (prediccio) => {
    
      return <DatesButton
        data={prediccio.data}
        onClick={() => seleccionaData(oPrediccions.codi, prediccio)} 
        disabled={ prediccio.data === oSelectedData.data } 
        />

    });
    
    return botons;
  }

  //Es guarden les dates de les que es disposa en prediccions i es mostra l'objecte amb aquestes prediccions.
  //Es podria fer un component per tenir els botons de dates en comptes de renderitzarlos aqui
  const municipiExists = (municipi !== undefined && municipi.codi !== undefined);
  const prediccionsExists = (prediccions !== undefined && prediccions.prediccions !== undefined);
  const dataExists = (selectedData !== undefined && selectedData.variables !== undefined);

  let alt = '', nom, comarca, tmax, tmin, precipitacio, btn1, btn2;
  let src = 'images/empty.png';

  if(municipiExists){
    [ nom, comarca ] = renderMunicipi(municipi);

    if(prediccionsExists) 
      [ btn1, btn2 ] = renderPrediccions(prediccions.prediccions, selectedData);

    if(dataExists)
      [ alt, src, tmax, tmin, precipitacio ] = renderValues(selectedData.variables);
    
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
  );

}

export default ComparaItem;