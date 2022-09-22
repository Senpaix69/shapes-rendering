import { useState } from 'react';
import './App.css';

function App() {
  const [check, setCheck] = useState("square");

  return (
    <div className='app'>
      <div className="container">
        <h2>Conditional Rendering</h2>
        <div className={`image ${check}-image`}>
          <h1 className={`${check}-title`}>{check}</h1>
          <div className='square'></div>
          <div className='circle'></div>
          <div className='triangle'></div>
        </div>
        <div className='buttons'>
          <button className='square' onClick={() => setCheck("square")}>Square</button>
          <button className='circle' onClick={() => setCheck("circle")}>Circle</button>
          <button className='triangle' onClick={() => setCheck("triangle")}>Triangle</button>
        </div>
      </div>
    </div>
  );
}

export default App;
