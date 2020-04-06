import React, { Component } from 'react'
import './App.css'

import HiddenWord from './HiddenWord'
import Keyboard from './Keyboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <h1 className="ui header">Hangman React</h1>
          <HiddenWord />
          <Keyboard />
        </div>
      </div>
    )
  }
}

export default App
