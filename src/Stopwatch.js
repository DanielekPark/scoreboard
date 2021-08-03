import React from 'react';
import { useProvideContext } from './context';

const Stopwatch = () => {
  const {isWatchRunning, elapsedTime, setIsWatchRunning, resetTimer} = useProvideContext();

  return (
    <div className="stopwatch">
     <h2>Stopwatch</h2>
     <span className="stopwatch-time">{elapsedTime}</span>
     <button onClick={() => setIsWatchRunning(!isWatchRunning)}>{isWatchRunning ? 'Stop' : 'Start'}</button>
     <button onClick={resetTimer}>Reset</button>
    </div>
  ); 
}

export default Stopwatch; 