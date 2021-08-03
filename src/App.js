import React from 'react';
import Header from './Header';
// import PlayerList from './PlayerList';
import Player from './Player'; 
import AddPlayerForm from './AddPlayerForm';
import { useProvideContext } from './context';

const App = () => {
  const {playerList} = useProvideContext(); 
  
  return (
    <div className="scoreboard">
      <Header />
      {/* <PlayerList /> */}
      {playerList.map((plyr, index) => {
        return(
          <Player {...plyr} key={index} />
        )
      })}
      <AddPlayerForm />
    </div>
  )
}
export default App;
