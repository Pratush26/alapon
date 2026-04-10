import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='w-11/12 mx-auto text-center flex flex-col gap-1 items-center justify-center min-h-screen'>
      <h2 className='text-xl md:text-2xl font-bold'>404 | Page not found!</h2>
      <p className='mb-3'>Could not find requested resource</p>
      <Link href="/" className='cursor-pointer'>
        <Button variant={"default"}>
          Return Home
        </Button>
      </Link>
    </main>
  )
}