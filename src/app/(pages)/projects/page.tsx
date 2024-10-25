import React from 'react'

const highlights = [
    {
      title: "Collection of 90 crop varieties",
      description: "Collection of 90 crop varieties of rice, finger millet, cowpea, hyacinth Bean, leafy vegetables, tuber crops, fruits and vegetable crops and documentation of traditional knowledge related to it.",
    },
    {
      title: "SHGs and students",
      description: "The programme is being extended to farmers, SHGs and students by organizing seed fairs, seed exhibitions, seminars.",
    },
    {
      title: "Dissemination of 12 selected varieties",
      description: "Dissemination of 12 selected varieties of crops like rice, finger millet, cowpea etc. by producing pure seeds (50 hectares area and 160 seed producing farmers).",
    },
    {
      title: "Rice varieties",
      description: "Production and sale of selected rice varieties such as Walay, Khara Munga, Sonphal and Sorti as well as local fruits, processing products (turnover up to Rs. 30 lakh till now).",
    },
    {
      title: "Fieldal study",
      description: "A fieldal study of the quality characteristics of 52 local varieties of paddy crops through a self-contained conservation centre at 4 places.",
    },
    {
      title: "Collection of information",
      description: "Collection of information of 73 wild food plant species on the presence, type, edible parts, methods of preparation, medicinal uses, uses, current, etc.",
    },
    {
      title: "36 varieties of rice",
      description: "36 varieties of rice have been sent to the National Plants Bureau of Reproductive Resources (NBPGR), New Delhi for registration.",
    },
    {
      title: "Improved cultivation methods",
      description: "Improved cultivation methods such as bed method for sowing of paddy seed, cultivation in SRI method as well as production and use of organic inputs.",
    },
  ];
function page() {
  return (
    <section className="py-16 bg-white mt-9" id="faqs">
    <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
      Project Highlights
    </h2>

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-green-50 rounded-lg border border-green-600  shadow-sms overflow-hidden">
            <header className="bg-green-600 text-white p-4 flex items-center">
              <i className="ri-add-line text-xl mr-3"></i>
              <strong className="text-xl font-semibold">{highlight.title}</strong>
            </header>
            <div className="p-6">
              <p className="text-gray-700 text-justify">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-16 px-4 ">
      <p className="text-gray-700">
        <b className="font-semibold text-green-600">Project Support</b><br />
        <p className='italic -mb-8'>BAIF Institute for Sustainable Livelihood and Development (BISLD), Pune</p><br /><br />
        <b className="font-semibold text-green-600">Funded By</b><br />
        <p className='italic'>Rajiv Gandhi Science and Technology Commission, Government of Maharashtra</p>
      </p>
    </div>
  </section>
  )
}

export default page
