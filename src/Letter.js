import React from "react"

import "./Letter.css"

const DISABLED_CLASS = "disabled"
const SUCCESS_CLASS = "positive"
const FAIL_CLASS = "negative"

function pickedClass(picked, status) {
  if(!picked) {
    return ""
  }

  return ` ${DISABLED_CLASS} ${status ? SUCCESS_CLASS : FAIL_CLASS}`
}

const Letter = ({ value, picked, pickedStatus, onClick }) => (
  <span className="letter">
    <button
      className={`ui button${pickedClass(picked, pickedStatus)}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  </span>
)

export default Letter
