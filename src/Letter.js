import React, { useCallback } from "react"
import classNames from "classnames"

import "./Letter.css"

const SUCCESS_CLASS = "positive"
const FAIL_CLASS = "negative"

const Letter = ({ value, enabled, picked, pickedStatus, onClick }) => {
  const handleClick = useCallback(() => onClick(value), [value, onClick])
  const classes = classNames("ui", "button", {
    [SUCCESS_CLASS]: picked && pickedStatus,
    [FAIL_CLASS]: picked && !pickedStatus,
  })

  return (
    <span className="letter">
      <button
        className={classes}
        onClick={handleClick}
        disabled={!enabled || picked}
      >
        {value}
      </button>
    </span>
  )
}

export default Letter
