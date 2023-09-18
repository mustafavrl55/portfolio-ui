/* eslint-disable @next/next/no-img-element */
import { projects } from "@/projects";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

//bg-slate-700
//bg-blue-200
//bg-green-300
//bg-yellow-300

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Work = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  console.log(scrollYProgress);

  return (
    <div id="works" className="container m-auto max-w-7xl mb-40 py-20">
      <h2 className="text-5xl font-bold text-center mb-20">Work</h2>
      <motion.div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={index}
            className=" flex "
          >
            <div className="w-1/2 bg-slate-900 px-2 md:px-10 rounded-tl-xl rounded-bl-xl flex flex-col justify-center gap-4">
              <Link
                href={project.url}
                target="_blank"
                className="text-base text-white md:text-2xl font-bold hover:underline"
              >
                {project.title}
              </Link>
              <p className="text-xs text-slate-500">{project.programs}</p>
            </div>
            <div
              className={`w-1/2 p-4 flex items-center md:p-10 rounded-tr-xl rounded-br-xl ${project.bg}`}
            >
              <img className="rounded-xl" src={project.image} alt="" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
