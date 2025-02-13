import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-white">Diabetic Retinopathy</h1>

        <ul className="hidden md:flex gap-6 text-lg">
          <li className="cursor-pointer hover:text-gray-300 transition"><Link to='/'>Home</Link></li>
          <li className="cursor-pointer hover:text-gray-300 transition"><Link to='/Detect'>Detect</Link></li>
          <li className="cursor-pointer hover:text-gray-300 transition">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
