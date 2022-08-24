import React from 'react'
import './NavBarCarrinho.css';
const NavBarCarrinho = ({cart, clearcart}) => {

  const totalPrice = cart.reduce((acc, current)=> acc + current.price, 0)

  return (
    <header className='header'>
                <nav className='nav'>
                    <h2 className='logo'>Produtos</h2>
                    <div className='nav-bar-actions'>
                      <div className='nav-bar-total'>
                      <span className='nav-bar-total-quantidade'>{cart.length} {cart.length === 1 ? "produto" : "produtos"}</span>
                        <span className='nav-bar-total-valor'>R$ {totalPrice.toFixed(2)}</span>
                      </div>
                        
                        <button onClick={() => clearcart()} className='button-limpar clean-btn'>Finalizar compra</button>
                    </div>
                    
                </nav>


            </header>
  )
}

export default NavBarCarrinho