import React, { useState } from "react";
import "./GameOver.css";
function GameOver({score, handleRestart, handleGoHome}) {
  return (
    <div className="game-over-message">
      <h2>
        Time is up!
        <br />
        Game Over.
      </h2>
      <h3 id="game-over-message-score">Your score: {score}</h3>
      <h3>Do you want to start again?</h3>
      <button onClick={handleRestart}>Yes</button>
      <button onClick={handleGoHome}>No</button>
    </div>
  );
}

export default GameOver
