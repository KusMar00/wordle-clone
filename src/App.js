import "./App.css";
import React from "react";
import Board from "./components/Board";
import axios from "axios";
import Keyboard from "./components/Keyboard";

function App() {
  /* // Get random word
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getRandom',
    params: {wordLength: '5'},
    headers: {
      'X-RapidAPI-Key': '160506b6dcmsh0aa571761c0b6f1p1d3814jsn74f40c03283e',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  */

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="Title">Wordle</h3>
      </header>
      <div className="Game">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
