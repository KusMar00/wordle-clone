import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import { boardDefault, getnerateWords } from "./wordUtil";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = React.useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, win: false });

  useEffect(() => {
    generateWordsasync.then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.word);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;
    let word = "";
    for (let i = 0; i < 5; i++) {
      word += board[currAttempt.attempt][i];
    }
    if (wordSet.has(word.toLowerCase())) {
      setCurrAttempt({attempt: currAttempt.attempt + 1, letter: 0});
    } else {
      alert("That's not a word!");
    }
    if (word === correctWord) {
      setGameOver({ gameOver: true, win: true });
      return;
    }
    setGameOver({gameOver: true, win: false});
  };
    

  
  const onDelete = () => {
    if (currAttempt.letter > 0) {
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ attempt: currAttempt.attempt, letter: currAttempt.letter - 1 });
    };

  const onSelectLetter = (key) => {
    if (curAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurAttempt = {
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="Title">Wordle</h3>
      </header>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          onSelectLetter,
          onDelete,
          onEnter,
        }}
      >
        <div className="Game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
