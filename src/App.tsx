import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cronograma from './cronograma';
import Menu from './Menu';

function App() {
  return (
      <div className="App">
          <div>
            <Cronograma />
          </div>
            <div>
                <Menu />
            </div>
      </div>
  );
}

export default App;