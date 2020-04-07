import React, { Component } from "react"
import "./App.css"

import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

class App extends Component {
  state = {
    selectedLetters: [],
  }

  // Arrow fx for binding
  handleLetterClick = (letter) => {
    if(!this.state.selectedLetters.includes(letter)) {
      this.setState(
        (prevState, _props) => (
          { selectedLetters: [...prevState.selectedLetters, letter] }
        )
      )
    }
  }

  render() {
    const { selectedLetters } = this.state

    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <HiddenWord selectedLetters={selectedLetters} />
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
