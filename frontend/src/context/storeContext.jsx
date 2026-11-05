import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  axios.defaults.baseURL = backendUrl;
  axios.defaults.withCredentials = true;

  const [cartItems, setCartItems] = useState({});
  const [login, setLogin] = useState(false);
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (login) {
      const response = await axios.post("api/cart/add", { itemId });
      console.log(response.data);

      setCartItems(response.data.cartData);
    } else {
      toast.success("Login first");
    }
  };

  const removeFromCart = async (itemId) => {
    // setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    const response = await axios.post("api/cart/remove", { itemId });
    console.log(response.data);

    setCartItems(response.data.cartData);
  };

  const loadCartData = async () => {
    const response = await axios.post("api/cart/get");
    console.log(response.data);
    setCartItems(response.data.cartData || {});
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const checkAuth = async () => {
    try {
      const { data } = await axios.get("api/user/check");
      console.log("CHECK AUTH RESPONSE:", data);
      if (data.success) {
        setLogin(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchFoodList = async () => {
    const response = await axios.get("api/food/list");
    console.log("food", response.data);
    setFoodList(response.data.data);
  };

  useEffect(() => {
    fetchFoodList();
    checkAuth();
    loadCartData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    login,
    setLogin,
    getTotalCartAmount,
    axios,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
