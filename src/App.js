import './App.css';
import Upload from './upload';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Search Gala </h1>
        <div className="options container-fluid">
          <Button style={{margin: "15px"}} compact inverted color='orange'> Upload a new file </Button>
          <Button style={{margin: "15px"}} compact inverted color='orange'> Filter </Button>
          <Button style={{margin: "15px"}} compact inverted color='orange'> Voice Typing </Button>
        </div>
        <div class="container">
          <input type="text" id="box" placeholder="Search anything..." class="search__box" />
          <i class="fas fa-search search__icon" id="icon"></i>
        </div>
      </header>
    </div>
  );
}

export default App;
