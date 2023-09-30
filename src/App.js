
import './App.css';
import React, { useState } from "react";
import Questions from './components/questions';
import Marks from './components/marks.jsx'

function App() {
  const [scores, setScores] = useState(0);
  return (
    <div className="App">
      <Marks scores={scores} setScores={setScores} />
       <Questions scores={scores} setScores={setScores} />
      
    </div>
  );
}

export default App;
