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
      {/* Header Section */}
      <div className="text-center mt-[100px] px-4">
        <p className="text-3xl md:text-5xl font-bold">DISCOVER OUR PRODUCTS</p>
        <p className="mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br className="hidden md:block" />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto flex flex-col md:flex-row gap-5 mt-6 px-4">
        {/* Left Filters */}
        <div className="md:basis-[20%]">
          <p className="text-lg font-semibold">Customizable</p>
          {[
            "IDEAL FOR", "OCCASION", "WORK", "FABRIC",
            "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
          ].map((label, index) => (
            <select
              key={index}
              className="mt-2 border border-gray-300 px-2 py-1 rounded w-full h-[50px]"
            >
              <option value="">{label}</option>
            </select>
          ))}
        </div>

        {/* Right Products Grid */}
        <div className="md:basis-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-[280px] object-cover rounded-lg shadow-md"
              />
              {/* Heart icon at bottom-right */}
              <div className="absolute bottom-3 right-3 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-red-500 transition">
                <FontAwesomeIcon icon={faHeart} className="text-lg" />
              </div>
              <p className="mt-2 text-sm font-semibold">PPXOC Milkyway dress in pressed flowers</p>
              <p className="text-xs text-gray-600">Sign in or Create an account to see pricing</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;


