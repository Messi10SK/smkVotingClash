import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='w-[550px] bg-white rounded-xl py-5 px-10 shadow-md'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-extrabold bg-gradient-to-r from-blue-400 to bg-blue-400 text-transparent bg-clip-text'>VoteClash</h1>  
            <h1 className='text-3xl font-bold mt-2'>Login</h1>
            <p>Welcome</p>

            <form>
                <div className='mt-4'>
                   <Label htmlFor='email'>Email</Label>
                   <Input id='email' name='email' placeholder='enter your email'/>
                </div>
                <div className='mt-4'>
                   <Label htmlFor='email'>Password</Label>
                   <Input id='password' name='password' placeholder='enter your password'/>
                </div>
                <div className='text-right font-bold'>
                <Link href="forget-password">Forget password</Link>
                </div>
                
                <div className='mt-4'>

                <Button className='w-full'>Submit</Button>
                </div>
            </form>
            <p className=' flex flex-col  text-center mt-2'>
                Don't Have Account

                <strong>
                <Link href="/register">Register</Link>
                </strong>
            </p>
           
        </div>
    </div>
  )
}
