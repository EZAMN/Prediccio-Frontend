import React, {Component} from 'react'
import MunicipisList from '../../components/MunicipisList'
var literals = require('../../config/literals.js') //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions

//Carrega la home, el header i el component principal de l'aplicacio MunicipisList
class Home extends Component {
  render() {
    return (
      <div className="home mt-5">
        <header className="row">
          <div className="col-12">
            <h2 className="mb-3">{literals.default.header}</h2>
          </div>
        </header>
        <MunicipisList />
      </div>
    )
  }
}

export default Home
