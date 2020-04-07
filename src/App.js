import React, { Component } from "react"
import "./App.css"

import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

class App extends Component {
  state = {
    foundLetters: [],
  }

  // Arrow fx for binding
  handleLetterClick = (letter) => {
    if(!this.state.foundLetters.includes(letter)) {
      this.setState(
        (prevState, _) => (
          { foundLetters: [...prevState.foundLetters, letter] }
        )
      )
    }
  }

  render() {
    const { foundLetters } = this.state

    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <HiddenWord foundLetters={foundLetters} />
          <Keyboard handleLetterClick={this.handleLetterClick} />
        </div>
      </div>
    )
  }
}

export default App
