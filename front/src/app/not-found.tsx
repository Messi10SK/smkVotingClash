import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-9xl text-center '>
      <h2 className='m-3'>Not Found 404 error</h2>
      <p className='m-3'>Could not find requested resource</p>
      <Link href="/"> Return Home</Link>
    </div>
  )
}