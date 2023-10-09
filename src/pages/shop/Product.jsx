import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'



export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const  {addToCart, cartItems} = useContext(ShopContext)
    
    const cartItemAmount = cartItems[id]

  return (
    <div className='flex flex-col w-72 h-72 ' >
        <div className='w-44 h-44 m-auto'><img className='py-3' src={productImage} alt={productName} /></div>
        <p className='text-center'><b>{productName}</b></p>
        <p className='text-center'>£{price}</p>
        <button className='bg-yellow-400 py-1 rounded-md' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
    </div>
  )
}
