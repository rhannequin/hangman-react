import React, { Component } from "react"
import faker from "faker"

import "./HiddenWord.css"

import HiddenLetter from "./HiddenLetter"

const wordToGuess = faker.hacker.noun().toUpperCase()
const STATUS_FOUND = "found"
const STATUS_UNKNOWN = "unknown"

class HiddenWord extends Component {
  statusForLetter(letter) {
    return this.props.selectedLetters.includes(letter) ? STATUS_FOUND : STATUS_UNKNOWN
  }

  render() {
    return (
      <div className="ui segment">
        {wordToGuess.split("").map((letter, index) => (
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
