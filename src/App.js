import React from 'react';
import Header from './components/Header';
import Personalinfo from './components/Personalinfo';
import Education from './components/Education';
import Exprience from './components/Exprience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div className="App">
      <Header />
        <main>
          <Personalinfo />
          <Education />
          <Exprience />
          <Skills />
        </main>
          <Footer />
    </div>
  );
}

export default App;