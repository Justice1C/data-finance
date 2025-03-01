import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import Newletter from './components/Newletter.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics /> 
      <Newletter /> 
      <Cards />
      <Footer />      
    </div>
  );
}

export default App;
