import React from "react"

import "./HiddenLetter.css"

const DEFAULT_VALUE = "_"

const HiddenLetter = ({ value, reveal }) => (
  <span className="hidden-letter">{reveal ? value : DEFAULT_VALUE}</span>
)

export default HiddenLetter
