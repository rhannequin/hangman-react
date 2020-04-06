import React, { Component } from 'react'
import './App.css'

import HiddenWord from './HiddenWord'
import Keyboard from './Keyboard'

class App extends Component {
  handleLetterClick(letter) {
    console.log("Clicked on keyboard letter", letter)
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <HiddenWord />
          <Keyboard handleLetterClick={this.handleLetterClick} />
        </div>
      </div>
    )
  }
}

export default App
