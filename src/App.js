import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function somaContador() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.error(counter);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={somaContador}>Aumentar contador</button>
        <p>
          {counter}
        </p>

      </header>
    </div>
  );
}

export default App;
