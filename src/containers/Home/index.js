import React from 'react';
import MunicipisList from '../../components/MunicipisList';
import Compara from '../../components/Compara';

//Carrega la home, el header i el component principal de l'aplicacio MunicipisList
const Home = (props) => {
  return (
    <div className="home mt-5">
      <MunicipisList {...props.match.params} />
      <Compara />
    </div>
  )
}

export default Home
