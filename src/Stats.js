import React from 'react';
import { useProvideContext } from './context';

const Stats = () => {
  const {playerList} = useProvideContext(); 
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:{playerList.length}</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Points:{playerList.reduce((total, player) => {
            total += player.score; 
            return total; 
          }, 0)}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;