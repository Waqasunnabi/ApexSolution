import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className="py-2">

    </div>

    <div>
        <nav className="bg-slate-400 text-white flex justify-between">
            <div className="flex" >
                <Image src="/images/Logo.png" className="h-20 cursor-pointer" alt="me" width="64" height="64" />
                <h1 className="py-6 text-2xl">Apex Solution</h1>  
            </div>
            <ul className="px-10 py-7 flex space-x-3 justify-end">

                <a href="/"><li className="cursor-pointer">Home</li></a>
                <a href="/Service.html"><li className="cursor-pointer">Service</li></a>
                <a href="/about.html"><li className="cursor-pointer">About</li></a>
                <a href="/contact.html"><li className="cursor-pointer">Contact us</li></a>

            </ul>
        </nav>
    </div>
    </main>
  )
}
