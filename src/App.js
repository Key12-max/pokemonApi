import './App.css';

import React from 'react';
import AxiosPokmonApi from './components/AxiosPokmonApi';

const App = () => {
  return (
    <div className="App" style={{width:"200px", margin:"auto"}}>
      <AxiosPokmonApi/>
    </div>
  );
}

export default App;
