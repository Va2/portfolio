import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav';
import Header from './containers/Header';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      {/* <Header /> // Test BG animation on scroll */}
    </Fragment>
  );
}

export default App;