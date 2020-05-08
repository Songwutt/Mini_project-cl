import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Add from './components/Add'


function App () {
  return (
    <div>
      
        <Router>
        <Switch>
        
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Add' exact component={Add}/>
       
        </Switch>
        </Router>
      
      
    </div>
  )
}
export default  App