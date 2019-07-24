import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav/Nav';
import Header from './containers/Header/Header';
import Experience from './containers/Experience/Experience';

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