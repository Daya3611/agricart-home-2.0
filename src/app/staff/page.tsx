import React from 'react'

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

  
function page() {
  return (
    <div className="py-12 px-6 bg-white mt-10 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Board of Directors</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {staff.map((member, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-3xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              <img src={member.imageSrc} alt={member.name} className="w-full h-full object-cover" />
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

export default page
