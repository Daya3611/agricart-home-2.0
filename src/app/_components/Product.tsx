import React from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

const products = [
  { id: 1, name: "Black Rice", imageUrl: "./img/products/black-rice.png" },
  { id: 2, name: "Red Rice", imageUrl: "./img/products/red-rice.png" },
  { id: 3, name: "Kokam", imageUrl: "./img/products/kokam.png" },
  { id: 4, name: "Malvani Kulith Pith", imageUrl: "./img/products/kulith-pith.png" },
];

function Product() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="products">
      {/* Background ambient blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                <ShoppingBag className="w-3.5 h-3.5" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                Farm Fresh
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Authentic, farmer-grown products from the Konkan region. We are dedicated to preserving traditional flavours and native seeds for a healthier tomorrow.
            </p>
          </div>
          
          <div className="hidden md:block">
            <a
              href="https://shop.agricartfpc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-600 text-white font-semibold rounded-full px-7 py-3.5 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-green-600/30"
            >
              Shop All Products
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col bg-slate-50/80 hover:bg-white rounded-[2rem] p-4 transition-all duration-500 border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-5">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="font-bold text-slate-900 text-lg tracking-tight mb-4">
                  {product.name}
                </h3>
                
                {/* Spacer to push button to bottom */}
                <div className="mt-auto" />
                
                <a
                  href="https://shop.agricartfpc.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 font-semibold rounded-xl px-5 py-3 transition-colors duration-300"
                  aria-label={`View details of ${product.name}`}
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 block md:hidden text-center">
          <a
            href="https://shop.agricartfpc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-green-600 text-white font-semibold rounded-full px-7 py-4 transition-all duration-300"
          >
            Shop All Products
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Product;
