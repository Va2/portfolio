import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Header />
    </div>
  );
}

export default App;
