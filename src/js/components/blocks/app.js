import React from 'react'
import Style from './style.css'

class test extends React.Component {
    render() {
        return (
          <div>
            <div className={Style.test}>Hello world!</div>
            <div className="test">kwehjfbewk</div>
          </div>
        )
    }
}

export default test