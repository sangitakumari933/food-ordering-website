 import React from "react";
import { assets } from "../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = ({ setShowLogin }) => {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { login, setLogin } = useContext(StoreContext);
  const {getTotalCartAmount,axios} = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.post(
        "api/user/logout"
      );

      if (response.data.success) {

        setLogin(false);
        toast.success("Logged out successfully");
        console.log(login);
        // Update your authentication state here.
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white shadow-sm">
      <div className="hidden max-w-7xl mx-auto px-6 md:flex items-center justify-between">
        <Link to="/">
          <img className="w-48" src={assets.logo} alt="logo" />
        </Link>
        <div className="flex gap-4 items-center font-medium  font-[Poppins] text-gray-600">
          <Link to="/"
            onClick={() => {
              scrollToSection("home");
              setActive("home");
            }}
            className={`${active === "home" ? "text-orange-500" : ""} cursor-pointer max-md:text-sm `}
          >
            Home
          </Link>
          
            <a
              href="/#menu"
              onClick={() => {
                // scrollToSection("menu");
                setActive("menu");
              }}
              className={`${active === "menu" ? "text-orange-500" : ""} cursor-pointer sm:text-base`}
            >
              Browse Menu
            </a>

          <a
            href="#footer"
            className={`${active === "contact_us" ? "text-orange-500" : ""} cursor-pointer `}
            onClick={() => {
              // scrollToSection("footer");
              setActive("contact_us");
            }}
          >
            Contact Us
          </a>
        </div>
        <div className="flex gap-7 items-center ">
          <Link className="relative" to="/cart">
            {" "}
            <p className={`absolute right-1 -top-1 w-2 h-2 ${!getTotalCartAmount()?"" :"bg-orange-500/90"} rounded-full`}></p>
            <LuShoppingCart size={"30px"} />
          </Link>
          {!login ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-orange-500 px-4 py-1.5 rounded-lg text-white"
            >
              Sign in
            </button>
          ) : (
            <><div className="relative group">
            <img className="w-6" src={assets.profile_icon} alt="" />
            <ul className="w-36 absolute hidden group-hover:flex flex-col bg-white right-0 z-10 px-3 py-5 rounded-md border-2 border-orange-400/40">
              <li onClick={()=> navigate("/myorders")} className="flex items-center gap-3 cursor-pointer">
                <img
                  className="w-5 cursor-pointer"
                  src={assets.bag_icon}
                  alt=""
                />{" "}
                <p className="hover:text-orange-400 text-gray-700">Orders</p>
              </li>
              <hr className="my-2" />
              <li
                onClick={() => logout()}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img
                  className="w-5 cursor-pointer"
                  src={assets.logout_icon}
                  alt=""
                />{" "}
                <p className="hover:text-orange-400 text-gray-700">Logout</p>
              </li>
            </ul>
          </div></>
          )}
          
        </div>
      </div>
      {/* for phone screen */}
      <div className="flex md:hidden items-center justify-between px-3 py-4">

        <img src={assets.logo} className="w-32" />

        <div className="flex items-center gap-6">
          <LuShoppingCart size={25} />
          {!login ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-orange-500 px-4 py-1.5 rounded-lg text-white"
            >
              Sign in
            </button>
          ) : (
            <><div className="relative group">
            <img className="w-6" src={assets.profile_icon} alt="" />
            <ul className="w-36 absolute hidden group-hover:flex flex-col bg-white right-0 z-10 px-3 py-5 rounded-md border-2 border-orange-400/40">
              <li onClick={()=> navigate("/myorders")} className="flex items-center gap-3 cursor-pointer">
                <img
                  className="w-5 cursor-pointer"
                  src={assets.bag_icon}
                  alt=""
                />{" "}
                <p className="hover:text-orange-400 text-gray-700">Orders</p>
              </li>
              <hr className="my-2" />
              <li
                onClick={() => logout()}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img
                  className="w-5 cursor-pointer"
                  src={assets.logout_icon}
                  alt=""
                />{" "}
                <p className="hover:text-orange-400 text-gray-700">Logout</p>
              </li>
            </ul>
          </div></>
          )}
          <div onClick = {()=>setMenuOpen(true)} className="text-xl cursor-pointer">☰</div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-8 left-2  md:hidden bg-white shadow-lg px-5 py-4 flex flex-col gap-4 font-medium text-gray-600 rounded-md border-2 border-orange-400/30">
          <Link to="/"
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            Home
          </Link>

          <a
              href="/#menu"
            onClick={() => {
              setActive("menu");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            Browse Menu
          </a>

          <button
            onClick={() => {
              setActive("about_us");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            About Us
          </button>

          <a href="#footer"
            onClick={() => {
              setActive("contact_us");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;