import React, { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext)
  return (
    <div className=''>
      <h2 className='text-3xl font-semibold my-10'>Explore Dishes</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-7 gap-y-9'>
        {food_list.map((item, index)=>{
          console.log(category)
          if(category === 'All' || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} price = {item?.price}description={item.description} image={item.image}/>
          }          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
