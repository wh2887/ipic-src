import './App.css'
import React, {useReducer} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'pages/Home'
import History from './pages/History'
import About from './pages/About'
import Header from './components/Header'
import Context from './stores'
import userReducer from './reducers/user_reducers'
import AuthStore from './stores/auth'


const obj = {
  ...userReducer,
}

const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error('未知类型')
  }
}

function App() {
  const [visible, dispatch] = useReducer(reducer, AuthStore)
  const api = {visible, dispatch}
  return (
    <Context.Provider value={api}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/history' component={History}/>
          <Route path='/about' component={About}/>
        </Switch>

      </div>
    </Context.Provider>
  )
}

export default App
