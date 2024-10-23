import React from 'react'
import Contact from '../../_components/Contact'

function page() {
  return (
    <div className='flex flex-col items-center mt-24 w-full'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7667.8357234468485!2d73.69957749357911!3d16.069751600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00f31bf01944b%3A0x535d4341cc83c871!2sAgricart%20Farmers%20Producer%20Company%20Ltd!5e0!3m2!1sen!2sin!4v1713099719798!5m2!1sen!2sin"
      className='rounded-2xl w-[90%] h-[500px] border-0'
      allowFullScreen
      loading="lazy"
    ></iframe>
    <br />
    <Contact />
  </div>
  )
}

export default page
