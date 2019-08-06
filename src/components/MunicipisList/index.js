import React, { Component } from 'react';
import { connect } from 'react-redux';
import Municipi from '../Municipi';
import { buildMunicipis, selectMunicipi, unselectMunicipi } from '../../actions';
import history from '../../history';
import './styles.css';


//Component que mostra la llista de municipis i la zona de comparacio. 
//Gestiona tota la logica de quins municipis es comparen i es mostren a la comparacio
class MunicipisList extends Component {

  //Al haver carregat el component, s'extreu la llista de municipis del server
  async componentDidMount() {
    await this.props.buildMunicipis();

    if(typeof this.props.codi1 !== 'undefined')
      this.compareMunicipi(this.props.municipis.find(municipi => municipi.codi === this.props.codi1));
      
    if(typeof this.props.codi2 !== 'undefined')
      this.compareMunicipi(this.props.municipis.find(municipi => municipi.codi === this.props.codi2));
    
  }

  //Funcio per deixar de comparar un municipi
  removeMunicipi(codi) {
    this.props.unselectMunicipi(codi);
  }

  //S'afageix el municipi desitjat a l'objecte de comparacions, altre cop en un array hauria set mes senzill i entenedor
  async compareMunicipi(municipi) {
    if(this.props.compared.length <= 1){
      await this.props.selectMunicipi(municipi);

      let url = '';

      if(typeof this.props.codi1 !== 'undefined')
        url = `/${this.props.codi1}`;

      url += `/${municipi.codi}`;
      history.push(url);
      
    }
  }

  isBeingCompared(municipi) {
    const found = this.props.compared.find((compared) => { return compared.codi === municipi.codi});
    return found !== undefined;
  }

  render() {
    return (
      <section className="municipisList">
        <ul className="row mt-3">
        {this.props.municipis.map(municipi =>
          <Municipi 
            key={municipi.codi} 
            municipi={municipi} 
            compareMunicipi={(e) => this.compareMunicipi(municipi, e)} 
            removeMunicipi={(e) => this.removeMunicipi(municipi.codi, e)} 
            compared={this.isBeingCompared(municipi)} 
            disabled={this.props.compared.length >= 2}/>
        )}
        </ul>
      </section>
    )
  }

}

const mapStateToProps = (state) => {
  return { municipis: state.municipis, compared: state.selected }
}

export default connect(
    mapStateToProps,
    { buildMunicipis, selectMunicipi, unselectMunicipi }
  )(MunicipisList);
