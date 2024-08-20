import { ArrowUpRight, Facebook, Instagram, InstagramIcon, Youtube } from 'lucide-react';
import React from 'react';

function Hero() {
  return (
    <div className="bg-white py-12 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Logo Image */}
        <div className="flex justify-center md:justify-start">
          <img src="./img/logo.png" alt="Logo" className="w-100 md:w-100" />
        </div>

        {/* Main Content */}
        <div className="text-center md:text-left space-y-6">
          {/* Development Notice */}
          <div className="text-sm text-gray-600 bg-yellow-100 p-2 rounded-md">
            This Website is under Development. Some features may not be Available / Work now.
          </div>

          {/* Title and Slogan */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            <strong>
            <span className="block text-5xl md:text-5xl">Agricart</span>
            <span className="block text-lg md:text-xl text-black ">Farmers Producer Company Limited</span>
            </strong>
            
            <br />
            <img src="./img/slogen.png" alt="Slogan" className="mx-auto md:mx-0 w-[250px]  mt-2 sm:w-full md:w-[350px]" />
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700">
            <strong>Agricart Farmers Producer Company </strong> working with 500+ farmers to conserve traditional seeds & recipes.
          </p>

          {/* Explore Button */}
          <a href="#about" className="inline-flex gap-2 items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
            Explore
            <ArrowUpRight/>
          </a>
        </div>

        {/* Social Links */}
        {/* <div className="text-center md:text-right space-y-4">
          <span className="block text-gray-800 font-semibold">Follow Us</span>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100083819993056&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
              <i className="ri-facebook-fill text-2xl"><Facebook/></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition duration-300 ease-in-out">
              <i className="ri-instagram-line text-2xl"><Instagram/></i>
            </a>
            <a href="https://youtube.com/@agricartfpcltd5583?si=UNP3zw6_u_4eezMQ" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out">
              <i className="ri-youtube-fill text-2xl"><Youtube/></i>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
