import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const Add = ({url}) => {
  

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      console.log("success");
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message)
    }
  };

  return (
    <div className="w-[70%] max-sm:ml-5 flex-col ml-12 mt-12">
      <form className="flex flex-col gap-5 w-full" onSubmit={onSubmitHandler}>
        <div className="w-full">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-40"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="w-[50%] max-md:w-full border-2 outline-none border-gray-400 rounded-sm p-2.5"
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div>
          <p>Product description</p>
          <textarea onChange={onChangeHandler}
            className="w-[50%] max-md:w-full border-2 outline-none border-gray-400 rounded-sm p-2.5"
            name="description"
            value={data.description}
            rows={6}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="flex gap-5">
          <div>
            <p>Product category</p>
            <select onChange={onChangeHandler}
              className="max-w-30 border-2 p-2.5 border-gray-400 rounded-sm"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product price</p>
            <input onChange={onChangeHandler}
              className="max-w-30 border-2 p-2.5 outline-none border-gray-400 rounded-sm"
              type="Numver"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button className="bg-black text-white max-w-30 p-2.5 rounded-sm">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
