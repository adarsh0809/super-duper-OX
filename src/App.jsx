// App.jsx

import React from 'react';
import Board from './components/Board';
import './style.css';

function App() {
  return (
    <div className="app-container">
      <div className="game-area">
        <Board />
      </div>
    </div>
  );
}

export default App;
