import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-8 py-20 px-[8vw] mt-8 scroll-mt-24' id="footer">
      <div className="w-full grid grid-cols-[2fr_1fr] gap-20 max-[380px]:gap-10 ">
        <div className="flex flex-col items-start gap-5">
          <img className = 'w-30' src={assets.logo} alt="" />
          <p>We believe great food makes every moment special. Explore a variety of delicious meals, order your favourites, and enjoy the convenience of having freshly prepared food delivered right to your doorstep. Good food, great taste, and happy moments – that's what we're all about! ❤️</p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-24">
          <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">COMPANY</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li onClick={()=>navigate("/about-us")} className="cursor-pointer" >About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul className="space-y-2 max-[380px]:text-sm">
            <li>+1-212-892-782</li>
            <li>contact@foodie.com</li>
          </ul>
        </div>
        </div>
        
      </div>
      <hr className="w-full height-[2px] my-5 bg-gray-400 "/>
      <p>Copyright 2026 © Foodie.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
