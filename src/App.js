import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { Navigation } from './components';
import './App.scss'

const App = () => {
  return <div className="App">
    <Navigation />
    <BrowserRouter>
      <Switch>
        { routes.map(route => <Route path={route.path} component={route.component} exact />)}
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
