import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './../components/blocks/app'
import Block from './../components/blocks/block'

function Routes() {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/block" component={Block}/>
    </Router>
  )
}

export default Routes