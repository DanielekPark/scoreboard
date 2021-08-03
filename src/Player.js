import React from 'react';
import Counter from './Counter'; 
import { useProvideContext } from './context';

const Player = ({name, score, id}) => {
  const {handleRemovePlayer} = useProvideContext(); 
  return(
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => handleRemovePlayer(id)}>✖</button>{name}
      </span>
      <Counter score={score} id={id} />
    </div>
  )
}

export default Player; 