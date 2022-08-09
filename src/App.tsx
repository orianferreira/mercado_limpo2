import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
import './App.css';



function App() {
  return (
    <Router>
      <Nav />
        <div>
          <Routes> 
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/contato" element={ <Contato /> } />
            <Route path="/sobre" element={ <Sobre /> } />
            <Route path="/cadastrousuario" element={ <CadastroUsuario /> } />
          </Routes>
        </div>
      <Footer />
     
    </Router>
    
  );
}

export default App;
