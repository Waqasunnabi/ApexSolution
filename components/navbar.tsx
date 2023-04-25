import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="py-1"></div>
    
    <nav className="bg-black text-white fixed left-0 right-0 flex justify-between items-center px-6 py-4 z-50">
      <div className="flex items-center">
        <h1 className="cursor-pointer text-2xl">Apex Solution</h1>
        <button
          className="absolute right-0 ml-4 sm:hidden text-white p-2 rounded hover:border focus:border focus:bg-gray-100" type="button" aria-controls="navbar-main" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={handleClick}>
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor"viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden absolute top-full left-0 right-0 bg-black text-white`}
      >
        <Link href="/"><li className="block px-4 py-2 hover:text-red-500">Home</li></Link>
        <Link href="/service"><li className="block px-4 py-2 hover:text-red-500">Service</li></Link>
        <Link href="/about"><li className="block px-4 py-2 hover:text-red-500">About</li></Link>
        <Link href="/contact"><li className="block px-4 py-2 hover:text-red-500">Contact us</li></Link>
      </ul>
      <ul className="hidden sm:flex space-x-3">
        <Link href="/"><li className="cursor-pointer hover:text-red-500">Home</li></Link><Link href="/service"><li className="cursor-pointer hover:text-red-500">Service</li></Link>
        <Link href="/about"><li className="cursor-pointer hover:text-red-500">About</li></Link>
        <Link href="/contact"><li className="cursor-pointer hover:text-red-500">Contact us</li></Link>
      </ul>
    </nav>
    </>
  );
};
export default Navbar;
