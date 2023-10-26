import { useState } from "react";
import '../styles/Header.css'

export function Header({score, bestScore}) {
  return (
    <div className='page-header'>
        <div className="page-logo"><h1>Memory Game</h1></div>
        <div className="rules"><p>Try to click as many gifs as you can without clicking the same gif twice!</p></div>
        <div className="score">
          <h2 className="current-score">Score: {score}</h2>
          <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
    </div>
  )
}