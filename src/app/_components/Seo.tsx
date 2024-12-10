import { h4 } from 'framer-motion/client'
import React from 'react'

const keywords = [
    {
        word:'agricart'
    },
    {
        word:'agricarts'
    },
    {
        word:'pandur titha'
    },
    {
        word:'seed bank in maharashtra'
    },
    {
        word:'agrikart'
    },
    {
        word:'agricart maharashtra'
    },
    {
        word:'agricart maharashtra seed bank'
    },
    {
        word:'Sindhudurg'
    },
    {
        word:'red rice'
    },
    {
        word:'BAIF'
    },
    {
        word:'Seed Bank'
    },
    {
        word:'Digas'
    },
    {
        word:'Humarmala'
    },
    {
        word:'Ranbambuli'
    },
    {
        word:'Santosh Gawade'
    },
    {
        word:'Black rice'
    },
    {
        word:'Horsegram'
    },
    {
        word:'Kulith'
    },
    {
        word:'Baba Prasad'
    },
    {
        word:'Traditional rice seeds'
    },
    {
        word:'UNDP'
    },
    {
        word:'SGP'
    },
    {
        word:'Sanjay Patil'
    },
    {
        word:'Sachin Chorge'
    },
    {
        word:'Kudal'
    },
    {
        word:'Sandeep Dhawale'
    },
    {
        word:'AgroBiodiversity'
    },
    {
        word:'Vasundhara'
    },
    {
        word:'NABARD'
    },
    {
        word:'LUPIN FOUNDATION'
    },
    {
        word:'Dayanand Gawade'
    },
    {
        word:'Humarmala'
    },
    {
        word:'Anav'
    },
    {
        word:'Hirlok'
    },
    {
        word:'Gawathi Bazar'
    },
    {
        word:'FPO'
    },
    
    

]
export default function Seo() {
  return (
    <article>
      <div className='text-transparent text-[0px]'>
        {keywords.map((keyword, index) => (
            <strong key={index}>{keyword.word}</strong>
        ))}
      </div>
    </article>
  )
}


