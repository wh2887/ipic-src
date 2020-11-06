import './App.css'
import React, {useReducer, Suspense, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Context from './stores'
import userReducer from './reducers/user_reducers'
import AuthStore from './stores/auth'
import Loading from './components/Loading'


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

const Home = lazy(() => import('pages/Home'))
const History = lazy(() => import('pages/History'))
const About = lazy(() => import('pages/About'))

function App() {
  const [visible, dispatch] = useReducer(reducer, AuthStore)
  const api = {visible, dispatch}
  return (
    <Context.Provider value={api}>
      <div className="App">
        <Header/>
        <Suspense fallback={<Loading size="large"/>}>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/history' component={History}/>
            <Route path='/about' component={About}/>
          </Switch>

        </Suspense>

      </div>
    </Context.Provider>
  )
}

export default App
