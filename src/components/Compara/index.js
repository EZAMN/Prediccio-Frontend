import React from 'react'
import { connect } from 'react-redux';
import ComparaTags from '../ComparaTags'
import ComparaItem from '../ComparaItem'
import './styles.css'

//Component que mostra la seccio de comparacio, les etiquetes i els dos municipis comparats
const Compara = ({compared}) => {
  const item1 = compared[0] || {};
  const item2 = compared[1] || {};

  return(
  <section className="compare text-center">
    <div className="row text-center wrapper">
      <ComparaTags />
      <ComparaItem municipi={item1} />
      <ComparaItem municipi={item2} />
    </div>
  </section>
  );
}  

const mapStateToProps = (state) => {
  return { compared: state.selected }
}

export default connect(mapStateToProps)(Compara);
