import React from "react";
import { assets } from "../assets/assets";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex max-lg:flex-col-reverse items-center justify-center mt-32  gap-2" id="home">
      
      <div className="flex flex-col items-center w-full ">
        
          <h1 className="text-6xl max-md:text-4xl font-bold">Good Food,</h1>
        <TypeAnimation
          sequence={["Great mood!", 2000, "", 500]}
          speed={50}
          repeat={Infinity}
          className="text-6xl max-md:text-4xl font-bold text-orange-500"
        />
        
        
        <p className="text-xl py-5 w-[90%]">
          Order your favorite food: fast, fresh, and delivered to your door.
        </p>
        <div className="w-[90%] flex items-center justify-center pt-8 gap-2">
          <button className="flex gap-1 border border-gray-200 px-3 py-1 max-md:p-1  rounded-xl">
            <TbTruckDelivery size={30} className="text-orange-500" />
            <div className="">
              <h1 className="font-bold  max-md:text-sm">Fast Delivery</h1>
              <p className="text-sm text-gray-600 max-md:text-xs">30-45 mins</p>
            </div>
          </button>
          <button className="flex gap-1 border border-gray-200 px-3 py-1  max-md:p-1 rounded-xl">
            <MdHighQuality size={30} className="text-orange-500 " />
            <div className="">
              <h1 className="font-bold max-md:text-sm">Best Quality</h1>
              <p className="text-sm text-gray-600 max-md:text-xs">30-45 mins</p>
            </div>
          </button>
          <button className="flex gap-1 border border-gray-200 px-3 py-1  max-md:p-1  rounded-xl">
            <MdOutlinePayment size={30} className="text-orange-500" />
            <div className="">
              <h1 className="font-bold max-md:text-sm">Easy Payment</h1>
              <p className="text-sm text-gray-600 max-md:text-xs">30-45 mins</p>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full  max-md:w-full max-md:mt-5 overflow-hidden rounded-2xl shadow-xl">
        <img
          src={assets.hero_image}
          alt="hero_image"
          className="w-full h-112 
        object-cover"
        />
      </div>
      
    </div>
  );
};

export default Hero;
