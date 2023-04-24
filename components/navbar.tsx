import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="py-1" />
      <div>
        <nav className="bg-black text-white flex justify-between">
          <div className="flex">
            <h1 className="cursor-pointer px-6 py-6 text-2xl">Apex Solution</h1>
          </div>
          <div className="flex items-center">
            <button
              className="sm:hidden text-white p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5"
              type="button"
              aria-controls="navbar-main"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              {isOpen ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg> : <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>}
            </button>
            <div className={`w-1/2 h-screen bg-black text-white fixed top-0 right-0 z-50 transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <ul className="px-10 py-7 flex flex-col items-end border-r border-white">
                <Link href="/"><li className="cursor-pointer my-3 hover:text-red-500">Home</li></Link>
                <Link href="/service"><li className="cursor-pointer my-3 hover:text-red-500">Service</li></Link>
                <Link href="/about"><li className="cursor-pointer my-3 hover:text-red-500">About</li></Link>
                <Link href="/contact"><li className="cursor-pointer my-3 hover:text-red-500">Contact us</li></Link>
              </ul>
              <div className="flex justify-start px-5 py-2">
                <button
                  className="text-white hover:text-red-500" type="button" aria-controls="navbar-main" aria-expanded={isOpen} aria-label="Close navigation"onClick={handleClick}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            </div>
            <ul className={`px-10 py-7 flex space-x-3 hidden sm:flex`}>
              <Link href="/"><li className="cursor-pointer hover:text-red-500">Home</li></Link>
              <Link href="/service"><li className="cursor-pointer hover:text-red-500">Service</li></Link>
              <Link href="/about"><li className="cursor-pointer hover:text-red-500">About</li></Link>
              <Link href="/contact"><li className="cursor-pointer hover:text-red-500">Contact us</li></Link>
            </ul>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
