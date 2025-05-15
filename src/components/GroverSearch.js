import React, { useState } from 'react';
import './GroverSearch.css';
import myPhoto from '../assets/myphoto.jpg'; // Make sure this path and filename are correct

const n = 16; // total items in the search space

function GroverSearch() {
  const [iteration, setIteration] = useState(0);
  const [targetIndex, setTargetIndex] = useState(5);
  const maxIterations = Math.floor((Math.PI / 4) * Math.sqrt(n));

  // Calculate probabilities for target and others
  const probTarget = Math.sin((2 * iteration + 1) * Math.asin(1 / Math.sqrt(n))) ** 2;
  const probOthers = (1 - probTarget) / (n - 1);

  const handleTargetChange = (e) => {
    const newTarget = parseInt(e.target.value, 10);
    setTargetIndex(newTarget);
    setIteration(0);
  };

  const handleNext = () => {
    if (iteration < maxIterations) setIteration(iteration + 1);
  };

  const handlePrev = () => {
    if (iteration > 0) setIteration(iteration - 1);
  };

  const handleReset = () => setIteration(0);

  return (
    <div className="grover-container">
      <h2>Grover's Search Visualizer</h2>

      <div className="analytics-panel">
        <label htmlFor="target-select">
          <strong>Select Target Item: </strong>
        </label>
        <select
          id="target-select"
          value={targetIndex}
          onChange={handleTargetChange}
        >
          {[...Array(n)].map((_, i) => (
            <option key={i} value={i}>
              Item {i}
            </option>
          ))}
        </select>

        <p><strong>Iteration:</strong> {iteration} / {maxIterations}</p>
        <p><strong>Probability of target:</strong> {(probTarget * 100).toFixed(2)}%</p>
        <p><strong>Probability of other items:</strong> {(probOthers * 100).toFixed(4)}%</p>
        <p><em>Try moving through iterations to see how the target probability grows!</em></p>
      </div>

      <div className="grid">
        {[...Array(n)].map((_, i) => (
          <div
            key={i}
            className="cell"
            title={i === targetIndex ? 'Target Item' : 'Other Item'}
          >
            <div
              className="bar"
              style={{
                height: `${(i === targetIndex ? probTarget : probOthers) * 300}px`,
                backgroundColor: i === targetIndex ? '#00ffcc' : '#666',
                boxShadow: i === targetIndex ? '0 0 10px #00ffcc' : 'none',
                transition: 'height 0.5s ease, box-shadow 0.5s ease',
              }}
            />
            <div className="label">{i}</div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePrev} disabled={iteration === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={iteration === maxIterations}>
          Next
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="explanation-panel">
        <h3>How It Works:</h3>
        <p>
          Grover's algorithm amplifies the probability of the target item with each iteration.
          The height of the bars shows the probability of measuring each item.
          Notice how the target’s probability (highlighted in teal) increases with each step.
          You can change the target item using the dropdown above to see how the algorithm behaves for different targets.
        </p>
      </div>

      <div className="created-by">
        <img src={myPhoto} alt="Creator" className="creator-photo" />
        <p>Created by <strong>Harsh</strong></p>
      </div>
    </div>
  );
}

export default GroverSearch;
