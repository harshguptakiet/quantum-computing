import React from 'react';

const InfoPanel = ({ gate, state }) => {
  return (
    <div className="info-panel">
      <h3>Gate: {gate}</h3>
      <p>New State: {state}</p>
      <p>
        {gate === 'H' && 'Hadamard creates superposition.'}
        {gate === 'X' && 'X flips |0⟩ and |1⟩.'}
        {gate === 'Z' && 'Z flips phase of |1⟩.'}
      </p>
    </div>
  );
};

export default InfoPanel;
