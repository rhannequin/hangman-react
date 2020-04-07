import React, { Component } from "react"

import "./HiddenWord.css"

import HiddenLetter from "./HiddenLetter"

const STATUS_FOUND = "found"
const STATUS_UNKNOWN = "unknown"

class HiddenWord extends Component {
  statusForLetter(letter) {
    return this.props.selectedLetters.includes(letter) ? STATUS_FOUND : STATUS_UNKNOWN
  }

  render() {
    const { lettersToGuess } = this.props

    return (
      <div className="ui segment">
        {lettersToGuess.map((letter, index) => (
          <HiddenLetter
            key={index}
            value={letter}
            status={this.statusForLetter(letter)}
          />
        ))}
      </div>
    )
  }
}

export default HiddenWord
