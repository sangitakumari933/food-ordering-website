import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ axios }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get("/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      // console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  
  const statusHandler = async (event, orderId)=>{
    console.log("called");
    const response = await axios.post("/api/order/status", {
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
      console.log("success");
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="mx-5 max-sm:mx-2">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className=" text-gray-600 grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-7.5 items-start p-5 my-6 text-sm border border-orange-400 max-md:grid-cols-[0.5fr_2fr_1fr] max-sm:p-2 max-sm:gap-2.5">
            <img src={assets.parcel_icon} alt="" />
            <div >
              <p className="text-sm font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="font-semibold mt-4">{order.address.firstName+" "+order.address.lastName}</p>
              <div className="mb-3">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(e)=>statusHandler(e, order._id)} value={order.status} className="border-2 border-orange-200 bg-[#ffe8e4] p-2 outline-none">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
