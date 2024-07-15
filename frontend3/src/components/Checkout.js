import React, { useState } from 'react';
import { useStripe , useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

function Checkout() {
  
  const stripe = useStripe();
  const elements = useElements();
  const [ name , setName] = useState();
  const [ email , setEmail] = useState();
  const [error , setError ] = useState(null);


  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.card(CardElement);

    const { error , paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: name,
        email: email,
      },
    });
    
    if (error) { 
      setError(error.message)
    } else {
      console.log('PaymentMethod',paymentMethod )
    }
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center h-full'>
      <div className='bg-blue-400 p-6 rounded shadow-lg w-96'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Checkout Your Item</h2>
          <form onSubmit={handlePayment}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'/>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Email Address</label>
              <input 
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'/>
            </div>
            <div className='mb-4'>
              <label
              htmlFor='card' 
              className='block text-sm font-medium text-gray-700'>Card Details</label>
            </div>
            <CardElement
            id='card'
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm
             focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
             options={{
             style:{
             base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
              color:'#aab7c4',}
             },
             },
             }}
             required 
             />
             {error && <div className='text-red-600'> {error} </div>}
            <div className='mb-4'>
              <button 
              type='submit'
              disabled= {!stripe}
              className='mt-4 py-2 px-4 bg-blue-500 text-white rounded-md
               hover:bg-blue-600'>Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Checkout;
