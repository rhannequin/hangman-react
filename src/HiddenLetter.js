import React, { Component } from 'react'

import './HiddenLetter.css'

const DEFAULT_STATUS = 'unknown'
const DEFAULT_VALUE = "_"

class HiddenLetter extends Component {
  state = {
    status: DEFAULT_STATUS,
  }

  render() {
    const { value } = this.props
    const { status } = this.state

    return (
      <span className="hidden-letter">
        {status !== DEFAULT_STATUS ? value : DEFAULT_VALUE}
      </span>
    )
  }
}

export default HiddenLetter
