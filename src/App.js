import React, { Component } from "react"
import faker from "faker"

import "./App.css"

import ChancesCounter from "./ChancesCounter"
import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

const INITIAL_CHANCES = 6
const wordToGuess = faker.hacker.noun().toUpperCase()
const lettersToGuess = wordToGuess.split("")

class App extends Component {
  state = {
    selectedLetters: [],
    chances: INITIAL_CHANCES,
  }

  // Arrow fx for binding
  handleLetterClick = (letter) => {
    if(!this.state.selectedLetters.includes(letter)) {
      this.setState(
        (prevState, _props) => (
          { selectedLetters: [...prevState.selectedLetters, letter] }
        )
      )

      if(this.wrongGuess(letter)) {
        this.setState(
          (prevState, _props) => (
            { chances: prevState.chances - 1 }
          )
        )
      }
    }
  }

  wrongGuess(letter) {
    return !lettersToGuess.includes(letter)
  }

  render() {
    const { chances, selectedLetters } = this.state

    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <ChancesCounter chances={chances} />
          <HiddenWord
            lettersToGuess={lettersToGuess}
            selectedLetters={selectedLetters}
          />
          <Keyboard
            selectedLetters={selectedLetters}
            handleLetterClick={this.handleLetterClick}
          />
        </div>
      </div>
    )
  }
}

export default App
