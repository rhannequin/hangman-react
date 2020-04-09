import React from "react"

const STATUS_PLAYING = "playing"
const STATUS_SUCCESS = "succeeded"
const STATUS_FAIL = "failed"

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

const StatusBar = ({ chances, gameStatus, lauchNewGame }) => (
  <div className="ui segment keyboard">
    {
      gameStatus === STATUS_PLAYING &&
      <p>{label(chances)}</p>
    }

    {
      gameStatus === STATUS_SUCCESS &&
      <p className="ui green header">Well done!</p>
    }

    {
      gameStatus === STATUS_FAIL &&
      <p className="ui red header">Game over</p>
    }

    {
      (gameStatus === STATUS_SUCCESS || gameStatus === STATUS_FAIL) &&
      <p>
        <button
          onClick={lauchNewGame}
          className="ui green button"
        >
          Start new game
        </button>
      </p>
    }
  </div>
)

export default StatusBar
