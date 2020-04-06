import React from 'react'

import './Letter.css'

const Letter = ({ value }) => (
  <span className="letter">
    <button className="ui button">{value}</button>
  </span>
)

export default Letter
