/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Content = () => {
  return (
    <div className="container m-auto max-w-7xl pb-10  md:h-[calc(100vh-88px)] flex items-center">
      <div className="flex items-center max-w-screen-2xl mx-auto md:flex-row flex-col-reverse">
        <div className="w-full md:w-2/4 md:mr-10">
          <motion.h1
            initial={{ opacity: 0, y: "75" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm text-center mt-4 md:text-left md:text-6xl md:mt-0 font-bold leading-tight"
          >
            HI, I AM A FRONTEND DEVELOPER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "-75" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-500 text-sm md:text-left md:text-xl mt-4 text-center md:mt-12"
          >
            As a frontend developer, I am passionate about creating web
            applications and user interfaces. I have experience in HTML, CSS,
            JavaScript, and React, and I believe in the power of user-centric
            design. I have honed these skills in my own projects and am eager to
            collaborate and contribute to new projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: "-75" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:flex-row items-center justify-between  mt-12 "
          >
            <a
              href="https://wa.me/5415312699"
              target="_blank"
              className="flex justify-between items-center bg-green-600 rounded-full px-4 py-3"
            >
              <BsWhatsapp size={"26"} />
              <span className=" text-sm ml-2">LET'S CHAT ON WHATSAPP</span>
            </a>
            <a className="font-bold" href="mailto:mustafa.vrl55@gmail.com">
              OR SEND ME AN EMAIL
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center w-full  md:w-2/4">
          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full w-40 md:w-3/4"
            src="/image/profil.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
