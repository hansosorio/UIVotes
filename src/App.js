import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';
import PastTrials from './containers/PastTrials/PastTrials';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import LogIn from './containers/LogIn/LogIn';
import SignUp from './containers/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/past-trials" component={PastTrials} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
