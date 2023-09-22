import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Importez les autres pages ici (Calendar, Ranking)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/ranking" component={Ranking} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
