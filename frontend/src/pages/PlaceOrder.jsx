import React, { useEffect } from 'react'
import { useContext } from 'react'
import {StoreContext }from "../context/storeContext";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {food_list,cartItems, url, getTotalCartAmount, axios, login} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}));
  }

  const placeOrder = async (event)=>{
    event.preventDefault();
    console.log("placeorder")
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+50
    }

    let response = await axios.post("api/order/place", orderData);
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }else{
      alert("Error");
    }
  }

  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!login){
  //     navigate("/cart")
  //   }else if(getTotalCartAmount()===0){
  //     navigate("/cart");
  //   }
  // }, [login]);

  return (
    
      <form onSubmit={placeOrder} className='flex items-start justify-between gap-48 mt-25'>
        <div className='flex-1'>
          <p className='text-2xl font-semibold mb-8'>Delivery Information</p>
          <div className='flex gap-2 w-full'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='First name' />
            <input name='lastName' onChange={onChangeHandler} value={data.lastName} className='mb-4 border border-gray-300 p-2.5 w-full rounded-md' type="text" placeholder='Last name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="email" placeholder='Email address'></input>
          <input required name='street' onChange={onChangeHandler} value={data.street} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='street' />
          <div className='flex gap-2 w-full'>
            <input required name='city' onChange={onChangeHandler} value={data.city} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='city' />
            <input required name='state' onChange={onChangeHandler} value={data.state} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='State' />
          </div>
          <div className='flex gap-2 w-full'>
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='Zip code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} className='mb-4 border border-gray-300 p-2.5 rounded-md w-full' type="text" placeholder='Phone' />
        </div>
        <div className='flex flex-col gap-5 flex-1'>
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
          <button type='submit' onClick={()=>navigate('/order')} className='bg-orange-500/90 py-2 px-1 rounded-md text-white w-1/2 mt-10 '>PROCEED TO PAYMENT</button>
        </div>

      </form>
    
  )
}

export default PlaceOrder
