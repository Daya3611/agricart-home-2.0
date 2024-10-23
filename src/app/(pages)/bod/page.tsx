import React from 'react'

const director = [
        { name: "Shri. Santosh Ankush Gawade", role: "Chairman", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Vinod Shivram Sawant", role: "Vice Chairman", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Sachin Vijay Chorge", role: "Secretary", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Sandeep Atmaram Dhawale", role: "Secretary, Milk Department", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Darshana Dilip Palav", role: "Director", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Nhanu Pandurang Palav", role: "HOD, Milk Department", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Sunil Chandrakant Kadam", role: "", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Uma Mahadev Palav", role: "", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Sharad Ganpat Dhuri", role: "", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Kailas Digambar Dhawale", role: "", imgSrc: "./img/people/p1.png", linkedin: "#" },
        { name: "Shri. Sandip Ankush Gawade", role: "Hon. Consultant", imgSrc: "./img/people/sandip_gawade.jpg", linkedin: "#" },
        { name: "Shri. Ajay Vijay Chavan", role: "CEO", imgSrc: "./img/people/p1.png", linkedin: "#" }
]

export default function page() {
  return (
    <div className="py-12 px-6 bg-white mt-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Board of Directors</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {director.map((member, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-3xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              {/* <a href={member.linkedin} className="text-gray-600 hover:text-gray-900 flex items-center justify-center mb-4 transition-colors duration-300">
                <i className="fa fa-linkedin text-2xl mr-2" aria-hidden="true"></i>
                <span className="font-medium">View Profile</span>
              </a> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <h4 className="text-md font-medium text-gray-600 mb-4">{member.role}</h4>
              <a href={member.linkedin} className="text-green-600 hover:text-gray-900 flex items-center justify-center transition-colors duration-300">
                <span className="mr-2">More Info</span>
                <i className="fa fa-arrow-right text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


