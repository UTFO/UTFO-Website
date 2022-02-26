import React from 'react';
import './App.css';
import { Home, About, Article, Contact, Apply, FullArticle, ArticleEditor } from './components/pages/imports';
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
          <Route path="/articles/:title" element={<FullArticle />} />
          <Route path="/article-editor" element={<ArticleEditor />} />
          <Route path="/article-editor/:id" element={<ArticleEditor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
