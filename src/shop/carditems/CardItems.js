import React from 'react'
import Item from '../item/Item'

const CardItems = ({ cart, handleRemoveItemFromcart}) => {

  
  return (
    <footer>
                <ul>
                  {cart.map((cartItem, index) => 
                  <Item 
                  key={index} 
                  itemIndex={index}
                  name={cartItem.name} 
                  price={cartItem.price} 
                  handleRemoveItemFromcart={handleRemoveItemFromcart}/> )}
                   
                </ul>
            </footer>
  )
}

export default CardItems