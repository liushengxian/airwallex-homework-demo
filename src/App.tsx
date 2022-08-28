import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';

import Container from '@mui/material/Container';



import './App.scss';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Container className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer></Footer>
        </Container>
    </div>
  );
}

export default App;
