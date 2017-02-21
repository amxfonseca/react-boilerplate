import React from 'react'
import Block from './block.js'
import Style from './style.css'
import Styling from './styling.css'

class test extends React.Component {
    render() {
        return (
          <div>
            <div className={Style.test}>
               Hello world!
               <p>hello back</p>
            </div>
            <Block/>
            <div className={Styling.testTwo}>kwehjfbewk</div>
          </div>
        )
    }
}

export default test