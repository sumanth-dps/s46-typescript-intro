import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';

function App() {
  let hinMarks:number=55;
  console.log(hinMarks);
  return (
    <div className="App">
      <Movie></Movie>
    </div>
  );
}

export default App;
