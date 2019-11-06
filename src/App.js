import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav/Nav';
import Header from './containers/Header/Header';
import Experience from './containers/Experience/Experience';
import Statistics from './containers/Statistics/Statistics';
import Projects from './containers/Projects/Projects';
import LogoSlider from "./containers/LogoSlider/LogoSlider";

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Experience />
      <Statistics />
      <Projects />
      <LogoSlider />
    </Fragment>
  );
}

export default App;