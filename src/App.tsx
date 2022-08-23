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
import ListaProduto from './componentes/produtos/listaproduto/ListaProduto';
import CadastroCategoria from './componentes/categoria/cadastrocategoria/CadastroCategoria';
import CadastroProduto from './componentes/produtos/cadastroproduto/CadastroProduto';
import DeletarCategoria from './componentes/categoria/deletarcategoria/DeletarCategoria';
import DeleteProduto from './componentes/produtos/deleteProduto/DeleteProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import ListaCategoria from './componentes/categoria/listacategoria/ListaCategoria';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ComprarProduto from './componentes/produtos/compraprodutos/CompraProduto';
import Carrinho from './componentes/produtos/carrinho/Carrinho';
import Solar from './paginas/descricao/solar/Solar';
import Eolica from './paginas/descricao/eolica/Eolica';
import Oceanica from './paginas/descricao/oceanica/Oceanica';
import Hidrica from './paginas/descricao/hidrica/Hidrica';




function App() {
  return (

    <Provider store={store}>

      <ToastContainer />

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
                <Route path="/formularioCategoria" element={ <CadastroCategoria />}/>
                <Route path="/formularioCategoria/:id" element={ <CadastroCategoria />}/>
                <Route path="/formularioProduto" element={ <CadastroProduto />}/>
                <Route path="/formularioProduto/:id" element={ <CadastroProduto />}/>
                <Route path="/deletarCategoria/:id" element={ <DeletarCategoria />}/>
                <Route path="/deletarProduto/:id" element={ <DeleteProduto />}/>
                <Route path="/compraProduto/:id" element={ <ComprarProduto />}/>
                <Route path="/produtos" element={ <ListaProduto /> } />
                <Route path="/categoria" element={ <ListaCategoria /> } />
                <Route path="/carrinho/:id" element={<Carrinho />} />
                <Route path="/solar" element={<Solar />} />
                <Route path="/eolica" element={<Eolica />} />
                <Route path="/oceanica" element={<Oceanica />} />
                <Route path="/hidrica" element={<Hidrica />} />
              </Routes>
            </div>
          <Footer />
        </Router>

    </Provider>

  );
}

export default App;
