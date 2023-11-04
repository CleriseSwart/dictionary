// src/components/Alphabet.js
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

// Define the characters, special characters, and space bar
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!@#$%^&*()_-+=[]{}|;:,.<>? ';
const spaceBar = ' ';

// Alphabet component receives guessedLetters and onClick as props
const Alphabet = ({ guessedLetters, onClick }) => {
  // Function to handle character clicks
  const handleCharacterClick = (character) => {
    // Call the onClick prop passed from the parent component
    onClick(character);
  };

  return (
    // Keyboard container to hold the buttons
    <div className="keyboard-container">
      <ButtonGroup className="keyboard-row special-keys">
        {specialCharacters.split('').map((character) => (
          <Button
            key={character}
            onClick={() => handleCharacterClick(character)}
            disabled={guessedLetters.has(character)}
            className="keyboard-key special-key"
          >
            {character}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup className="keyboard-row">
        {characters.slice(0, characters.length / 2).split('').map((character) => (
          <Button
            key={character}
            onClick={() => handleCharacterClick(character)}
            disabled={guessedLetters.has(character)}
            className="keyboard-key"
          >
            {character}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup className="keyboard-row">
        {characters.slice(characters.length / 2).split('').map((character) => (
          <Button
            key={character}
            onClick={() => handleCharacterClick(character)}
            disabled={guessedLetters.has(character)}
            className="keyboard-key"
          >
            {character}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup className="keyboard-row">
        <Button
          key={spaceBar}
          onClick={() => handleCharacterClick(spaceBar)}
          disabled={guessedLetters.has(spaceBar)}
          className="keyboard-key space-bar"
        >
          Space
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Alphabet;
