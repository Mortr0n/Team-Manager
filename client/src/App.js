import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import ManagePlayer from './views/ManagePlayer';
import PlayerStatus from './views/PlayerStatus';

function App() {
  const [ players, setPlayers ] = useState([]);

  // for removing the item from the list after deletion from DB
  const removeFromDom = (playerId) => {
    setPlayers(players.filter(player => player._id !== playerId));
  }

  return (
    <div className="App">
      {/* Main Routes */}
      <Router>
        <ManagePlayer path="/player/:pathVar/:id" players={players} setPlayers={setPlayers} removeFromDom={removeFromDom} />
        <PlayerStatus path="/status/game/:gameId" players={players} setPlayers={setPlayers} />
      </Router>
      
    </div>
  );
}

export default App;
