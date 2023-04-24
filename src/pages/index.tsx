import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className="py-1">

    </div>
    <div>
        <nav className="bg-black text-white flex justify-between">
            <div className="flex" >
                <h1 className="cursor-pointer px-6 py-6 text-2xl">Apex Solution</h1>  
            </div>
            <ul className="px-10 py-7 flex space-x-3 justify-end hidden sm:flex">

                <li className="cursor-pointer hover:text-red-500">Home</li>
                <li className="cursor-pointer hover:text-red-500">Service</li>
                <li className="cursor-pointer hover:text-red-500">About</li>
                <li className="cursor-pointer hover:text-red-500">Contact us</li>

            </ul>
        </nav>
    </div>
    </main>
  )
}
