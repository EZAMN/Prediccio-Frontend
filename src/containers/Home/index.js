import React, {Component} from 'react'
import MunicipisList from '../../components/MunicipisList'

//Carrega la home, el header i el component principal de l'aplicacio MunicipisList
class Home extends Component {
  render() {
    return (
      <div className="home mt-5">
        <MunicipisList />
      </div>
    )
  }
}

export default Home
