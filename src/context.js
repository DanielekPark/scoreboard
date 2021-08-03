import React, {useState, useContext, useEffect } from 'react';

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [playerList, setPlayerList] = useState([]); 
  const [playerName, setPlayerName] = useState('');
  const [isWatchRunning, setIsWatchRunning] = useState(false);
  const [previousTime, setPreviousTime] = useState(0); 
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(playerName){
      const newPlayer = {
        name: playerName,
        id: new Date().getTime().toString(),
        score: 0
      }
      playerList.push(newPlayer);
      setPlayerName('');       
    }
  }

  const handleScoreChange = (id, num) => {
    const players = playerList.map((player) => {
      if(id === player.id) return {...player, score: player.score + num};
      return {...player}
    });
    setPlayerList(players); 
  }

  const handleRemovePlayer = (id) => {
    const filteredPlayers = playerList.filter((player) => player.id !== id);
    setPlayerList(filteredPlayers); 
  }

  const resetTimer = () => {
    setIsWatchRunning(false);
    setElapsedTime(0); 
  }

  useEffect(() => { 
    //set the timer for the interval value in the return statement
    let timer;  
    //which should clear the timer useState   
    if(isWatchRunning){
      setPreviousTime(Date.now()); 
      timer = new Promise((resolve, reject) => {
        setInterval(() => {
          resolve([Math.floor(Date.now() - previousTime) / 1000]); 
        }, 1000);
      }); 
      setElapsedTime(timer)
    }
    return () => clearInterval(timer); 
  }, [isWatchRunning]); 
//everytime something in the array changes it'll re-execute, if the value is stable don't put it in the dependency
//if the value changes dependency function in the useeffect fires. 
  
  return (
    <ProvideContext.Provider value={{handleSubmit, setPlayerName, playerList, playerName, handleScoreChange, resetTimer, isWatchRunning, setIsWatchRunning, elapsedTime, handleRemovePlayer}}>
     {children}
    </ProvideContext.Provider>
  )
}

export const useProvideContext = () => useContext(ProvideContext); 
export {ProvideContext, AppProvider}; 

  // const handleStopwatch = () => {
  //   setIsWatchRunning(!isWatchRunning);
  //   if(isWatchRunning){
  //     setPreviousTime(Date.now()); 
  //   }
  //   console.log(previousTime); 
  // }