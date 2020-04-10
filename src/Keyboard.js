import React from "react"

import "./Keyboard.css"

import Letter from "./Letter"

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

function pickedStatus(value, selected, matchingValues) {
  if (selected.includes(value)) {
    return matchingValues.includes(value)
  }
}

const Keyboard = ({
  enabled,
  lettersToGuess,
  selectedLetters,
  handleLetterClick,
}) => {
  return (
    <div className="ui segment keyboard">
      {LETTERS.map((letterValue) => (
        <Letter
          key={letterValue}
          value={letterValue}
          enabled={enabled}
          picked={selectedLetters.includes(letterValue)}
          pickedStatus={pickedStatus(
            letterValue,
            selectedLetters,
            lettersToGuess
          )}
          onClick={handleLetterClick}
        />
      ))}
    </div>
  )
}

export default Keyboard
