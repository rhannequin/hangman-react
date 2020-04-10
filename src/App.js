import React, { useState } from "react"
import faker from "faker"

import "./App.css"

import StatusBar from "./StatusBar"
import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"

const INITIAL_CHANCES = 6
const STATUS_PLAYING = "playing"
const STATUS_SUCCEEDED = "succeeded"
const STATUS_FAILED = "failed"

const randomWordLetters = () => faker.hacker.noun().toUpperCase().split("")

const App = () => {
  const [appState, setAppState] = useState({
    lettersToGuess: randomWordLetters(),
    selectedLetters: [],
    chances: INITIAL_CHANCES,
    status: STATUS_PLAYING,
  })

  const lauchNewGame = () => {
    setAppState({
      lettersToGuess: randomWordLetters(),
      selectedLetters: [],
      chances: INITIAL_CHANCES,
      status: STATUS_PLAYING,
    })
  }

  const handleLetterClick = (letter) => {
    setAppState((prevState) => {
      const newSelectedLetters = [...prevState.selectedLetters, letter]
      const newState = { ...prevState, selectedLetters: newSelectedLetters }

      if (
        appState.lettersToGuess.every((letter) =>
          newSelectedLetters.includes(letter)
        )
      ) {
        newState.status = STATUS_SUCCEEDED
      }

      if (wrongGuess(letter)) {
        const newChances = prevState.chances - 1
        newState.chances = newChances

        if (newChances === 0) {
          newState.status = STATUS_FAILED
        }
      }

      return newState
    })
  }

  const wrongGuess = (letter) => {
    return !appState.lettersToGuess.includes(letter)
  }

  return (
    <div className="App">
      <div className="ui container">
        <h1 className="ui header">Hangman React</h1>
        <StatusBar
          gameStatus={appState.status}
          chances={appState.chances}
          lauchNewGame={lauchNewGame}
        />
        <HiddenWord
          reveal={appState.status !== STATUS_PLAYING}
          lettersToGuess={appState.lettersToGuess}
          selectedLetters={appState.selectedLetters}
        />
        <Keyboard
          enabled={appState.status === STATUS_PLAYING}
          lettersToGuess={appState.lettersToGuess}
          selectedLetters={appState.selectedLetters}
          handleLetterClick={handleLetterClick}
        />
      </div>
    </div>
  )
}

export default App
