import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const ref = useRef(null);
  const getTime = (t) => {
    const getSeconds = `0${(t % 60)}`.slice(-2)
  const minutes = `${Math.floor(t / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(t / 3600)}`.slice(-2)

  return `${getHours} : ${getMinutes} : ${getSeconds}`
  }
  const handleStart = () => {
    console.log("handle start");
    ref.current = setInterval(() => {
        setTime(time+1);
    }, 1000)
  };
  const handlePause = () => {
    console.log("handle pause");
  };
  const handleResume = () => {
    console.log("handle resume");
  };
  const handleReset = () => {
    console.log("handle reset");
    clearInterval(ref.current);
    setTime(0);
  };
  return (
    <div className="App">
      <p>{getTime(time)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
