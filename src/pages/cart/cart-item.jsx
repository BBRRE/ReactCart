import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id,productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  return (
    <div className='flex w-8/12 h-36 m-auto p-4 ' >
        <img className='mr-auto' src={productImage} alt="" />
        <p className='text-center mx-2'><b>{productName}</b></p>
        <p className='text-center mr-auto'>£{price}</p>
        <div> 
            <button className='px-1 pl-4' onClick={() => removeFromCart(id)}> - </button>
            <input className='w-9 border-2 rounded-lg px-1' value={cartItems[id]} onChange={(e) => {updateCartItemCount(Number(e.target.value), id)}} />
            <button className='px-1' onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}
