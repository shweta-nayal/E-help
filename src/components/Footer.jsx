import React from 'react';
import {FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import {TbWorldWww} from "react-icons/tb";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className=" bg-light2">
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-1 
                            lg:grid-cols-3 gap-4 md:gap-4 ">
                {/* first section */}
                <div className="space--4 max-w-[400px]">
                    <h1 className="text-2xl font-bold text-center"> Our Journey </h1>
                    <p className="text-dark3">
                        <br />
                        At Diligence, we are dedicated to providing expert legal guidance tailored 
                        to your unique needs. With a focus on integrity and professionalism, our 
                        experienced team is here to support you through every legal challenge, 
                        ensuring your rights are protected. Contact us today for a consultation.
                    </p>
                </div>

                {/* second section  */}

                 <div className="space-y-4 max-w-[300px] text-center">
                   {/* <div className="space-y-4">
                        <h1 className="text-2xl font-bold"> Categories </h1>
                            <div className="text-dark3">
                                <ul className="space-y-2 text-lg">
                                    <li className="cursor-pointer 
                                                hover:text-secondary duration-200">
                                        Corporate
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary duration-200">
                                        Civil
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary duration-200">
                                        Criminal
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary duration-200">
                                        Property
                                    </li>
                                </ul>
                            </div>
                    </div>
                 */}
                <div className="space-y-5">
                        <h1 className="text-2xl font-bold"> Links </h1>
                            <div className="text-dark3">
                                <ul className="space-y-3 text-lg">
                                    <li className="cursor-pointer 
                                                hover:text-secondary hover:scale-110 duration-200">
                                        Home
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary hover:scale-110 duration-200">
                                        Services
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary hover:scale-110 duration-200">
                                        About
                                    </li>
                                    <li className="cursor-pointer 
                                                hover:text-secondary hover:scale-110 duration-200">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>

                {/* third section */}

                <div className="space-y-4 max-w-[300px] text-left">
                    <h1 className="text-2xl font-bold">
                        Get In Touch
                    </h1>

                    <div className="flex items-center">
                        <input 
                        type="text"
                        placeholder="Enter your email"
                        className="p-3 rounded-s-xl bg-white w-full
                                    py-4 focus:ring-0 focus:outline-none    
                                    placeholder:text-dark2" 
                        />

                        <button className="bg-primary text-white
                                            font-semibold py-4 px-6  hover:bg-secondary 
                                            rounded-e-xl hover:scale-x-125 duration-300">
                            Go
                        </button>
                    </div>

                    {/* Social Icons  */}

                    <div className="flex space-x-6 py-3">
                        <a href="#">
                            <FaWhatsapp className="text-2xl cursor-pointer hover:text-primary hover:scale-150 duration-500" />
                        </a>
                        <a href="#">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-primary hover:scale-150 duration-500" />
                        </a>
                        <a href="#">
                            <TbWorldWww className="text-2xl cursor-pointer hover:text-primary hover:scale-150 duration-500" />
                        </a>
                        <a href="#">
                            <FaYoutube className="text-2xl cursor-pointer hover:text-primary hover:scale-150 duration-500" />
                        </a>
                    </div>

                </div>

            </div>
        </motion.div>
    </footer>
  )
}

export default Footer
