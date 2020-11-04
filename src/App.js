import './App.css'
import React, {useReducer} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'pages/Home'
import History from './pages/History'
import About from './pages/About'
import Header from './components/Header'
import Context from './stores'
import user_reducers from './reducers/user_reducers'
import AuthStore from './stores/auth'

const store = {
  visible: false
}

const reducer = (state,action) => {
  switch (action.type){
    case "drawerToggle":
      return {...state,visible:action.visible}
  }
}

function App() {
  const [ visible,dispatch ] = useReducer(reducer,store)
  const api = {visible,dispatch}
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
