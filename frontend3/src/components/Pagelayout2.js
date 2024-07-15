import React, {useState} from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import Products from './Products';
import Cart from './Cart';


function Pagelayout2() {
  const [ cart, setCart ] = useState([]);
  const [ showCart , setShowCart ] = useState(false);

    const handleAddCart = (product) => {
        setCart([...cart, product]);
    };
    
    const handleDelCart = (index) => {
      setCart(cart.filter((_ , i ) => i !== index))
    }

    const handleCartClose = () => {
        setShowCart(false);
    };

    const handleCartOpen = () => {
        setShowCart(true);
    };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Menubar cartItems={cart} openCart = {handleCartOpen}/>
      <div style={{ flex:1 }}>
        <Products onAddCart = {handleAddCart}/>
        { showCart && <Cart delCart = {handleDelCart} cartItems = {cart} closeCart = {handleCartClose}/> }
      </div>
      <Footer/>
    </div>
  )
}

export default Pagelayout2;
