import React from 'react';
import succulent from '/wamp64/www/lpa-project/src/assets/images/succulent.jpg';
import Card from '../Product/Card';

function Product() {
    const productData = [
        {
            id: 1,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 2,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 3,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 4,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 5,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 6,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 7,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 8,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 9,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
        {
            id: 10,
            name: 'Succulent',
            img: succulent,
            price: '$50',
        },
    ]
  return (
    <div>
      <div className="container">
        <h1>Select Products</h1>
        <Card data={productData}/>
      </div>
    </div>
  )
}

export default Product;
