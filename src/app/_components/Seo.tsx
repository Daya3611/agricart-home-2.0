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
    }
]
export default function Seo() {
  return (
    <article>
      <div className='text-transparent text-[0px]'>
        {keywords.map((keyword, index) => (
            <h4>{keyword.word}</h4>
        ))}
      </div>
    </article>
  )
}


