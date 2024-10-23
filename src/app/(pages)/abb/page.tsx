import React from 'react'

export const director = [
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
    <section className="py-20 px-10 bg-white">
        <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900"><strong>Board of Directors</strong></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {director.map((member, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Image Section */}
                    <div className="relative w-full h-60 mb-6 mx-auto rounded-2xl overflow-hidden">
                    <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="w-full h-full object-fill"
                    />
                    </div>

                    {/* Name and Title */}
                    <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {member.name}
                    </h3>
                    <h4 className="text-sm font-medium text-gray-600 mb-4">
                        {member.role}
                    </h4>
                    </div>

                    {/* Action Icons */}
                    {/* <div className="text-center">
                    <a
                        href={member.linkedin}
                        className="text-gray-500 hover:text-gray-800 mx-2 transition-colors duration-200"
                    >
                        <i className="fa fa-info-circle text-xl" aria-hidden="true"></i>
                    </a>
                    <a
                        href={member.linkedin}
                        className="text-gray-500 hover:text-blue-600 mx-2 transition-colors duration-200"
                    >
                        <i className="fa fa-linkedin-square text-xl" aria-hidden="true"></i>
                    </a>
                    </div> */}
                </div>
                ))}
            </div>
    </section>


  )
}


