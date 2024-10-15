import React from 'react';
import { useNavigate } from 'react-router-dom';


function Cart({ closeCart , cartItems, delCart }) {

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();

    navigate('/checkout');
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg w-96'>
        <div className='flex justify-end'>
          <button
          className='text-gray-600 text-xl hover:text-gray-900'
          onClick={closeCart}>&times;</button>
        </div>
        <h2 className='text-xl font-semibold mb-4'> Your Items </h2>
        <ul>
          {cartItems.map(( item , index ) => (
            <li key={index} className='flex justify-between mb-2'>
              <div className='flex items-center'>
                <img src={item.image} alt={item.name} className='w-12
                h-12 object-cover inline-block mr-2'/>
                <span>{item.name} - ${item.price}</span>
              </div>
              <button className='text-red-500 hover:text-red-700'
              onClick={() => delCart(index)}>&times;</button>
            </li>
          ))}
        </ul>
        <button className='mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
    
  );
};

export default Cart;
