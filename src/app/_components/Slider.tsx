import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

// Define the image URLs in a constant array
const imageUrls = [
    './img/slider/5.jpg',
    './img/slider/4.jpg',
    './img/slider/3.jpg',
    './img/slider/2.jpg',
];

const Slider = () => {
  return (
    <div className="relative mx-auto my-8 w-full max-w-[90%] sm:h-full md:h-full border-[12px] border-white rounded-xl shadow-2xl overflow-hidden">
      <Carousel>
        <CarouselContent>
          {imageUrls.map((src, index) => (
            <CarouselItem key={index}>
              <img 
                src={src} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg lg:h-[500px] md:h-full"  
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          &gt;
        </CarouselNext> */}
      </Carousel>
    </div>
  );
};

export default Slider;


// for automatic slider


// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious
// } from "@/components/ui/carousel";

// // Define the image URLs in a constant array
// const imageUrls = [
//     './img/slider/5.jpg',
//     './img/slider/1.jpg',
//     './img/slider/2.jpg',
//     './img/slider/3.jpg',
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Update the slide index every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
//     }, 3000); // Change slide every 3 seconds

//     // Clear the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const goToPreviousSlide = () => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrentIndex(prevIndex => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative mx-auto my-8 w-full max-w-[90%] border-[12px] border-white rounded-xl shadow-2xl overflow-hidden">
//       <Carousel>
//         <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {imageUrls.map((src, index) => (
//             <CarouselItem key={index}>
//               <img 
//                 src={src} 
//                 alt={`Slide ${index + 1}`} 
//                 className="w-full h-[500px] object-cover rounded-lg" 
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious 
//           onClick={goToPreviousSlide}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
//         >
//           &lt;
//         </CarouselPrevious>
//         <CarouselNext 
//           onClick={goToNextSlide}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
//         >
//           &gt;
//         </CarouselNext>
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;
