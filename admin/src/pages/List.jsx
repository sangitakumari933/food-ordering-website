import React, { useEffect, useState } from 'react'; 
import { toast } from 'react-toastify';
import axios from 'axios';

const List = () => {
  
  const url = "http://localhost:4000"
  const [list, setList] = useState([]);

  const fetchList = async ()=>{
    console.log("fetching list")
    const response = await axios.get(`${url}/api/food/get-food`);
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data);
    }else {
      toast.error("Error");
    }
  }

  const removeFood = async(foodId)=>{
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])


  return (
    <div className='mt-4 w-[70%] mx-auto'>
      <p>AllFoodList</p>
      <div className=''>
        <div className='grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr]  px-3 py-4 border border-gray-300 max-sm:hidden'>
          <b>Image</b>
          <b>Name</b>
          <b>Cat.</b>
          <b>Price</b>
          <b>Remove</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className='grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] max-sm:grid-cols-[2fr_3fr_1fr] gap-2 px-3 py-4 border border-gray-300 text-gray-600 items-center'>
              <img src={item.image} alt="" className='w-14 h-10 max-sm:w-12 max-sm:h-12 object-cover' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={()=>{
                removeFood(item._id)
              }} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List;
