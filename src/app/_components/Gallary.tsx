"use client";

import { div } from 'framer-motion/client';
import { ArrowUpRight, Cross, CrossIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import Page, { events } from '../(pages)/allevents/page';
import Image from 'next/image';

// Define image URLs and details
// const events = [
//   {
//     img: './img/events/e1.jpg',
//     name: 'Event 1',
//     description: 'Event 1 description',
//   },
//   {
//     img: './img/events/e2.jpg',
//     name: 'Event 2',
//     description: 'Event 2 description',
//   },
//   {
//     img: './img/events/e3.jpg',
//     name: 'Event 3',
//     description: 'Event 3 description',
//   },
//   {
//     img: './img/events/e4.jpg',
//     name: 'Event 4',
//     description: 'Event 4 description',
//   },
//   {
//     img: './img/events/e5.jpg',
//     name: 'Event 5',
//     description: 'Event 5 description',
//   },
//   {
//     img: './img/events/e6.jpg',
//     name: 'Event 6',
//     description: 'Event 6 description',
//   },
//   {
//     img: './img/events/e7.jpg',
//     name: 'Event 7',
//     description: 'Event 7 description',
//   },
//   {
//     img: './img/events/e8.jpg',
//     name: 'Event 8',
//     description: 'Event 8 description',
//   },
  
  
// ];

const Gallery = () => {
  const [popupData, setPopupData] = useState<{ img: string; name: string; description: string } | null>(null);

  const openPopup = (event: { img: string; name: string; description: string }) => setPopupData(event);
  const closePopup = () => setPopupData(null);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-6 ">Our Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 mt-3">
        {events.slice(0,16).map((event, index) => (
          <div key={index} className="relative cursor-pointer border-[10px] rounded-3xl border-white shadow-lg shadow-gray-400">
            <Image
              src={event.img}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={48}
              className="w-full h-48 object-cover rounded-3xl hover:rotate-12 transition-all"
              onClick={() => openPopup(event)}
            />
          </div>
        ))}
      </div>

      <div className="text-center pt-5">
        <a
          href="allevents"
          className="inline-flex items-center px-4 py-2 h-[45px] bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-600 transition duration-300 ease-in-out hover:ring-4 hover:ring-green-500"
        >
          Explore More Photos
          <ArrowUpRight/>
        </a>
      </div>

      {/* Popup */}
      {popupData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-4 rounded-3xl w-full max-w-lg sm:max-w-md md:max-w-lg">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 "
            >
              <X className='text-[50px] font-bold text-white bg-black rounded-full'/>
            </button>
            <img
              src={popupData.img}
              alt="Popup"
              className="w-full h-auto max-w-full max-h-[80vh] object-fill rounded-3xl"
            />
            <div className="mt-4">
              <h2 className='text-xl font-bold'>{popupData.name}</h2>
              <p className='mt-2 text-sm text-gray-700'>{popupData.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>

    
    

  );
};

export default Gallery;
