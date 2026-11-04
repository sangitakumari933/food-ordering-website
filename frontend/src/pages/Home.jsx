import React, { useState } from 'react'
import Hero from '../components/Hero';
import MenuExplorer from '../components/MenuExplorer';
import FoodDisplay from '../components/FoodDisplay';

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <>
    <div>
      <Hero></Hero>
      <MenuExplorer category={category} setCategory={setCategory}></MenuExplorer>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
    </>
  )
}

export default Home;
