import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Menubar from '../menubar/index'; // Make sure it's converted to React Native
import Footer from '../footer/index'; // Make sure it's converted to React Native
import Products from '../products/index'; // Make sure it's converted to React Native
import Cart from '../cart/index'; // Make sure it's converted to React Native

function Pagelayout2() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDelCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  const handleCartOpen = () => {
    setShowCart(true);
  };

  return (
    <View style={styles.container}>
      {/* Menubar */}
      <Menubar cartItems={cart} openCart={handleCartOpen} />
      
      {/* Products and Cart display */}
      <View style={styles.content}>
        <Products onAddCart={handleAddCart} />
        {showCart && (
          <Cart
            delCart={handleDelCart}
            cartItems={cart}
            closeCart={handleCartClose}
          />
        )}
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});

export default Pagelayout2;
