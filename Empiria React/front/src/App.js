
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';






function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />

      </Routes>
      </BrowserRouter>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
