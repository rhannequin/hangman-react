import React from "react"

import "./Keyboard.css"

import Letter from "./Letter"

const LETTERS = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

const Keyboard = ({ selectedLetters, handleLetterClick }) => {
  return (
    <div className="ui segment keyboard">
      {LETTERS.map((letterValue) => (
        <Letter
          key={letterValue}
          value={letterValue}
          alreadySelected={selectedLetters.includes(letterValue)}
          onClick={handleLetterClick}
        />
      ))}
    </div>
  )
}

export default Keyboard
