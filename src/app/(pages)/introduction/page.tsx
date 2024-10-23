import React from 'react'

function page() {
  return (
    <div className="p-8 bg-white mt-[50px]">
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 border rounded-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-teal-500 pb-2 w-full">Introduction</h1>
        
        {/* <table className="w-full mb-8 border-separate border-spacing-6">
          <tbody>
            <tr>
              <td className="w-full md:w-1/2 pr-4">
                <p className="text-base leading-relaxed text-gray-800 text-justify">
                  Sindhudurg is an agro-biodiversity rich district which mainly includes local varieties of crops, wild vegetables, and fruits. The Conservation and Management programme of local varieties of crops and wild food plants through BAIF Institute for Sustainable Livelihood and Development (BISLD), Pune since 2014 in collaboration with The Rajiv Gandhi Science and Technology Commission, Government of Maharashtra, in association with Vasundhara Science Centre at Nerurpar, Kudal (Sindhudurg) under the Maharashtra Gene Bank Programme and Since 2018 with Agricart Farmers Producer Company Limited. In this program local biodiversity studies, seed collection, seed bank setting up, crop variety regional studies, seed production, organic input production training, etc. activities have been undertaken. So far, studies and action programmes on rice, nachni, cowpea, hycinth beans, finger millet, leafy vegetables, fruits and vegetables as well as root, tubers and forest vegetables are going on. The Agricart Farmers Producer Company has been established with the help of NABARD and Lupin Human Welfare Foundation, Sindhudurg.
                </p>
              </td>
              <td className="w-full md:w-1/2">
                <img src="./img/about/intro-map.png" alt="Introduction Map" className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
              </td>
            </tr>
            <tr className='w-full'>
                <td>
                    <img src="./img/about/metho-img3.png" alt="Methodology 3" className="w-full h-auto mt-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
                </td>
                <td>
                    <img src="./img/about/intro-bottum.png" alt="Methodology 3" className="w-full h-auto mt-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
                </td>
              
            </tr>
          </tbody>
        </table> */}
        
        <div className='lg:grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3'>
          <p className='text-justify'>
          Sindhudurg is an agro-biodiversity rich district which mainly includes local varieties of crops, wild vegetables, and fruits. The Conservation and Management programme of local varieties of crops and wild food plants through BAIF Institute for Sustainable Livelihood and Development (BISLD), Pune since 2014 in collaboration with The Rajiv Gandhi Science and Technology Commission, Government of Maharashtra, in association with Vasundhara Science Centre at Nerurpar, Kudal (Sindhudurg) under the Maharashtra Gene Bank Programme and Since 2018 with Agricart Farmers Producer Company Limited. In this program local biodiversity studies, seed collection, seed bank setting up, crop variety regional studies, seed production, organic input production training, etc. activities have been undertaken. So far, studies and action programmes on rice, nachni, cowpea, hycinth beans, finger millet, leafy vegetables, fruits and vegetables as well as root, tubers and forest vegetables are going on. The Agricart Farmers Producer Company has been established with the help of NABARD and Lupin Human Welfare Foundation, Sindhudurg.
          </p>
          
          <img src="./img/about/intro-map.png" alt="Introduction Map" className="w-full h-auto rounded-lg shadow-md " />
          <img src="./img/about/metho-img3.png" alt="Methodology 3" className="w-full h-auto mt-8 rounded-lg shadow-md " />
          <img src="./img/about/intro-bottum.png" alt="Methodology 3" className="w-full h-auto mt-8 rounded-lg shadow-md " />
        </div>
      

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-teal-500 pb-2 mt-9">Objective</h1>
        
        {/* <table className="w-full mb-8 border-separate border-spacing-6">
          <tbody>
            <tr>
              <td className="w-full md:w-1/2 pr-4">
                <ul className="list-disc pl-5 text-gray-800 text-justify">
                  <li>Documentation of crop diversity and associated knowledge in diverse agro climatic zones</li>
                  <li>Germplasm collection, characterization, evaluation, and participatory seed production</li>
                  <li>In-situ conservation with active involvement of local community</li>
                  <li>Community level processes including networking, establishing community seed banks & participatory events</li>
                </ul>
              </td>
              <td className="w-full md:w-1/2">
                <img src="./img/about/objectiv-1.png" alt="Objective" className="w-full h-[400px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
              </td>
            </tr>
          </tbody>
        </table> */}
        
        <p className='lg:grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 items-center'>
          <div>
                <ul className="list-disc pl-5 text-gray-800 text-justify">
                  <li>Documentation of crop diversity and associated knowledge in diverse agro climatic zones</li>
                  <li>Germplasm collection, characterization, evaluation, and participatory seed production</li>
                  <li>In-situ conservation with active involvement of local community</li>
                  <li>Community level processes including networking, establishing community seed banks & participatory events</li>
                </ul>
          </div>

          <img src="./img/about/objectiv-1.png" alt="Objective" className="w-full h-[400px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />

        </p>
        

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-teal-500 pb-2">Methodology</h1>
        
        {/* <table className="w-full mb-8 border-separate border-spacing-6">
          <tbody>
            <tr>
              <td className="w-full md:w-1/3 pr-4">
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Selection of villages and collection of primary information</li>
                  <li>Seed enhancer survey and in-depth data collection</li>
                  <li>Setting up of seed banks and seed storage</li>
                  <li>Field research, nutrition, and genetic level studies</li>
                  <li>Selection of seeds and varieties in a participatory manner</li>
                  <li>Sowing and dissemination</li>
                  <li>Value addition and sales management</li>
                </ul>
              </td>
              <td className="w-full md:w-1/3">
                <img src="./img/about/metho-img1.png" alt="Methodology 1" className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
              </td>
              <td className="w-full md:w-1/3">
               <img src="./img/about/metho-img1.png" alt="Methodology 1" className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
              </td>
            </tr>
            
          </tbody>
        </table> */}

        <p className='lg:grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 items-center'>
          <div>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Selection of villages and collection of primary information</li>
                  <li>Seed enhancer survey and in-depth data collection</li>
                  <li>Setting up of seed banks and seed storage</li>
                  <li>Field research, nutrition, and genetic level studies</li>
                  <li>Selection of seeds and varieties in a participatory manner</li>
                  <li>Sowing and dissemination</li>
                  <li>Value addition and sales management</li>
                </ul>
          </div>

          <img src="./img/about/metho-img1.png" alt="Methodology 1" className="w-full h-auto rounded-lg shadow-md " />
          
        </p>
        
      </div>
    </div>
  )
}

export default page
