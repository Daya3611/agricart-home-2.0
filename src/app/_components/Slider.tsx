import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageUrls = [
  "./img/slider/5.jpg",
  "./img/slider/4.jpg",
  "./img/slider/3.jpg",
  "./img/slider/2.jpg",
];

const Slider = () => {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600 text-center mb-5">
          Our Activities
        </p>

        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Carousel>
            <CarouselContent>
              {imageUrls.map((src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={src}
                    alt={`Activity photo ${index + 1}`}
                    className="w-full h-56 sm:h-72 md:h-96 lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-md hover:bg-white" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-md hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
