import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Municipi from './Municipi';
import { buildMunicipis, selectMunicipi, unselectMunicipi } from '../../actions';
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

  //Funcio per actualitzar els municipis passats per la URL
  const predictUrlMunicipis = async (codi) => {
    if(typeof codi !== 'undefined' && municipis.length > 0 && !isBeingCompared(codi))
      await compareMunicipi(municipis.find(municipi => municipi.codi === codi));

    cleanupMunicipis();
  }

  //Funcio per netejar els municipis que ja no s'estan comparant
  const cleanupMunicipis = () => {
    Object.keys(compared).forEach( (municipi) => {
      const codi = compared[municipi].codi;
      if(codi !== props.codi1 && codi !== props.codi2){ 
        removeMunicipi(codi) 
      }
    });
  }

  //Funcio per deixar de comparar un municipi
  const removeMunicipi = (codi) => {
    dispatch(unselectMunicipi(codi));
  }

  //S'afageix el municipi desitjat a l'objecte de comparacions, altre cop en un array hauria set mes senzill i entenedor
  const compareMunicipi = async (municipi) => {
    if(compared.length <= 1)
      await dispatch(selectMunicipi(municipi)); 
    
  }

  //Funcio per determinar si un municipi esta essent comparat o no
  const isBeingCompared = (codi) => {
    const found = compared.find((iCompared) => { return iCompared.codi === codi});
    return found !== undefined;
  }

  return (
    <section className="municipisList">
      <ul className="row mt-3">
      {municipis.map(municipi =>
        <Municipi 
          key={municipi.codi} 
          municipi={municipi} 
          compared={isBeingCompared(municipi.codi)} 
          disabled={compared.length >= 2}
          currentUrl={{ codi1:props.codi1, codi2:props.codi2 }} />
      )}
      </ul>
    </section>
  )

}

export default MunicipisList;
