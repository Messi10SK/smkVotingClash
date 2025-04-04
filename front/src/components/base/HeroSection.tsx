import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
     <div>
      <Image src = "/banner_img.svg" alt="baner image" width={600} height = {600} />  
     </div>  
     <div className='flex flex-col justify-center item-center text-center'>
      <h1 className='text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to bg-blue-400 text-transparent bg-clip-text'>VoteClash</h1>  
      <p className='text-2xl text-center md:text-3xl lg:text-4xl'>Make better choice and enchance</p>
      <Link href="/login">
      <Button className='mt-4 p-8 rounded-lg text-2xl'>Start Free</Button>
      </Link>

     </div> 
    </div>
  )
}
