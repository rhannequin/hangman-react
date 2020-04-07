import React from "react"

import "./Letter.css"

const DISABLED_CLASS = "disabled"

const Letter = ({ value, alreadySelected, onClick }) => (
  <span className="letter">
    <button
      className={`ui button ${alreadySelected ? DISABLED_CLASS : ""}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  </span>
)

export default Letter
