import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white text-white fixed w-full z-10 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div>
          <Image src="/images/logo.webp" alt="logo" width={150} height={100} />
        </div>
        <div className="hidden md:flex space-x-4 text-[#013787] font-bold">
          <a href="#hero" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#products" className="hover:text-yellow-400">
            Products
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl text-[#013787]">&#9776;</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#hero" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600">
            About
          </a>
          <a href="#products" className="block px-4 py-2 hover:bg-gray-600">
            Products
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
