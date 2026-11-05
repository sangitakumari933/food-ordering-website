import React from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import { useEffect } from "react";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url, axios} =  useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async ()=>{
     console.log("verifying");
    const response = await axios.post("api/order/verify", {success, orderId});
    console.log(response.data);
    if(response.data.success) {
      navigate("/myorders");
    }
    else{
      navigate("/");
    }
  }

  useEffect(()=>{
    verifyPayment();
  }, []);

  return <div className="min-h-[60vh] place-items-center  grid">
    <div className="w-20 h-20 border-4 border-gray-200 border-t-orange-400 rounded-full animate-spin ">

    </div>
  </div>;
};

export default Verify;
