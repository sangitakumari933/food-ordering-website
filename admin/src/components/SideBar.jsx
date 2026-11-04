import React, { use, useState } from "react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";


const SideBar = () => {


  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const navigate = useNavigate();

  return (
    <div className=" w-[18%] min-h-screen flex flex-col gap-3 pt-14 pl-[4%] border-r">
      <div  onClick={()=>{setActive("/add");
        navigate("/add");
      }} className={`border border-r-0 flex items-center py-2 px-2 gap-1.5 cursor-pointer ${active=="/add" && "bg-red-100"}`}>
        <img src={assets.add_icon} alt="" />
        <p className="max-sm:hidden max-md:text-sm font-semibold">Add Items</p>
      </div>
      <div onClick={()=>{setActive("/list");
        navigate("/list");
      }} className={`border border-r-0 flex items-center py-2 px-2 gap-1.5 cursor-pointer ${active=="/list" && "bg-red-100"}`}>
        <img src={assets.order_icon} alt="" />
        <p  className="max-sm:hidden max-md:text-sm font-semibold">List Items</p>
      </div>
      <div onClick={()=>{setActive("/orders");
        navigate("/orders");
      }} className={`border border-r-0 flex items-center py-2 px-2 gap-1.5 cursor-pointer ${active=="/orders" && "bg-red-100"}`}>
        <img src={assets.order_icon} alt="" />
        <p className="max-sm:hidden max-md:text-sm font-semibold">Orders</p>
      </div>
      
    </div>
  );
};

export default SideBar;
