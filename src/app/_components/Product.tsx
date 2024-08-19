import React from 'react'

const products = [
    {
        id: 1,
        name: 'Black Rice',
        price: '',
        imageUrl: './img/products/black-rice.png',
        
    },
    {
        id: 2,
        name: 'Red Rice',
        price: '',
        imageUrl: './img/products/red-rice.png',
        
    },
    {
        id: 3,
        name: 'Kokam',
        price: '',
        imageUrl: './img/products/kokam.png',
        
    },
    {
        id: 4,
        name: 'Malvani Kulith Pith',
        price: '',
        imageUrl: './img/products/kulith-pith.png',
        
    },
   
];


function Product() {
  return (
    <div className="container mx-auto py-12 px-4" id="products">
            <h2 className="text-3xl font-bold text-center mb-6">
                Check out our <br /> products
            </h2>

            <p className="text-center text-gray-600 mb-12">
                Here are some selected plants from our showroom, all are in excellent 
                shape and have a long life span. Buy and enjoy the best quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <article key={product.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-green-600"></div>
                        <img src={product.imageUrl} alt={product.name} className="w-full h-[305px] object-fill" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <span className="block text-gray-700 mb-4">{product.price}</span>
                            <button className="flex items-center justify-center w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-600 transition">
                                <a href='https://shop.agricartfpc.com' className="flex items-center">
                                    <i className="ri-shopping-bag-line"></i>
                                    <span className="ml-2">Order</span>
                                </a>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
  )
}

export default Product
