"use client"
import React from 'react';
import Image from 'next/image';
import graphic from '@/public/images/Contact_Graphic.png'
import { Button } from '@/components/ui/button';
import {easeInOut, motion} from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/background-gradient';
function Page() {
    const formVariants = {
        hidden: {
          opacity: 0,
          y: 50, 
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
          },
        },
      };
      
      const formContainerVariants = {
        visible: {
          transition: {
            staggerChildren: 0.2, 
          },
        },
      };
      const Submission=(e:any)=>{
        e.preventDefault();
        alert('Thankyou for contacting us. We will get back to you soon!')
      }
  return (
    <div>
        <div className='h-[120svh] lg:h-[103svh]'>
            <div className='flex'>
            <motion.form
        className="flex font-GeistVF mx-auto mt-8 flex-col md:min-h-[100svh] justify-center md:w-[50%] bg-blue-50 dark:bg-[#101e48] pt-8"
        initial="hidden"
        animate="visible"
        variants={formContainerVariants}
    >
            <h1 className='text-4xl text-center mt-4 font-semibold mb-4 p-8'>Get In Touch With Us!</h1>
            <p className='mx-auto text-xl font-semibold mb-20'>Thankyou for contacting us.</p>
            <motion.label className="mx-[5%] md:mx-[20%]" htmlFor="username" variants={formVariants}>
            Your Name
            </motion.label>
            <motion.input
            type="text"
            className="bg-white text-black rounded-md w-[90%] md:w-[50%] my-4 mx-[5%] md:mx-[20%] p-2"
            placeholder="Name"
            name="username"
            id="username"
            variants={formVariants}
            />
            <motion.label className="mx-[5%] md:mx-[20%]" htmlFor="email" variants={formVariants}>
            Your Email
            </motion.label>
            <motion.input
            type="email"
            className="bg-white text-black rounded-md w-[90%] md:w-[50%] my-4 mx-[5%] md:mx-[20%] p-2"
            placeholder="contact@gmail.com"
            name="email"
            id="email"
            variants={formVariants}
            />
            <motion.label htmlFor="query" className="mx-[5%] md:mx-[20%]" variants={formVariants}>
            Your Message
            </motion.label>
            <motion.textarea
            className="bg-white text-black md:w-[55%] w-[90%] mx-[5%] md:mx-[20%] my-4 h-[12vh] rounded-md p-2"
            name="query"
            placeholder="Type your message here"
            variants={formVariants}
            />
            <motion.button variants={formVariants} onClick={Submission} className="bg-blue-600 hover:bg-blue-700 my-4 h-12 w-48 mx-auto text-white text-lg px-8 py-2 rounded-full">
                Contact Us!
            </motion.button>
        </motion.form>
            <motion.div
             className='md:w-[40%] h-[40%] my-auto md:inline-flex hidden md:justify-center'
             initial={{y:'0%'}}
             animate={{y:["0%","-20%","0%"]}}
             transition={{repeat:Infinity, duration:7,ease:easeInOut, yoyo:true}}
             >
               <Image src={graphic} alt='contact Graphics'/>
            </motion.div>
        </div>
        </div>
    </div>
  );
}

export default Page;
