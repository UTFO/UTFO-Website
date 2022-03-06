import React from 'react';
import './App.css';
import { Home, About, Article, Contact, Apply } from './components/pages/imports';
import ArticleUTOPH from './components/pages/ArticleUTOPH';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/articles/utoph" element={<ArticleUTOPH/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
