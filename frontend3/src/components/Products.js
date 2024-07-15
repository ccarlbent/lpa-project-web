import React from 'react';
import Adidas from '../photos/adidas.png';
import Nike from '../photos/nike.png';
import Puma from '../photos/puma.png';
import Reebok from '../photos/reebok.png';
import Tommy from '../photos/tommy.png';
import { FaShoppingCart } from "react-icons/fa";



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
        image: Reebok
    },
    {
        id: 5,
        name: "Tommy",
        price: 120,
        image: Tommy
    }
]

const Products = ({onAddCart}) => {

    return (
    <>
        <div className='w-full h-full relative
              container flex justify-between items-center gap-3 py-20'>
              {products.map( product => (
        <div className='bg-dark shadow-lg rounded-lg p-4 w-64
              hover:scale-105 transition duration-300 ease-in-out'
              key={product.id}>
                  <img src={product.image} alt={product.name}
                    className='w-full h-40 object-cover rounded-md'/>
                  <h2 className='text-lg font-semibold mt-2 text-white'>{product.name}</h2>
                  <p className='text-white'>${product.price}</p>
                 <button className='text-md relative bg-blue-300 p-2 px-4
                     text-white rounded-full'
                      onClick={() => onAddCart(product)}>
                        <FaShoppingCart/>
                </button>
        </div>
      ))}
    </div>
    </>
     
  ) 
};

export default Products;


