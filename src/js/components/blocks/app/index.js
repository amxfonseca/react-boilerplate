import React from 'react'
import Style from './style.css'
import Styling from './styling.css'
import Variables from '../../../../style/variables/variables.css'
// import Main from '../../../../style/main.css'

class test extends React.Component {
    render() {
        return (
          <div>
            <div className={Variables.wrapper}>
              <div className={Style.test}>
                I'm auto-prefixed and have nested custom media queries
                <p>I'm a paragraph with a nested hover</p>
                <div>Hello</div>
              </div>

              <div className={Styling.testTwo}>I have an imported variable!</div>
            </div>

            <p>helowekfefj</p>
          </div>
        )
    }
}

export default test
