import React, { Component } from "react"

import "./HiddenWord.css"

import HiddenLetter from "./HiddenLetter"

const wordToGuess = "REACT"
const STATUS_FOUND = "found"
const STATUS_UNKNOWN = "unknown"

class HiddenWord extends Component {
  statusForLetter(letter) {
    return this.props.foundLetters.includes(letter) ? STATUS_FOUND : STATUS_UNKNOWN
  }

  render() {
    return (
      <div className="ui segment">
        {wordToGuess.split("").map(letter => (
          <HiddenLetter
            key={letter}
            value={letter}
            status={this.statusForLetter(letter)}
          />
        ))}
      </div>
    )
  }
}

export default HiddenWord
