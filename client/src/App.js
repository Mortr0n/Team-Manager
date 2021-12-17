import React, { useState } from 'react';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import CreatePlayer from './views/CreatePlayer';


function App() {
  const [ players, setPlayers ] = useState([]);
  const [ player, setPlayer ] = useState("");

  return (
    <div className="App">
      <Router>
        <CreatePlayer path="/player" />
      </Router>
      
    </div>
  );
}

export default App;
