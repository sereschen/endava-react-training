import React from 'react';
import './TaskCounter.css';

function TaskCounter({ count }) {
  return (
    <div className="counter-container">
      <p>{count}</p>
    </div>
  );
}

export default TaskCounter;
