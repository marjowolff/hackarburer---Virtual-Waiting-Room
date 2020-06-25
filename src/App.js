import React from 'react'
import { Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
import VirtualWaitingRoom from './components/VirtualWaitingRoom'

import './App.css';

const App = () => {

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/waitingroom" component={VirtualWaitingRoom} />
        </Switch>
    </div>
  );
}

export default App;
