import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="bg-gray-50">
      {/* Top Bar */}
    
      <div className="bg-black text-white text-sm  md:py-2 px-4 text-center">
        Sign up and get 20% off on your first order.{" "}
        <a href="#" className=" underline font-medium">
          Sign Up Now
        </a>
      </div>
      <header className="flex items-center justify-between px-6 py-2 bg-white">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <nav className="hidden md:hidden lg:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Shop</a>
          <a href="#" className="text-gray-600 hover:text-black">On Sale</a>
          <a href="#" className="text-gray-600 hover:text-black">New Arrivals</a>
          <a href="#" className="text-gray-600 hover:text-black">Brands</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block px-24 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black "
          />
          <button className="text-gray-600 hover:text-black text-2xl ">
          <FaShoppingCart />
          </button>
          <button className="text-gray-600 hover:text-black  text-2xl">
          <FaRegCircleUser />

          </button>
         


        </div>
      </header>
    {/* Header */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-5 bg-[#F1F0F2]">
        {/* Text */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-[5vw] font-extrabold text-black leading-tight font-int">
            Find Clothes <br /> That Matches <br /> Your Style
          </h2>
          <p className="mt-4 text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            Shop Now
          </button>
          <div className="flex justify-around text-center pt-20">
        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-gray-600">International Brands</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">2,000+</h3>
          <p className="text-gray-600">High-Quality Products</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">30,000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
       
        </div>
        {/* Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/images/header-homepage.png"
            alt="Fashion Models"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </section>

      {/* Brands */}
      <div className="py-6 px-6 bg-black">
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          <img src="/icons/versace-logo.svg" alt="Versace" className="h-6" />
          <img src="/icons/zara-logo.svg" alt="Zara" className="h-6" />
          <img src="/icons/gucci-logo.svg" alt="Gucci" className="h-6" />
          <img src="/icons/prada-logo.svg" alt="Prada" className="h-6" />
          <img
            src="/icons/calvin-klein-logo.svg"
            alt="Calvin Klein"
            className="h-6"
          />
        </div>
      </div>
    </section>
  );
}
