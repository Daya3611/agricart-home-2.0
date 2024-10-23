"use client"
import { InfoIcon, LinkedinIcon } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

const staff = [
    {
      name: "Miss. Shraddha Ashok Munj",
      role: "Accountant",
      imageSrc: "./img/people/p1.png",
      linkedin: "#"
    },
    {
      name: "Shri. Siddhesh Humarmalekar",
      role: "Milk Centre Operator",
      imageSrc: "./img/people/p1.png",
      linkedin: "#"
    },
    {
      name: "Shri. Mahesh Palav",
      role: "Privileged Member",
      imageSrc: "./img/people/p1.png",
      linkedin: "#"
    },
    {
      name: "Shri. Dilip Bhagwan Palav",
      role: "Privileged Member",
      imageSrc: "./img/people/p1.png",
      linkedin: "#"
    },
    {
      name: "Shri. Manish Mahadev Palav",
      role: "Privileged Member",
      imageSrc: "./img/people/p1.png",
      linkedin: "#"
    }
  ];

  const btn = () =>{
    toast("Details Not Available")
  }
  
function page() {
  return (
    <section className="py-20 px-10 bg-white">
        <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900"><strong>Staff</strong></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {staff.map((member, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Image Section */}
                    <div className="relative w-full h-60 mb-6 mx-auto rounded-2xl overflow-hidden">
                    <img
                        src={member.imageSrc}
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

export default page
