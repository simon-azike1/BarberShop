import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Home Page/Hero';
import Header from './layout/Header/Header';
import Preview from './pages/About/AboutPreview';
import Footer from './layout/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import About from './pages/About/About';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Preview />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
