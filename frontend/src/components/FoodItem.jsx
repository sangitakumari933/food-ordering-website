import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const FoodItem = ({id, name, price, description, image}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className='relative'>
        <img src={image} alt="" className='w-full h-45 object-cover'/>
        {!cartItems[id]
        ?<img onClick={()=>addToCart(id)} className='w-9 absolute bottom-3.5 right-3.5 cursor-pointer' src={assets.add_icon_white} alt="" />
          :<div className='absolute bottom-3.5 right-3.5 flex gap-3 p-1.5 bg-white rounded-3xl items-center'>
            <img onClick = {()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img  onClick = {()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>}
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-start gap-1'>
          <p className='text-base font-semibold text-gray-800'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-18 object-contain mt-1' />
        </div>
        <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{description}</p>
        <p className='text-lg font-bold text-orange-500 mt-2'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
