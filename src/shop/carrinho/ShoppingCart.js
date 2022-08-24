import React, {useState} from "react";
import CardItems from "../carditems/CardItems";
import Courses from "../courses/Courses";
import NavBarCarrinho from "../navbarcarrinho/NavBarCarrinho";

const ShoppingCart = () => {

    const[cart, setcart] = useState([])
    
    


    function handleAddItemToCart(url, name, price){
        const itemObject = {url, name, price}
        setcart([...cart, itemObject])
    }
    function handleRemoveItemFromcart(clickedItemIndex){
        const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem) !== clickedItemIndex)
        setcart(filteredCart);

    }
    function clearcart() {
        setcart([])
    }


    return <>

           <NavBarCarrinho cart={cart} clearcart={clearcart}/>
            <Courses handleAddItemToCart={handleAddItemToCart}/>
            <CardItems cart={cart} handleRemoveItemFromcart={handleRemoveItemFromcart}/>
    </>;
}
export default ShoppingCart;