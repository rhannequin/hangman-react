import React, { Component } from 'react'

import './HiddenWord.css'

import HiddenLetter from './HiddenLetter'

const wordToGuess = "REACT"

class HiddenWord extends Component {
  render() {
    return (
      <div className="ui segment">
        {wordToGuess.split("").map(letter => (
          <HiddenLetter key={letter} value={letter} />
        ))}
      </div>
    )
  }
}

export default HiddenWord
