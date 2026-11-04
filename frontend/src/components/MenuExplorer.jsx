import React from "react";
import { assets } from "../assets/assets";
import { menu_list } from "../assets/assets";

const MenuExplorer = ({ category, setCategory }) => {
  return (
    <div className="my-8 border-b border-b-gray-200 scroll-mt-24" id="menu">
      <h1 className="text-4xl font-medium">Explore our menu</h1>
      <p className="w-1/2 max-md:w-[80%] py-6 text-gray-500 text-md">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining exprience,
        our delicious meal at a time.
      </p>
      <div className="my-5 flex justify-between overflow-x-auto scrollbar-hide">
        {menu_list.map((item, index) => {
          return (
            <div onClick ={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} className="flex flex-col justify-center items-center shrink-0">
              <img
                src={item.menu_image}
                alt=""
                className={`w-30 h-30 object-cover rounded-full m-2 ${category===item.menu_name?"border-3 border-red-400 p-1.5":''}`}
              />
              <p className="text-gray-500">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuExplorer;
