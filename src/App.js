import './App.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from 'pages/Home'
import History from './pages/History'
import About from './pages/About'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/history' component={History}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  )
}

export default App
