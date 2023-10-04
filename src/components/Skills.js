/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <div className="bg-slate-900 py-20">
      <div className="container m-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center">Skills</h2>
        <div className="grid justify-center md:grid-cols-4 gap-10 mt-20 ">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-10 py-4  w-56"
          >
            <img className="w-8 mr-4" src="/image/html.png" alt="" />
            <span className="w-240">HTML</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center  border border-solid rounded-lg border-slate-500 px-10 py-4 w-56"
          >
            <img className="w-8 mr-4" src="/image/css.png" alt="" />
            <span className="">CSS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-10 py-4 w-56"
          >
            <img className="w-8 mr-4" src="/image/scss.png" alt="" />
            <span>SCSS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-8 py-5 w-56"
          >
            <img className="w-8 mr-4" src="/image/tailwind-css.png" alt="" />
            <span>Tailwind CSS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-10 py-4  w-56"
          >
            <img className="w-8 mr-4" src="/image/js.png" alt="" />
            <span className="w-240">JavaScript</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center  border border-solid rounded-lg border-slate-500 px-10 py-4 w-56"
          >
            <img className="w-8 mr-4" src="/image/react.png" alt="" />
            <span className="">ReactJS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-10 py-4 w-56"
          >
            <img className="w-8 mr-4" src="/image/next.webp" alt="" />
            <span>NextJS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center border border-solid rounded-lg border-slate-500 px-10 py-4 w-56 "
          >
            <img className="w-8 mr-4" src="/image/git.png" alt="" />
            <span>Git</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
