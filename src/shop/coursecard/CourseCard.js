import React from 'react'


const CourseCard = ({img, title, price, handleAddItemToCart}) => {
    return (
        <div className="card-carrinho">
            <img src={img} alt="" />
            <h1>{title} - {price}</h1>
            <button onClick={() => handleAddItemToCart(img,title,price)} className='button-limpar clean-btn'>adicionar</button>
        </div>
    )
}

export default CourseCard