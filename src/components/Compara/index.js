import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import ComparaTags from './ComparaTags';
import ComparaItem from './ComparaItem';
import './styles.css';
import 'antd/es/spin/style/css';

//Component que mostra la seccio de comparacio, les etiquetes i els dos municipis comparats, i gestiona el loading spinner
const Compara = () => {
  const [item1, item2] = useSelector(state => state.selected);
  const loading = useSelector(state => state.loading);

  const spinner = loading? <Spinner spinning={loading} size="large" /> : '';

  return(
  <section className="compare text-center">
    {spinner}
    <div className="row text-center wrapper">
      <ComparaTags />
      <ComparaItem municipi={item1 || {}} />
      <ComparaItem municipi={item2 || {}} />
    </div>
  </section>
  );
}  

export default Compara
