import { delay, easeInOut } from 'framer-motion';
import React from 'react';
import { TfiIdBadge } from "react-icons/tfi";
import { IoDocumentAttach } from "react-icons/io5";
import { IoMdHappy} from 'react-icons/io';
import { GoLaw } from "react-icons/go";
import { BiSupport} from 'react-icons/bi';
import { LuPcCase } from "react-icons/lu";
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const LawyersData = [
    {
        id: 1,
        title: "Criminal Lawyer",
        link: "/lawyers/criminal",
        icon: <GoLaw/>,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Civil Rights Lawyer",
        link: "#",
        icon: <IoDocumentAttach/>,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Corporate Lawyer",
        link: "#",
        icon: <TfiIdBadge/>,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Intellectual Property Lawyer",
        link: "#",
        icon: <IoMdHappy/>,
        delay: 0.5,
    },
    {
        id: 5,
        title: "Immigration Lawyer",
        link: "#",
        icon: <LuPcCase/>,
        delay: 0.6,
    },
    {
        id: 6,
        title: "Real Estate Lawyer",
        link: "#",
        icon: <BiSupport/>,
        delay: 0.7,
    },
]

const SlideLeft = (delay) => {
    return{
        initial:{
            opacity:0,
            x:50
        },
        animate:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                 delay: delay,
                 ease: "easeInOut",
            },
        },
    };
};

const Lawyers = () => {
    return (
    <>
        <Navbar/>
        <div className=" bg-light container pb-6 pt-2 hover:shadow-3xl shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-center pb-10">
            Navigating Justice :
            <span Justicespan className='text-dark4'> Meet Your Legal Allies
            </span> 
        </h1>

        <div className="grid grid-cols-3 gap-8 p-8">
            {
                LawyersData.map((service) => (
                    <motion.div 
                        key={service.id} // Ensure to add a unique key
                        variants={SlideLeft(service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }} // Scale up when hovered
                        className="bg-light2 text-dark4 rounded-2xl flex flex-col gap-4 items-center 
                                    justify-center p-4 py-7 hover:bg-light6 hover:cursor-pointer 
                                    hover:shadow-3xl transition-shadow duration-300 h-60" // Increased height
                    >   
                    <a href={service.link} className="text-center">
                        <div className="text-4xl mb-4">
                            {service.icon}
                        </div>
                        <h1 className="text-2xl font-semibold text-center px-3">
                            {service.title}
                        </h1>
                    </a>
                    </motion.div>
                ))
            }
        </div>
    </div>

    </>
    )}

export default Lawyers
