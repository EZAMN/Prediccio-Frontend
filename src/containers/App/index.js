import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, NotFound} from '../';
import Header from '../../components/Header'

//Switch i Routes per a fer servir el router i poder gestionar l'historic
const App = () => {
  return (
    <div className="container mt-4">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:codi1" component={Home}/>
        <Route exact path="/:codi1/:codi2" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}

export default App
