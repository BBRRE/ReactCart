import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'


export const Shop = () => {
  return (
    <div className=''> 
        <div >
            <h1 className='text-5xl text-center py-2'>BRRE Shop</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24 justify-items-center'>
          {PRODUCTS.map((product) => {
            return(<Product data={product} key={product.id}/>)
          })}
        </div>
    </div>
  )
}
