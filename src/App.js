import logo from './logo.svg';
import './App.css';
import RandomFact from './components/RandomFact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch demo med redux</h1>
      </header>
      <main>
        <h2>Some facts!</h2>
        <RandomFact />
      </main>
    </div>
  );
}

export default App;
