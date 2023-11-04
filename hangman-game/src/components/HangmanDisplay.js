// src/components/HangmanDisplay.js
import React from 'react';

const HangmanDisplay = ({ attempts, maxAttempts }) => {
  const imageIndex = Math.min(attempts, maxAttempts) + 1;
  const imagePath = `/assets/hangman_drawings/hangman${imageIndex}.png`;

  return <img src={imagePath} alt={`Hangman Stage ${imageIndex}`} />;
};

export default HangmanDisplay;
