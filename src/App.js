import './App.css'
import React, {Suspense, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Loading from './components/Loading'

const Home = lazy(() => import('pages/Home'))
const History = lazy(() => import('pages/History'))
const About = lazy(() => import('pages/About'))

function App() {
  return (
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
  )
}

export default App
