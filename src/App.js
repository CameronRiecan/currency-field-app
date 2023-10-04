import {
  useState,
  useRef
} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const correctNum = "Good job!";
  const incorrectNum = "The minimum is 100. The maximum is 1 million. Try Again!";
  const oneSecondTimer = "One second since you entered your digits.";

  function updateField(e) {
    // e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue >= 100 && inputValue <= 1000000 && inputValue.length >= 3) {
      setResult(
        <>
          <p>{correctNum}</p>
        </>
      )
      setShowTimer(false);
      setTimeout(() => {
        // the API call would go here, and it should be called every time the condtions are met and a minute goes by. But doing a message so you know it works.
        setShowTimer(true);
      }, 1000);
    } else {
      // inputRef.current.value = 100; old code, took out so it doesnt auto set to minimum when the user starts.
      setResult(
        <>
          <p>{incorrectNum}</p>
        </>
      )
      setShowTimer(false);
    }  
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Currency Field Component</p>
        <input 
          pattern="[0-9]"  
          type="number" 
          min={100}
          max={1000000}
          ref={inputRef}
          placeholder="Type a number, minimum is 100"
          onChange={updateField}
        />
        {result}
        {showTimer ? oneSecondTimer : null}
      </header>
    </div>
  );
}

export default App;
