import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const persistedScore = Number(localStorage.getItem("score"));
  const [score, setScore] = useState(persistedScore || 0)

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score])


  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}
