"use client";

import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import graphic from "@/public/images/About_Gradient.png";
import toy from "@/public/images/Welcome _toy.png";
import Image from "next/image";
import {
  TeamMembers,
  curriculumDirectors,
  chairpersons,
  viceChairpersons,
} from "./data";

const Home = () => {
  const [isGrayscale, setIsGrayscale] = useState(true); // Toggle between grayscale and normal
  const [isChairpersonScaled, setIsChairpersonScaled] = useState(false); // Toggle scale for chairpersons

  useEffect(() => {
    // Toggle the effects (grayscale and scale) every 5 seconds
    const interval = setInterval(() => {
      setIsGrayscale((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  });

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start position, 100px below
    },
    visible: {
      opacity: 1,
      y: 0, // End position, original position
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center justify-center box-border w-screen pb-9 bg-background dark:bg-[#0c0724]">
      {/* New First Section with Image and Text */}
      <motion.div
        className="flex flex-wrap lg:flex-nowrap w-[95%] h-screen justify-center items-center mb-8"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is visible
      >
        <motion.div
          className="w-96"
          initial={{ y: "0%" }}
          animate={{ y: ["0%", "-20%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: easeInOut,
            yoyo: true,
          }}
        >
          <Image src={toy} alt="h-64" />
        </motion.div>

        <div className="w-full flex flex-col justify-center ite">
          <h2 className="animate-text-animation inline-block text-foreground light:text-primary-foreground dark:text-white font-bold text-5xl lg:text-7xl relative basis-1/2">
            Discover the IEEE CIET Society!
          </h2>
          <p className="text-foreground light:text-primary-foreground dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            harum at optio nam iste fugiat temporibus fugit rem ullam possimus,
            debitis consectetur vel natus placeat soluta nobis beatae, cum
            quaerat.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="section mb-8"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is visible
      >
        <div className="text-primary-foreground dark:text-white ">
          <h1 className="text-foreground light:text-primary-foreground dark:text-white font-bold text-6xl lg:text-8xl flex w-full justify-center">
            Curriculum Directors
          </h1>
          <motion.div
            className="flex items-center justify-center space-x-4 gap-5 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Image 1 */}
            <motion.div className="relative lg:w-72 w-64 h-64">
              {!isGrayscale && (
                <Image
                  src={graphic}
                  alt="Curriculum Director 1"
                  className="absolute top-0 left-0 w-64 object-cover"
                />
              )}
              {/* Curriculum Director 1 Image */}
              <motion.img
                src={curriculumDirectors.curriculumDirector1.img}
                alt="Curriculum Director 1"
                className={`absolute top-0 left-0 w-80 object-cover rounded-lg transition-all duration-500 ${
                  isGrayscale ? "grayscale" : "scale-110"
                }`}
              />
            </motion.div>

            {/* Second Set of Images */}
            <motion.div className="relative lg:w-72 w-64 h-64">
              {isGrayscale && (
                <Image
                  src={graphic}
                  alt="Curriculum Director 2"
                  className="absolute top-0 left-0 w-64 object-cover"
                />
              )}
              <motion.img
                src={curriculumDirectors.curriculumDirector2.img}
                alt="Curriculum Director 2"
                className={`absolute top-0 left-0 w-80 object-cover rounded-lg transition-all duration-500 ${
                  !isGrayscale ? "grayscale" : "scale-110"
                }`}
              />
            </motion.div>
          </motion.div>

          {/* Buttons to Toggle Grayscale and Scale */}
          <motion.div
            className="flex justify-center pt-24 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.button
              className={`w-20 h-2 mx-2 rounded-full ${
                !isGrayscale
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-white cursor-pointer"
              }`}
              onClick={() => setIsGrayscale(!isGrayscale)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            ></motion.button>
            <motion.button
              className={`w-20 h-2 mx-2 rounded-full ${
                isGrayscale
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-white cursor-pointer"
              }`}
              onClick={() => setIsGrayscale(!isGrayscale)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            ></motion.button>
          </motion.div>

          <motion.div className="text-primary-foreground w-[80vw] h-60 mt-4 bg-[#D3D3D3] dark:bg-[#151a2e] rounded-lg overflow-auto relative m-auto flex justify-center items-center">
            <div className="duration-1000">
              <h1 className="font-bold text-5xl p-7">
                {isGrayscale
                  ? curriculumDirectors.curriculumDirector1.name
                  : curriculumDirectors.curriculumDirector2.name}
              </h1>
              <p>
                {isGrayscale
                  ? curriculumDirectors.curriculumDirector1.desc
                  : curriculumDirectors.curriculumDirector2.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Section 3 (Chairpersons) */}
      <motion.div
        className="section mb-8"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is visible
      >
        <h1 className="text-foreground light:text-primary-foreground dark:text-white font-bold text-5xl lg:text-6xl flex w-full justify-center p-24">
          Our Chairpersons
        </h1>

        <motion.div className="flex w-screen justify-center gap-4 flex-wrap lg:flex-nowrap">
          <motion.div className="flex flex-col">
            <motion.div className="flex ">
              <motion.div className="relative w-64 h-64">
                {!isGrayscale && (
                  <Image
                    src={graphic}
                    alt="Chairperson 1"
                    className="absolute top-0 left-0 w-64 object-cover"
                  />
                )}
                <motion.img
                  src={chairpersons.chairperson1.img}
                  alt="Chairperson 1"
                  className={`absolute top-0 left-0 h-72 object-cover rounded-lg transition-all duration-500 ${
                    isGrayscale ? "grayscale" : "scale-110"
                  }`}
                />
              </motion.div>

              {/* Chairperson 2 Image */}
              <motion.div className="relative w-64 h-64">
                {isGrayscale && (
                  <Image
                    src={graphic}
                    alt="Chairperson 2"
                    className="absolute top-0 left-0 w-64 object-cover"
                  />
                )}
                <motion.img
                  src={chairpersons.chairperson2.img}
                  alt="Chairperson 2"
                  className={`absolute top-0 left-0 h-72 object-cover rounded-lg transition-all duration-500 ${
                    !isGrayscale ? "grayscale" : "scale-110"
                  }`}
                />
              </motion.div>
            </motion.div>
            <motion.div className="flex justify-center mt-4 z-10 pt-12">
              <motion.button
                className={`w-20 h-2 mx-2 rounded-full ${
                  isGrayscale
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-white cursor-pointer"
                }`}
                onClick={() => setIsGrayscale(!isGrayscale)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              ></motion.button>
              <motion.button
                className={`w-20 h-2 mx-2 rounded-full ${
                  !isGrayscale
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-white cursor-pointer"
                }`}
                onClick={() => setIsGrayscale(!isGrayscale)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              ></motion.button>
            </motion.div>
          </motion.div>

          {/* Chairperson Text */}
          <div className="mt-4 light:text-primary-foreground dark:text-white  bg-[#D3D3D3] dark:bg-[#151a2e]  w-1/2 h-86 flex flex-col justify-evenly items-center rounded-lg mb-8">
            <h2 className="font-bold text-3xl">
              {isGrayscale
                ? chairpersons.chairperson1.name + " (Grayscale)"
                : chairpersons.chairperson1.name + " (Colored)"}
            </h2>
            <p>
              {isGrayscale
                ? chairpersons.chairperson1.desc
                : chairpersons.chairperson2.desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.h1 className="text-foreground light:text-primary-foreground dark:text-white font-bold text-5xl lg:text-6xl flex w-full justify-center p-24">
        Our ViceChairpersons
      </motion.h1>

      <motion.div className="flex w-screen justify-center gap-4 flex-wrap-reverse">
        {/* Vice Chairperson Text */}
        <div className="mt-4 light:text-primary-foreground dark:text-white   bg-[#D3D3D3] dark:bg-[#151a2e]   w-1/2 h-86 flex flex-col justify-evenly items-center rounded-lg mb-8">
          <h2 className="font-bold text-3xl">
            {isGrayscale
              ? viceChairpersons.vicechairperson1.name
              : viceChairpersons.vicechairperson2.name}
          </h2>
          <p>
            {isGrayscale
              ? viceChairpersons.vicechairperson1.desc
              : viceChairpersons.vicechairperson2.desc}
          </p>
        </div>

        <motion.div className="flex flex-col">
          <motion.div className="flex">
            <motion.img
              src={viceChairpersons.vicechairperson1.img}
              alt="Vice Chairperson 1"
              className={`h-72 rounded-lg transition-all duration-500 ${
                isGrayscale ? "grayscale" : "scale-110"
              }`}
            />
            {/* Vice Chairperson 2 Image */}
            <motion.img
              src={viceChairpersons.vicechairperson2.img}
              alt="Vice Chairperson 2"
              className={`h-72 object-cover rounded-lg transition-all duration-500 ${
                isGrayscale ? "scale-110" : "grayscale"
              }`}
            />
          </motion.div>
          <motion.div className="flex justify-center mt-4">
            <motion.button
              className={`w-20 h-2 mx-2 rounded-full ${
                isGrayscale
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-white cursor-pointer"
              }`}
              onClick={() => setIsGrayscale(!isGrayscale)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            ></motion.button>
            <motion.button
              className={`w-20 h-2 mx-2 rounded-full ${
                !isGrayscale
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-white cursor-pointer"
              }`}
              onClick={() => setIsGrayscale(!isGrayscale)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            ></motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-foreground light:text-primary-foreground dark:text-white font-bold lg:text-7xl text-5xl relative mb-8">
          Meet Our Heads And Team
        </h1>

        <div className="flex flex-wrap justify-center p-14">
          {TeamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#D3D3D3] dark:bg-[#151a2e] rounded-lg flex flex-col h-80 w-80 justify-center items-center m-4 opacity-0 transition-opacity duration-1000"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <motion.img
                  src={member.img}
                  className="relative transition-all duration-1000 h-52 w-full object-cover filter grayscale hover:grayscale-0"
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </div>

              <h1 className="text-primary-foreground dark:text-white font-bold text-3xl">
                {member.name}
              </h1>
              <h3 className="text-primary-foreground dark:text-white">
                {member.position}
              </h3>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl text-primary-foreground dark:text-white hover:text-blue-700 transition-colors duration-300"
                  />
                </a>

                {/* Instagram Icon */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl text-primary-foreground dark:text-white hover:text-pink-600 transition-colors duration-300"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
