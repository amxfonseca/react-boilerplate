import React from 'react'
import Style from './style.css'
import Styling from './styling.css'
import Button from '../../fragments/button'

class test extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  toggleActive() {
    const { active } = this.state

    this.setState({ active: !active})
  }

  render() {
    const { active} = this.state
    const activeClass = active ? Style.testActive : ""

    return (
      <div>
        <div className={`${Style.wrapper} ${activeClass}`}>
          <div onClick={this.toggleActive.bind(this)}>ekjfnejk</div>
        </div>
        <div className={Style.testing}></div>
      </div>
    )
  }
}

export default test
