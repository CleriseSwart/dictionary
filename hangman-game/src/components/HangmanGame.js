// src/components/HangmanGame.js
import React, { useState, useEffect } from 'react';
import Alphabet from './Alphabet';
import HangmanDrawing from './HangmanDrawing';

const words = ['HANGMAN', 'JAVASCRIPT', 'REACT', 'COMPONENT', 'DEVELOPMENT'];
const MAX_ATTEMPTS = 11;

const HangmanGame = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [remainingAttempts, setRemainingAttempts] = useState(MAX_ATTEMPTS);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);

  // Function to start a new game
  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(randomWord);
    setGuessedLetters(new Set());
    setRemainingAttempts(MAX_ATTEMPTS);
    setIsGameWon(false);
    setIsGameLost(false);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  // Function to handle letter guess
  const handleLetterGuess = (letter) => {
    if (!guessedLetters.has(letter) && remainingAttempts > 0) {
      const updatedGuessedLetters = new Set(guessedLetters);
      updatedGuessedLetters.add(letter);

      if (!word.includes(letter)) {
        setRemainingAttempts((prevAttempts) => prevAttempts - 1);
      }

      setGuessedLetters(updatedGuessedLetters);
    }
  };

  // Function to compute the display word (showing guessed letters and underscores)
  const computeDisplayWord = () => {
    return word
      .split('')
      .map((letter) => (guessedLetters.has(letter) ? letter : '_'))
      .join(' ');
  };

  // Check if the player has won
  useEffect(() => {
    if (word.length === 0 || guessedLetters.size === 0) {
      return; // Exit early if the game hasn't started or no letters are guessed yet
    }

    const isWordGuessed = word.split('').every((letter) => guessedLetters.has(letter));
    if (isWordGuessed) {
      setIsGameWon(true);
    }
  }, [word, guessedLetters]);

  // Check if the player has lost
  useEffect(() => {
    if (remainingAttempts === 0 || remainingAttempts === 1) {
      setIsGameLost(true);
    }
  }, [remainingAttempts]);


  return (
    <div className="hangman-container">
      <h1 className="hangman-title">Hangman Game</h1>
      {isGameLost && <div>Game Over! You've lost. The word was: {word}</div>}
      <div className="hangman-row">
        <div className="hangman-picture">
          <HangmanDrawing attempts={MAX_ATTEMPTS - remainingAttempts} />
        </div>
        <div className="hangman-guess">
          <p>Guess the Word:</p>
          <p className="display-word">{computeDisplayWord()}</p>
          {isGameWon && (
            <div>Congratulations! You've won!</div>
          )}
        </div>
      </div>
      <div className="hangman-row">
        <Alphabet guessedLetters={guessedLetters} onClick={handleLetterGuess} />
      </div>
      <div className="hangman-row">
        <button className="reset-button" onClick={startNewGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default HangmanGame;
