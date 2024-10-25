import React from 'react'

function Footer() {
  return (
    <footer className="bg-white text-black py-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <a href="#" className="text-3xl font-bold flex items-center space-x-2">
                        <span>Agricart</span>
                        <div className='h-2 w-2 bg-green-600 rounded-full mt-4 animate-pulse'>
                            <span className='h-2 w-2 bg-green-600 rounded-full mt-4'></span>
                        </div>
                    </a>
                    <h3 className="text-md font-semibold mb-4">
                        Farmers Producer Company Limited
                    </h3>
                    {/* <div className="flex items-center space-x-2">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400" />
                        <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                            Subscribe
                            <i className="ri-arrow-right-up-line ml-2"></i>
                        </button>
                    </div> */}
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>H. NO. 22A,</li>
                        <li>WING 2 PANDUR TITHA,</li>
                        <li>Kudal Sindhudurg 416812</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <a href="tel:+917350025515" className="flex items-center text-green-600 hover:underline">
                                <i className="ri-phone-line mr-2"></i>
                                +91 7350025515
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@agricartfpc.com" className="flex items-center text-green-600 hover:underline">info@agricartfpc.com</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Groups</h3>
                    <div className="flex gap-2">
                        <img src="./img/nabard.png" alt="NABARD" className="h-10 object-contain" />
                        <img src="./img/lupin.png" alt="Lupin" className="h-10 object-contain" />
                        <img src="./img/baif.png" alt="BAIF" className="h-10 object-contain" />
                        <img src="./img/krushi-vibhag-logo.jpg" alt="Krushi Vibhag" className="h-10 object-contain" />
                    </div>
                </div>
            </div>

            <p className="text-center text-sm text-black mt-8">
                &#169; <strong>Agricart Farmers Producer Company Limited</strong>  | Design & Develop by <a href="https://dayanandgawade.in" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Dayanand Gawade</a>.
            </p>
        </footer>
  )
}

export default Footer
