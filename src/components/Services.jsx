import { delay, easeInOut } from 'framer-motion';
import React from 'react';
import { TfiIdBadge } from "react-icons/tfi";
import { IoDocumentAttach } from "react-icons/io5";
import { IoMdHappy} from 'react-icons/io';
import { GoLaw } from "react-icons/go";
import { BiSupport} from 'react-icons/bi';
import { LuPcCase } from "react-icons/lu";
import { motion } from 'framer-motion';

const ServicesData = [
    {
        id: 1,
        title: "Legal Consultation",
        link: "#",
        icon: <GoLaw/>,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Legal Document Preparation",
        link: "#",
        icon: <IoDocumentAttach/>,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Attorney Profiles",
        link: "#",
        icon: <TfiIdBadge/>,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Client Portal",
        link: "#",
        icon: <IoMdHappy/>,
        delay: 0.5,
    },
    {
        id: 5,
        title: "Case Management",
        link: "#",
        icon: <LuPcCase/>,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 Support",
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

const Services = () => {
  return (
    <section className="bg-white">
        <div className="container pb-14 pt-16">
            <h1 className="text-4xl font-bold text-center pb-10">
                . . . Services We Provide . . .
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {
                    ServicesData.map((service) => (
                    <motion.div 
                        variants={SlideLeft(service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }} // Scale up when hovered
                        className="bg-light rounded-2xl flex flex-col gap-4 items-center 
                                    justify-center p-4 py-7 hover:bg-light5 hover:cursor-pointer 
                                    hover:shadow-3xl transition-shadow duration-300">
                        <div className="text-4xl mb-4">
                            {service.icon}
                        </div>
                        <h1 className="text-lg font-semibold text-center px-3">
                            {service.title}
                        </h1>
                    </motion.div>

                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Services
