import React from 'react';
import Navbar from './Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Blob from "../assets/blob.svg";
import HeroPng from "../assets/hero.png";
import { motion } from "framer-motion";
import Footer from './Footer';
import Services from './Services';

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      {/* Blob Background */}
      {/* <motion.img
        initial={{ scale: 0.9, opacity: 0, y: 50 }} // Start 50px below (move image down initially)
        animate={{ scale: 1, opacity: 1, y: 0 }}  // Animate to its original position (shift upwards)
        transition={{ duration: 0.8, ease: "easeInOut" }}
        src={Blob}
        alt=""
        className="absolute top-0 left-0 w-[150%] h-auto -translate-y-[15%] translate-x-[-20%] z-[1]"
      /> */}


      <Navbar />

      <div
        className="container grid grid-cols-1
                        md:grid-cols-2 min-h-[620px] relative z-10"
      >
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-4 md:py-0 relative z-10">
          <div
            className="text-center md:text-left space-y-6
                                lg:max-w-[400px]"
          >
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-4xl font-bold !leading-snug"
            >
              Where{" "}
              <span className="text-dark4">
                Justice Meets Expertise
              </span>{" "}
              : Your Trusted Partner in the Legal Landscape
            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                className="primary-btn flex items-center gap-2 group
                                            hover:scale-125 duration-300"
              >
                Get Started
                <IoIosArrowRoundForward
                  className="text-xl 
                                                                group-hover:translate-x-2
                                                                group-hover:-rotate-45 duration-300"
                />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center relative">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 
                                drop-shadow"
          />
        </div>
      </div>
      <Services />
      <Footer />
    </section>
  );
};

export default Hero;
