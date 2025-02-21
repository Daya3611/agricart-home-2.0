"use client"

import { InfoIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

const director = [
        { 
          name: "Shri. Santosh Ankush Gawade",
          role: "Chairman",
          imgSrc: "./img/people/p1.png",
          linkedin: "#"
         },

        { 
          name: "Shri. Vinod Shivram Sawant", 
          role: "Vice Chairman", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },

        { 
          name: "Shri. Sachin Vijay Chorge", 
          role: "Secretary", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Sandeep Atmaram Dhawale", 
          role: "Secretary, Milk Department", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Darshana Dilip Palav", 
          role: "Director", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Nhanu Pandurang Palav", 
          role: "HOD, Milk Department", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { name: "Shri. Sunil Chandrakant Kadam", 
          role: "", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { name: "Shri. Uma Mahadev Palav", 
          role: "", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#"
        },
        { 
          name: "Shri. Sharad Ganpat Dhuri", 
          role: "", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Kailas Digambar Dhawale", 
          role: "", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Sandip Ankush Gawade", 
          role: "Hon. Consultant", 
          imgSrc: "./img/people/sandip_gawade.jpg", 
          linkedin: "#" 
        },
        { 
          name: "Shri. Ajay Vijay Chavan", 
          role: "CEO", 
          imgSrc: "./img/people/p1.png", 
          linkedin: "#" 
        },
]

const btn = () =>{
  toast("Details Not Available")
}

export default function page() {
  return (
    <section className="py-20 px-10 bg-white">
        <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-green-700"><strong>Board of Directors</strong></h1>
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
                        <strong>{member.name}</strong>
                    </h3>
                    <h4 className="text-sm font-medium text-green-600 mb-4">
                        {member.role}
                    </h4>
                    </div>

                    {/* Action Icons */}
                    <div className="text-center flex">
                    <a
                        href={member.linkedin}
                        className="text-gray-500 hover:text-gray-800 mx-2 transition-colors duration-200"
                        onClick={()=> btn()}
                    >
                        <InfoIcon/>
                    </a>
                    <a
                        href={member.linkedin}
                        className="text-gray-500 hover:text-blue-600 mx-2 transition-colors duration-200"
                        onClick={()=> btn()}
                    >
                        <LinkedinIcon/>
                    </a>
                    </div>
                </div>
                ))}
            </div>
    </section>
  )
}


