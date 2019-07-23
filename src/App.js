import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav';
import Header from './containers/Header';
import Experience from './containers/Experience';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Experience />
    </Fragment>
  );
}

export default App;