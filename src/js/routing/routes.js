import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../app'
import Home from '../pages/home'
import Appie from '../components/blocks/app'


function Routes() {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/appie" component={Appie}/>
      </Route>
    </Router>
  )
}

export default Routes