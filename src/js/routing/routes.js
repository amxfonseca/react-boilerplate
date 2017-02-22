import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../app'
import Block from './../components/blocks/block'
import Appie from './../components/blocks/app'


function Routes() {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Appie}/>
        <Route path="/block" component={Block}/>
        <Route path="/appie" component={Appie}/>
      </Route>
    </Router>
  )
}

export default Routes