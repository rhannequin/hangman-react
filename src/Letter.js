import React from "react"

import "./Letter.css"

const DISABLED_CLASS = "disabled"
const SUCCESS_CLASS = "positive"
const FAIL_CLASS = "negative"

function pickedClass(enabled, picked, status) {
  if(!enabled) {
    return ` ${DISABLED_CLASS}`
  }

  if(!picked) {
    return ""
  }

  return ` ${DISABLED_CLASS} ${status ? SUCCESS_CLASS : FAIL_CLASS}`
}

const Letter = ({ value, enabled, picked, pickedStatus, onClick }) => (
  <span className="letter">
    <button
      className={`ui button${pickedClass(enabled, picked, pickedStatus)}`}
      onClick={() => enabled && onClick(value)}
    >
      {value}
    </button>
  </span>
)

export default Letter
