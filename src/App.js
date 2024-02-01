import logo from './logo.svg';
// import './App.css';
import Hero from './components/hero';
import About from './components/about';
import Main from './components/main';
import React from 'react';
import WhyUs from './components/whyUs';
import StatsCounter from './components/statsCounter';


function App() {
  return (
    <React.Fragment>
      <Hero />
      <Main>
        <About />
        <WhyUs />
        <StatsCounter />
      </Main>
    </React.Fragment>
  );
}

export default App;
