import React from 'react'
import Style from './style.css'
import Styling from './styling.css'

class test extends React.Component {
    render() {
        return (
          <div>
            <div className={Style.test}>
               I'm auto-prefixed and have nested custom media queries
               <p>I'm a paragraph with a nested hover</p>
               <div>Hello</div>
            </div>

            <div className={Styling.testTwo}>I have an imported variable!</div>
          </div>
        )
    }
}

export default test
