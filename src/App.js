import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/General/Navbar'
import FrontPage from './components/General/FrontPage'
import VirtualWaitingRoom from './components/WaitingRoom/VirtualWaitingRoom'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/waitingroom' component={VirtualWaitingRoom} />
      </Switch>
    </div>
  )
}

export default App
