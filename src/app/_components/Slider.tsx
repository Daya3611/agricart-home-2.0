import React from "react";
import fs from "fs";
import path from "path";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  // Read images from the public directory
  const sliderDir = path.join(process.cwd(), "public", "img", "slider");
  let imageUrls: string[] = [];

  try {
    const files = fs.readdirSync(sliderDir);
    imageUrls = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
      .map((file) => `/img/slider/${file}`);
  } catch (error) {
    console.error("Failed to read slider images directory", error);
  }



  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section label */}
        {/* <p className="text-xs font-semibold uppercase tracking-widest text-green-600 text-center mb-5">
          Our Activities
        </p> */}

        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Carousel>
            <CarouselContent>
              {imageUrls.map((src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={src}
                    alt={`Activity photo ${index + 1}`}
                    className="w-full h-56 sm:h-72 md:h-96 lg:h-[480px] object-fill"
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
