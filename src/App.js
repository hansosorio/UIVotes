import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Content} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
