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
<<<<<<< HEAD
<<<<<<< HEAD
import ListaProduto from './componentes/produtos/listaproduto/ListaProduto';
=======
import { Provider } from 'react-redux';
import store from './store/store';
>>>>>>> 1b86d8c201b3197bfa148e9a47936111ccf6f8a7
=======
import ListaProduto from './componentes/produtos/listaproduto/ListaProduto';
import { Provider } from 'react-redux';
import store from './store/store';
>>>>>>> 07192bcebc94c03aead7eeb44c8e5adeb9ca5c9f
import './App.css';
import CadastroCategoria from './componentes/categoria/cadastrocategoria/CadastroCategoria';



function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
            <Route path="/posts" element={ <ListaProduto /> } />
          </Routes>
        </div>
      <Footer />
     
    </Router>
    
=======
=======
  
>>>>>>> 07192bcebc94c03aead7eeb44c8e5adeb9ca5c9f
    <Provider store={store}>
      
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
              <Route path="/formularioCategoria" element={ <CadastroCategoria/>}/>
              <Route path="/produtos" element={ <ListaProduto /> } />
            </Routes>
          </div>
        <Footer />
      
      </Router>

<<<<<<< HEAD
    </Provider>    
>>>>>>> 1b86d8c201b3197bfa148e9a47936111ccf6f8a7
=======
    </Provider>
>>>>>>> 07192bcebc94c03aead7eeb44c8e5adeb9ca5c9f
  );
}

export default App;
