import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import About from './components/about';
import Main from './components/main';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <Hero />
      <Main>
        <About />
      </Main>
    </React.Fragment>
  );
}

export default App;
