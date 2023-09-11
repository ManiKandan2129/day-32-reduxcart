import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'

function Cart() {
  const totalamt = useSelector(state=>state.Total.total);

    
    
  return (
    <div className='cart'>
        <h1 className='cart-head'>Cart</h1>
        <hr></hr>
        <div className="cart-body">
        <h6>subtotal: {totalamt}</h6>
        <h6>Shipping: Free</h6>
        <h3 className='total'>Total: {totalamt}</h3>
        </div>
    </div>
  )
}

export default Cart