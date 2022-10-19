import './App.css';

import Greeting from './components/Greetings';
import NavBar from './components/NavBar';
import Button from './components/Button';

function App() {
  // document.createElement('li') // imperativer ansatz

  //jsx // deklarativer ansatz

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Greeting />
        <Button />
        <Button />
      </main>
    </div>
  );
}

export default App;
