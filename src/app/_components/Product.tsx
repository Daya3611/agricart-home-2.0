import React from "react";
import { ArrowUpRight } from "lucide-react";

const products = [
  { id: 1, name: "Black Rice", imageUrl: "./img/products/black-rice.png" },
  { id: 2, name: "Red Rice", imageUrl: "./img/products/red-rice.png" },
  { id: 3, name: "Kokam", imageUrl: "./img/products/kokam.png" },
  { id: 4, name: "Malvani Kulith Pith", imageUrl: "./img/products/kulith-pith.png" },
];

function Product() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100" id="products">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">
            Farm Fresh
          </p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our Products
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Authentic, farmer-grown products from the Konkan region — preserving traditional flavours and seeds.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Green top bar */}
              <div className="h-1 bg-green-600" />

              <div className="aspect-square overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                  {product.name}
                </h3>
                <a
                  href="https://shop.agricartfpc.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-green-600 hover:text-green-700 transition-colors"
                  aria-label={`View details of ${product.name}`}
                >
                  View Details
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://shop.agricartfpc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700 hover:bg-green-50 text-sm font-semibold rounded-full transition-all"
          >
            Shop All Products
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Product;
