import React from 'react'
import { Link } from 'react-router'
function Block(props) {

  return(
    <div>
      <Link to={"/appie"}><h1>to appie</h1></Link>
      <p>I come from a different file</p>
    </div>
  )
}

export default Block
