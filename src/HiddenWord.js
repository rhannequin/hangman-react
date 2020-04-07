import React from "react"

import "./HiddenWord.css"

import HiddenLetter from "./HiddenLetter"

const HiddenWord = ({ reveal, lettersToGuess, selectedLetters }) => (
  <div className="ui segment">
    {lettersToGuess.map((letter, index) => (
      <HiddenLetter
        key={index}
        value={letter}
        reveal={reveal || selectedLetters.includes(letter)}
      />
    ))}
  </div>
)

export default HiddenWord
