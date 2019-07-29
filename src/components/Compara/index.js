import React from 'react'
import ComparaTags from '../ComparaTags'
import ComparaItem from '../ComparaItem'
import './styles.css'

//Component que mostra la seccio de comparacio, les etiquetes i els dos municipis comparats
const Compara = ({compared}) =>
  <section className="compare text-center">
    <div className="row text-center wrapper">
      <ComparaTags />
      <ComparaItem municipi={compared.item1} />
      <ComparaItem municipi={compared.item2} />
    </div>
  </section>;
    

export default Compara
