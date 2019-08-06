import React, {Component} from 'react'
import MunicipisList from '../../components/MunicipisList'
import Compara from '../../components/Compara';

//Carrega la home, el header i el component principal de l'aplicacio MunicipisList
class Home extends Component {
  render() {
    return (
      <div className="home mt-5">
        <MunicipisList {...this.props.match.params} />
        <Compara />
      </div>
    )
  }
}

export default Home
