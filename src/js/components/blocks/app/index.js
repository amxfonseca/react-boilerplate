import React from 'react'
import Style from './style.css'
import Styling from './styling.css'
import Button from '../../fragments/button'

class test extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
      currentNumber: 0
    }
  }

  toggleActive() {
    const { active } = this.state

    this.setState({ active: !active})
  }

  plusONe() {
    const { currentNumber } = this.state

    this.setState({ currentNumber: currentNumber + 1 })
  }

  render() {
    const { currentNumber, active } = this.state
    const activeClass = active ? Style.testActive : ""

    return (
      <div>
        <div className={`${Style.wrapper} ${activeClass}`}>
          <div onClick={this.plusONe.bind(this)}>{currentNumber}</div>
        </div>
        <div className={Style.testing}></div>
      </div>
    )
  }
}

export default test
