import React from 'react'
import './Item.css';
const Item = ({name, price,itemIndex,handleRemoveItemFromcart}) => {
    return (
        <li>
            <h2 className='list-title'>{name}</h2>
            <span className='list-price'>R${price}</span>
            <button className='button-limpar remove-btn' onClick={() => handleRemoveItemFromcart(itemIndex)}>remover</button>
        </li>
    )
}

export default Item;