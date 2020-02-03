import React, { Fragment } from 'react';

import './App.css';

import Nav from './components/Nav/Nav';
import Header from './containers/Header/Header';
// import Experience from './containers/Experience/Experience';
import Statistics from './containers/Statistics/Statistics';
import Projects from './containers/Projects/Projects';
import LogoSlider from './containers/LogoSlider/LogoSlider';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

import TimelineSlider from './components/Experience/TimelineSlider/TimelineSlider';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      {/* <Experience /> */}
      <TimelineSlider />
      <Statistics />
      <Projects />
      <LogoSlider />
      <Skills />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;