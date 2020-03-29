import React, {useState} from 'react';
import Header from './Header';

//JSX (JavaScrip XML)

function App() {
  const [counter, setCounter] = useState(0);
  // Array[valor, funcaoAtualizacao]

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
