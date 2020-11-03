import './App.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'pages/Home'
import History from './pages/History'
import About from './pages/About'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/history' component={History}/>
        <Route path='/about' component={About}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  )
}

export default App
