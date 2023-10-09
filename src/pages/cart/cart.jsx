import {PRODUCTS} from '../../Products'
import React from 'react'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'
import { CartItem } from './cart-item'
import { useNavigate} from 'react-router-dom'


export const Cart = () => {
  const  {addToCart, cartItems, getTotalCartAmount} = useContext(ShopContext)
  let totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div>
      <div className='text-center text-7xl py-5'>
        <h1>Cart</h1>
      </div>
      <div className='grid' > 
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !==0) {
            return <CartItem data={product} />
          }
        })}
      </div>
        {totalAmount > 0 ? (
      <div className='flex flex-col justify-center place-items-center '>
        <p className='py-4 text-center'>Subtotal: £{totalAmount}</p>
        <div>
          <button className='m-auto w-48 my-2 mx-4 h-12 bg-white text-black rounded-md ' onClick={() => {navigate('/')}} >Continue Shopping</button>
          <button className='m-auto w-48 my-2 mx-4 h-12 bg-black text-white rounded-md'>Checkout</button>
        </div>
      </div>) : (<h1 className='text-center py-44 text-2xl'>Your Cart Is Empty</h1>)}
    </div>
  )
}
