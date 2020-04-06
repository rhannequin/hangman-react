import React from 'react'
import './App.css'

import Keyboard from './Keyboard'

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <h1 className="ui header">Hangman React</h1>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
