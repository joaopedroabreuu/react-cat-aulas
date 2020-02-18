import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Home from './views/Home';
import About from './views/About';
import Cep from './views/Cep';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cep/:cep" component={Cep} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
