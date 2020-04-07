import React, { Component } from "react"
import faker from "faker"

import "./App.css"

import ChancesCounter from "./ChancesCounter"
import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

const INITIAL_CHANCES = 6
const STATUS_PLAYING = "playing"
const STATUS_SUCCEEDED = "succeeded"
const STATUS_FAILED = "failed"

const wordToGuess = faker.hacker.noun().toUpperCase()
const lettersToGuess = wordToGuess.split("")

function wrongGuess(letter) {
  return !lettersToGuess.includes(letter)
}

class App extends Component {
  state = {
    selectedLetters: [],
    chances: INITIAL_CHANCES,
    status: STATUS_PLAYING,
  }

  // Arrow fx for binding
  handleLetterClick = (letter) => {
    if(!this.state.selectedLetters.includes(letter)) {
      this.updateSelectedLetters(letter)

      if(wrongGuess(letter)) {
        this.updateChances()
      }
    }
  }

  updateSelectedLetters(letter) {
    this.setState(
      (prevState, _props) => {
        const newSelectedLetters = [...prevState.selectedLetters, letter]
        const newState = { selectedLetters: newSelectedLetters }

        if(lettersToGuess.every((letter) => newSelectedLetters.includes(letter))) {
          newState["status"] = STATUS_SUCCEEDED
        }

        return newState
      }
    )
  }

  updateChances() {
    this.setState(
      (prevState, _props) => {
        const newChances = prevState.chances - 1
        const newState = { chances: newChances }

        if(newChances === 0) {
          newState["status"] = STATUS_FAILED
        }

        return newState
      }
    )
  }

  render() {
    const { status, chances, selectedLetters } = this.state

    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <ChancesCounter gameStatus={status} chances={chances} />
          <HiddenWord
            lettersToGuess={lettersToGuess}
            selectedLetters={selectedLetters}
          />
          <Keyboard
            enabled={status === STATUS_PLAYING}
            lettersToGuess={lettersToGuess}
            selectedLetters={selectedLetters}
            handleLetterClick={this.handleLetterClick}
          />
        </div>
      </div>
    )
  }
}

export default App
