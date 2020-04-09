import React, { Component } from "react"
import faker from "faker"

import "./App.css"

import StatusBar from "./StatusBar"
import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

const INITIAL_CHANCES = 6
const STATUS_PLAYING = "playing"
const STATUS_SUCCEEDED = "succeeded"
const STATUS_FAILED = "failed"

function randomWord() {
  return faker.hacker.noun().toUpperCase()
}

class App extends Component {
  state = {
    lettersToGuess: randomWord().split(""),
    selectedLetters: [],
    chances: INITIAL_CHANCES,
    status: STATUS_PLAYING,
  }

  // Arrow fx for binding
  handleLetterClick = (letter) => {
    if(!this.state.selectedLetters.includes(letter)) {
      this.setState(
        (prevState, _props) => {
          const newSelectedLetters = [...prevState.selectedLetters, letter]
          const newState = { selectedLetters: newSelectedLetters }

          if(this.state.lettersToGuess.every((letter) => newSelectedLetters.includes(letter))) {
            newState["status"] = STATUS_SUCCEEDED
          }

          if(this.wrongGuess(letter)) {
            const newChances = prevState.chances - 1
            newState["chances"] = newChances

            if(newChances === 0) {
              newState["status"] = STATUS_FAILED
            }
          }

          return newState
        }
      )
    }
  }

  // Arrow fx for binding
  lauchNewGame = () => {
    this.setState({
      lettersToGuess: randomWord().split(""),
      selectedLetters: [],
      chances: INITIAL_CHANCES,
      status: STATUS_PLAYING
    })
  }

  wrongGuess(letter) {
    return !this.state.lettersToGuess.includes(letter)
  }

  render() {
    const { lettersToGuess, status, chances, selectedLetters } = this.state

    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <StatusBar
            gameStatus={status}
            chances={chances}
            lauchNewGame={this.lauchNewGame}
          />
          <HiddenWord
            reveal={status !== STATUS_PLAYING}
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
