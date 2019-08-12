import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '../ErrorBoundary';
import MunicipisList from '../../components/MunicipisList';
import Compara from '../../components/Compara';


//Carrega la home, el header i el component principal de l'aplicacio MunicipisList
const Home = (props) => {
  const toastOptions = {autoClose:15000}

  return (
    <ErrorBoundary>
      <div className="home mt-5">
        <MunicipisList {...props.match.params} />
        <Compara />
      </div>
      <ToastContainer {...toastOptions} />
    </ErrorBoundary>
  )
}

export default Home
