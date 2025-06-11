import React from 'react';
import Hero from './pages/Home Page/Hero';
import Header from './layout/Header/Header'
import Preview from "./pages/About/AboutPreview"
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <div className="App">
       <Header/>
      <Hero />
      <Preview/>
      <Footer/>
     
    </div>
  );
}

export default App;
