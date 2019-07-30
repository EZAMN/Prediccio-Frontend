import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, NotFound} from '../';
import Header from '../../components/Header'

//Switch i Routes per a fer servir el router i poder gestionar l'historic
class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App
