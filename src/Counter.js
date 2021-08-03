import React from 'react';
import { useProvideContext } from './context';

const Counter = ({score, id}) => {
  const {handleScoreChange} = useProvideContext();

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => handleScoreChange(id, -1)}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => handleScoreChange(id, 1)}> + </button>
    </div>
  )
}

export default Counter; 