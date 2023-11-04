// src/components/WordDisplay.js
import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.has(letter) ? letter : '_'))
    .join(' ');

  return <div>{displayWord}</div>;
};

export default WordDisplay;
