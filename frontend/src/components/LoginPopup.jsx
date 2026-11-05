import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  axios.defaults.withCredentials = true;

  const {setLogin,axios} = useContext(StoreContext);
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if(currState==="Login") {
      url = "api/user/login"
    }else{
      url = "api/user/register";
    }

    const response = await axios.post(url, data);

    if(response.data.success){
      console.log("success")
      setShowLogin(false)
      setLogin(true);
    }else{
      alert(response.data.message);
    }

  } 



  return (
    <div className="fixed inset-0 z-100 flex h-screen w-full items-center justify-center bg-[#00000090]">
      <form onSubmit={onLogin}
        className=" bg-white w-80 p-6 flex flex-col gap-6 animate-fadeIn rounded-md  "
        action=""
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{currState}</h2>
          <img
            className="w-4 h-4 object-cover"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="space-y-2">
          {currState === "Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="border-2 border-gray-400 w-full rounded-md px-2 py-1 outline-none"
              type="text"
              placeholder="Your name"
              required
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="border-2 border-gray-400 w-full rounded-md px-2 py-1 outline-none"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            className="border-2 border-gray-400 w-full rounded-md px-2 py-1 outline-none"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="bg-orange-500/80 p-2 rounded-md text-white text-lg">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        {currState === "Login" ? (
          <p className="text-gray-600">
            Create a new account?{" "}
            <span
              className="text-sm text-orange-500/80 underline cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              className="text-sm text-orange-500/80 underline cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
