"use client";
import Header from "../components/Header";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1,}}
    >
      <Header />
      <Content />
      <Skills />
      <Work />
    </motion.div>
  );
}
