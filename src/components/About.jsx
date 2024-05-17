import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa"; 


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Här lägger vi till länkarna */}
      <div className='mt-6 flex items-center'>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/osman-m-b646aa295/"
    target="_blank" rel="noreferrer"
    className='mr-4 text-white-500 hover:text-blue-700'
  >
    <FaLinkedinIn className='text-4xl' />
  </a>
  {/* GitHub */}
  <a
    href="https://github.com/bendarte"
    target="_blank" rel="noreferrer"
    className='text-black-800 hover:text-gray-600'
  >
    <FaGithub className='text-4xl' />
  </a>
  
</div>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
