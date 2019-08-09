import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Municipi from '../Municipi';
import { buildMunicipis, selectMunicipi, unselectMunicipi } from '../../actions';
import history from '../../history';
import './styles.css';


//Component que mostra la llista de municipis i la zona de comparacio. 
//Gestiona tota la logica de quins municipis es comparen i es mostren a la comparacio
const MunicipisList = (props) => {

  const municipis = useSelector(state => state.municipis);
  const compared = useSelector(state => state.selected);
  useEffect( () => { getMunicipis() }, [] );
  useEffect( () => { predictUrlMunicipis(props.codi1) }, [municipis, props.codi1] );
  useEffect( () => { predictUrlMunicipis(props.codi2) }, [municipis, props.codi2] );
  const dispatch = useDispatch();

  //Al haver carregat el component, s'extreu la llista de municipis del server
  const getMunicipis = () => {
    dispatch(buildMunicipis());
  }

  const predictUrlMunicipis = (codi) => {
    if(typeof codi !== 'undefined' && municipis.length > 0 && !isBeingCompared(codi))
      compareMunicipi(municipis.find(municipi => municipi.codi === codi));
  }

  //Funcio per deixar de comparar un municipi
  const removeMunicipi = async (codi) => {
    await dispatch(unselectMunicipi(codi));
    
    let url = '';

    if(typeof props.codi1 !== 'undefined' && codi !== props.codi1)
      url = `/${props.codi1}`;

    if(typeof props.codi2 !== 'undefined' && codi !== props.codi2)
      url = `/${props.codi2}`;

    history.push(url);
  }

  //S'afageix el municipi desitjat a l'objecte de comparacions, altre cop en un array hauria set mes senzill i entenedor
  const compareMunicipi = async (municipi) => {
    if(compared.length <= 1){
      await dispatch(selectMunicipi(municipi));

      let url = '';

      if(typeof props.codi1 !== 'undefined')
        url = `/${props.codi1}`;

      if(municipi.codi !== props.codi1){
        url += `/${municipi.codi}`;
        history.push(url);
      }
      
    }
  }

  const isBeingCompared = (codi) => {
    const found = compared.find((compared) => { return compared.codi === codi});
    return found !== undefined;
  }

  return (
    <section className="municipisList">
      <ul className="row mt-3">
      {municipis.map(municipi =>
        <Municipi 
          key={municipi.codi} 
          municipi={municipi} 
          compareMunicipi={() => compareMunicipi(municipi)} 
          removeMunicipi={() => removeMunicipi(municipi.codi)} 
          compared={isBeingCompared(municipi.codi)} 
          disabled={compared.length >= 2}/>
      )}
      </ul>
    </section>
  )

}

export default MunicipisList;
