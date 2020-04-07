import React from "react"

function label(chances) {
  switch(chances) {
    case 0:
      return "0 chance left"
    case 1:
      return "Only 1 chance remaining"
    default:
      return `${chances} chances remaining`
  }
}

const ChancesCounter = ({ chances }) => (
  <div className="ui segment keyboard">
    <p>{label(chances)}</p>
  </div>
)

export default ChancesCounter
