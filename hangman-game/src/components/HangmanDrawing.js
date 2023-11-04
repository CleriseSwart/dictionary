import React from 'react';

// Import the Hangman state images (GIF format) from the assets folder
// These images represent the different states of the Hangman game as it progresses
import hangman_1 from '../assets/hangman_drawings/state1.GIF';
import hangman_2 from '../assets/hangman_drawings/state2.GIF';
import hangman_3 from '../assets/hangman_drawings/state3.GIF';
import hangman_4 from '../assets/hangman_drawings/state4.GIF';
import hangman_5 from '../assets/hangman_drawings/state5.GIF';
import hangman_6 from '../assets/hangman_drawings/state6.GIF';
import hangman_7 from '../assets/hangman_drawings/state7.GIF';
import hangman_8 from '../assets/hangman_drawings/state8.GIF';
import hangman_9 from '../assets/hangman_drawings/state9.GIF';
import hangman_10 from '../assets/hangman_drawings/state10.GIF';
import hangman_11 from '../assets/hangman_drawings/state11.GIF';

const HangmanDrawing = ({ attempts }) => {
  // Array that holds the file names of the Hangman states (GIF images)
  const hangmanStates = [
    hangman_1,  // State 1: Blank 
    hangman_2,  // State 2: Head
    hangman_3,  // State 3: Head, Body
    hangman_4,  // State 4: Head, Body, Left Arm
    hangman_5,  // State 5: Head, Body, Both Arms
    hangman_6,  // State 6: Head, Body, Both Arms, Left Leg
    hangman_7,  // State 7: Head, Body, Both Arms, Both Legs
    hangman_8,  // State 8: Head, Body, Both Arms, Both Legs, Rope
    hangman_9,  // State 9: Head, Body, Both Arms, Both Legs, Rope, Partial Face
    hangman_10,  // State 10: Head, Body, Both Arms, Both Legs, Rope, Partial Face, Sad Face
    hangman_11, // State 11: Full Hangman, Game Over
  ];

  // Ensure that 'attempts' is within the valid range of states
  const currentAttempt = Math.min(Math.max(attempts, 0), hangmanStates.length - 1);

  // Construct the image source path based on the current state (attempts)
  const imageSrc = hangmanStates[currentAttempt];

  return (
    <div>
      {/* Display the Hangman image corresponding to the current state */}
      <img src={imageSrc} alt={`Hangman State ${attempts}`} />
    </div>
  );
};

export default HangmanDrawing;