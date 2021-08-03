import React from 'react';
import { useProvideContext } from './context';

const AddPlayerForm = () => {
  const {handleSubmit, setPlayerName, playerName} = useProvideContext(); 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter a player's name"
        onChange={(e) => setPlayerName(e.target.value)}
        value={playerName}
      />
      <input type="submit" />
    </form>
  );  
}

export default AddPlayerForm;