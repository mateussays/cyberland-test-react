import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import './App.scss'

function App() {
  return (
    <Switch>
      <Route path="/detalhes/:id" component={ Detail } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default App;
