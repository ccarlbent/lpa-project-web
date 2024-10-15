import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Use react-native-vector-icons
import Adidas from '../photos/adidas.png';
import Nike from '../photos/nike.png';
import Puma from '../photos/puma.png';
import Reebok from '../photos/reebok.png';
import Tommy from '../photos/tommy.png';

// Product list with image imports
const products = [
  {
    id: 1,
    name: "Adidas",
    price: 100,
    image: Adidas,
  },
  {
    id: 2,
    name: "Nike",
    price: 120,
    image: Nike,
  },
  {
    id: 3,
    name: "Puma",
    price: 130,
    image: Puma,
  },
  {
    id: 4,
    name: "Reebok",
    price: 120,
    image: Reebok,
  },
  {
    id: 5,
    name: "Tommy",
    price: 120,
    image: Tommy,
  }
];

const Products = ({ onAddCart }) => {
  return (
    <View style={styles.container}>
      {products.map(product => (
        <View style={styles.productCard} key={product.id}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          
          <TouchableOpacity style={styles.addButton} onPress={() => onAddCart(product)}>
            <FontAwesome name="shopping-cart" size={20} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  productCard: {
    backgroundColor: '#2c3e50',
    padding: 16,
    borderRadius: 8,
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    color: 'white',
  },
  addButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Products;
