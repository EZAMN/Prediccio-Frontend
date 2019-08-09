import React from 'react'
import { useSelector } from 'react-redux';
import ComparaTags from '../ComparaTags'
import ComparaItem from '../ComparaItem'
import './styles.css'

//Component que mostra la seccio de comparacio, les etiquetes i els dos municipis comparats
const Compara = () => {
  const [item1, item2] = useSelector(state => state.selected);

  return(
  <section className="compare text-center">
    <div className="row text-center wrapper">
      <ComparaTags />
      <ComparaItem municipi={item1 || {}} />
      <ComparaItem municipi={item2 || {}} />
    </div>
  </section>
  );
}  

export default Compara
