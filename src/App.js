import './App.css';
import Upload from './components/upload';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { useState } from 'react';
import Filter from './components/filter';
import Display from './components/display';

function App() {

  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [orderField, setOrderField] = useState('createdAt');
  const [order, setOrder] = useState('desc');

  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Search Gala </h1>
        <div className="options container-fluid">
          <Button 
          style={{margin: "15px"}} 
          onClick={()=> setVisible(true)}
          compact 
          inverted 
          color='orange'> 
          Upload a new file 
          </Button>
          {/* <Button 
          style={{margin: "15px"}} 
          onClick={() => setFilter(true)}
          compact 
          inverted 
          color='orange'
          > Filter 
          </Button>
          <Button style={{margin: "15px"}} compact inverted color='orange'> Voice Typing </Button> */}
        </div>
        <div class="container">
          <input type="text" id="box" placeholder="Search anything..." class="search__box" autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
          <i class="fas fa-search search__icon" id="icon"></i>
        </div>
        { visible && <Upload visible={visible} changeVisible={() => setVisible(false)}/> }
        { filter && <Filter 
                filter={filter} 
                changeVisible={() => setFilter(false)}
                order={order}
                changeOrder={(o) => setOrder(o)}
                orderField={orderField}
                changeOrderField={(o_f) => setOrderField(o_f)}
        />}
        {search && <Display search={search}/>}
      </header>
    </div>
  );
}

export default App;
