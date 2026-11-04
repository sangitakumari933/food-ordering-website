import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-8 py-20 px-[8vw] mt-8 scroll-mt-24' id="footer">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 ">
        <div className="flex flex-col items-start gap-5">
          <img className = 'w-30' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi cum sed earum porro enim est error voluptatem repellendus consectetur dolore, maxime eos eveniet doloribus iste mollitia ut asperiores natus?</p>
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
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul className="space-y-2">
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
