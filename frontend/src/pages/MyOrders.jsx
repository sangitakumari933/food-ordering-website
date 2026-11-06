import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const {login,axios} = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post("api/order/userorders");
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (login) {
      fetchOrders();
    }
  }, [login]);

  return (
    <div className="mx-12 max-md:mx-5 max-sm:mx-auto flex flex-col gap-4 mt-32">
      <h2 className="font-bold text-xl">My orders</h2>
      <div className="flex flex-col gap-4">
        {data.map((order, index) => {
          return (
            <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] max-md:grid-cols-[1fr_2fr_1fr] place-items-center gap-7 text-sm border-2 border-orange-300/20 px-4 py-3">
              <img className="w-12" src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>₹{order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span className="text-orange-400 max-sm:text-sm">&#x25cf; <b className="text-gray-600">{order.status}</b>
                </span>
              </p>
              <button className="px-3 py-2 rounded-md bg-[#ffe1e1] font-medium text-gray-600">Track Order</button>
            </div>
          ); 
           
        })}
      </div>
    </div>
  );
};

export default MyOrders;
