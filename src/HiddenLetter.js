import React from "react"

import "./HiddenLetter.css"

const DEFAULT_STATUS = "unknown"
const DEFAULT_VALUE = "_"

const HiddenLetter = ({ value, status }) => {
  return (
    <span className="hidden-letter">
      {status !== DEFAULT_STATUS ? value : DEFAULT_VALUE}
    </span>
  )
}

export default HiddenLetter
