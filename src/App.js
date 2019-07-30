import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav/Nav';
import Header from './containers/Header/Header';
import Experience from './containers/Experience/Experience';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Experience />
      <Projects />
    </Fragment>
  );
}

export default App;