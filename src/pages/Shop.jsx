import React from "react";
import product from "../assets/images/product/bag.jpg";
import Keyring from "../assets/images/product/ring.jpg";
import toys from "../assets/images/product/toys.jpg";
import cap from "../assets/images/product/cap.jpg";
import bagtwo from "../assets/images/product/bag2.jpg";
import bagthree from "../assets/images/product/bag3.jpg";
import bagfour from "../assets/images/product/bag4.jpg";
import bagfive from "../assets/images/product/bag5.jpg";
import bagsix from "../assets/images/product/bag6.jpg";
import bagseven from "../assets/images/product/bag7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const products = [
  product, Keyring, toys, cap, bagtwo,
  bagthree, bagfour, bagfive, bagsix, bagseven,
];

function Shop() {
  return (
    <>
      
      <div  className="flex justify-between items-center px-6 py-4 border border-gray-300 bg-white mt-36 ml-4 mr-4">
        <div className="flex gap-6 items-center">
          <p className="text-gray-700 font-medium">Items</p>
          <p className="text-blue-600 cursor-pointer">HIDE FILTER</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-700 font-medium">Recommended</p>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Newest First</option>
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      
      <div className="text-center mt-[50px] px-4">
        <p className="text-3xl md:text-5xl font-bold">DISCOVER OUR PRODUCTS</p>
        <p className="mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br className="hidden md:block" />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      
      <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-10 px-4">
       
        <div className="md:w-1/4 w-full">
          <p className="text-lg font-semibold mb-2">Customizable</p>
          {[
            "IDEAL FOR", "OCCASION", "WORK", "FABRIC",
            "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
          ].map((label, index) => (
            <select
              key={index}
              className="mb-3 border border-gray-300 px-3 py-2 rounded w-full"
            >
              <option value="">{label}</option>
            </select>
          ))}
        </div>

        
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-[280px] object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-3 right-3 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-red-500 transition">
                <FontAwesomeIcon icon={faHeart} className="text-lg" />
              </div>
              <p className="mt-2 text-sm font-semibold">Product Name</p>
              <p className="text-xs text-gray-600">Sign in or Create an account to see pricing</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;


