import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from "../assets/logo1.png";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Service",
        path: "#",
    },
    {
        id: 3,
        title: "About Us",
        path: "#",
    },
    {
        id: 4,
        title: "Lawyers",
        path: "/lawyers", // Updated path for Lawyers
    },
    {
        id: 5,
        title: "Our Team",
        path: "#",
    },
];

const Navbar = () => {
  return (
    <nav className="relative z-10 pt-0">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <img src={Logo} alt="Logo" className="h-20 w-20" />
          <span className="text-4xl font-bold"> Diligence </span>
        </div>

        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path} // Use Link for navigation
                  className="inline-block py-2 px-3 hover:text-secondary relative group hover:cursor-pointer hover:scale-125"
                >
                  <div
                    className="w-2 h-2 bg-secondary absolute mt-2 rounded-full 
                                left-1/2 -translate-x-1/2 top-1/2 bottom-0 
                                group-hover:block hidden"
                  ></div>
                  {menu.title}
                </Link>
              </li>
            ))}

             <Link to="/signin">
                <button className="primary-btn hover:scale-110 duration-300">
                    Sign In
                </button>
             </Link>

            
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
