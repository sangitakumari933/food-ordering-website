import React, { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext); 
  const navigate = useNavigate();

  return (
    <div className='mt-28 mx-5 md:mx-10 lg:mx-20 max-sm:mt-24 max-sm:mx-2'>
      <div className=''>
        <div className="grid grid-cols-[1fr_1.3fr_1fr_1fr_1fr_0.5fr]">
          <p className='text-lg text-gray-800 max-md:text-sm'>items</p>
          <p className='text-lg  text-gray-800 max-md:text-sm'>Title</p>
          <p className='text-lg  text-gray-800 max-md:text-sm'>Price</p>
          <p className='text-lg  text-gray-800 max-md:text-sm'>Qty.</p>
          <p className='text-lg  text-gray-800 max-md:text-sm'>Total</p>
          <p className='text-lg  text-gray-800 max-md:text-sm'>remove</p>
        </div>
        <br />
        <hr className='h-px text-gray-300'/>
        {food_list.map((item, index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] my-2.5 gap-1'>
                <img className = "w-14 max-md:w-10"src={item.image} alt="" />
                <p className='max-md:text-sm text-black'>{item.name}</p>
                <p className='max-md:text-sm'>₹{item.price}</p>
                <p className='max-md:text-sm'>{cartItems[item._id]}</p>
                <p className='max-md:text-sm'>₹{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer md:text-xl'>x</p>
              </div>
              <hr className='h-px text-gray-300' />
             </div>         
            )
          }
        })}
      </div>
      <div className='mt-20 w-[70%]'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-bold'>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-800 py-2 border-b border-gray-400 '>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className='flex justify-between text-gray-800 py-2 border-b border-gray-400 '>
              <p>Delivery Fee</p>
              <p>₹{50}</p>
            </div>
            <div className='flex justify-between text-gray-800 py-2 border-b border-gray-400 '>
              <p className='font-bold'>Total</p>
              <p>₹{getTotalCartAmount()+50}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='bg-orange-500/90 py-2 px-1 rounded-md text-white '>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
