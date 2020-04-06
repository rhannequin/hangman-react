import React from 'react'

import './Letter.css'

const Letter = ({ value, onClick }) => (
  <span className="letter">
      <button
      className="ui button"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  </span>
)

export default Letter
