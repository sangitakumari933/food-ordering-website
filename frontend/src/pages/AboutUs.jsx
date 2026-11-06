
import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-16 px-5 md:px-16">

      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold tracking-widest uppercase">
          About Us
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 text-gray-800">
          Good Food, Great Moments!
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Bringing delicious food and happy moments straight to your doorstep.
          Because every meal deserves to be special!
        </p>
      </div>

      {/* Our Story */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="w-full md:w-1/2">
          <img
            src={assets.hero_image}
            alt="Delicious food"
            className="w-full h-[350px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Our Story
          </h2>
          <p className="text-gray-600 leading-7 mb-4">
            Welcome to Foodie, your one-stop destination for delicious food
            delivered right to your doorstep.
          </p>
          <p className="text-gray-600 leading-7 mb-4">
            We believe that great food brings people together. Whether you're
            craving a quick snack, a delicious meal, or something special to
            satisfy your taste buds, we're here to make every meal enjoyable.
          </p>
          <p className="text-gray-600 leading-7">
            Our goal is to make ordering food simple, convenient, and enjoyable
            with a variety of delicious dishes to choose from.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-3">
            Making your food ordering experience better every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-7 rounded-xl border border-orange-200 hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="font-bold text-lg mb-2">Quality Food</h3>
            <p className="text-gray-500 text-sm leading-6">
              Enjoy delicious meals from our restaurant partners.
            </p>
          </div>

          <div className="p-7 rounded-xl border border-orange-200 hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm leading-6">
              Get your favourite food delivered conveniently.
            </p>
          </div>

          <div className="p-7 rounded-xl border border-orange-200 hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2">Easy Ordering</h3>
            <p className="text-gray-500 text-sm leading-6">
              Order your favourite meals with just a few clicks.
            </p>
          </div>

          <div className="p-7 rounded-xl border border-orange-200 hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-lg mb-2">Made With Love</h3>
            <p className="text-gray-500 text-sm leading-6">
              We want every meal to bring you happiness.
            </p>
          </div>

        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-orange-50 rounded-2xl p-8 md:p-14 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-8 max-w-3xl mx-auto">
          To make delicious food accessible to everyone through a convenient,
          reliable, and enjoyable food ordering experience. We want to bring
          people closer to the food they love, one order at a time.
        </p>
        <p className="text-orange-500 font-semibold mt-6 text-lg">
          Good Food, Great Taste, Happy Moments! ❤️
        </p>
      </div>

    </div>
  );
};

export default AboutUs;
