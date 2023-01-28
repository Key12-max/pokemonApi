import './App.css';

import React from 'react';
import PokmonApi from './components/PokmonApi';

const App = () => {
  return (
    <div className="App" style={{width:"200px", margin:"auto"}}>
      <PokmonApi/>
    </div>
  );
}

export default App;
