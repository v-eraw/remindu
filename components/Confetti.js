import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ active }) => {
  return active ? (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={1000} // Increase the number of confetti pieces
      recycle={false} // Prevent confetti from recycling
      colors={[
        '#FAD02E',
        '#FF6F00',
        '#4CAF50',
        '#1976D2',
        '#FFEB3B',
        '#FFC107',
      ]}
    />
  ) : null;
};

export default ConfettiEffect;
