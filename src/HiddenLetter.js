import React, { Component } from "react"

import "./HiddenLetter.css"

const DEFAULT_STATUS = "unknown"
const DEFAULT_VALUE = "_"

class HiddenLetter extends Component {
  render() {
    const { value, status } = this.props

    return (
      <span className="hidden-letter">
        {status !== DEFAULT_STATUS ? value : DEFAULT_VALUE}
      </span>
    )
  }
}

export default HiddenLetter
