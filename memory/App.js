import logo from './logo.svg';
import './App.css';
import Cards from './composants/carte.js';

function App() {
  return (
    <div className="App">
      <h1>Jeu Memory - Avec React</h1>
      <Cards />
      <div className="container"></div>
    </div>
  );
}

export default App;
