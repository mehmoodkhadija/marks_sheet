import React, { useState } from 'react'
import "./style.css"

const App = () => {
const [marks, setMarks] = useState([10, 20, 30, 40, 50]);

  const Increment = (index) => {
    const Marks = [...marks];
    Marks[index] += 1;
    setMarks(Marks);
  };

  const Decrement = (index) => {
    const updatMarks = [...marks];
    updatMarks[index] -= 1;
    setMarks(updatMarks);
  };

  return (
    <div className="container">
      <h1>Marks</h1>
      {marks.map((mark, index) => (
        <div key={index}>
          <button onClick={() => Increment(index)}>+</button>
          <span className="Text">{mark}</span>
          <button disabled={mark === 0} onClick={() => Decrement(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default App