import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/timeline" element={<Home />} />
            <Route path="/overview" element={<Home />} />
            <Route path="/faq" element={<Home scrollTo="#faq" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
  )
}
