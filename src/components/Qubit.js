import React, { useState } from 'react';
import './Qubit.css';

const Qubit = ({ selectedGate, onGateApplied }) => {
  const [state, setState] = useState('|0⟩');

  const applyGate = () => {
    let newState = state;
    if (selectedGate === 'H') {
      newState = '(|0⟩ + |1⟩)/√2';
    } else if (selectedGate === 'X') {
      newState = state === '|0⟩' ? '|1⟩' : '|0⟩';
    } else if (selectedGate === 'Z') {
      newState = state === '|1⟩' ? '-|1⟩' : state;
    }
    setState(newState);
    onGateApplied(selectedGate, newState);
  };

  return (
    <div className="qubit" onClick={applyGate}>
      <div className="qubit-visual">{state}</div>
    </div>
  );
};

export default Qubit;
