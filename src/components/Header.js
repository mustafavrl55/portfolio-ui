import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container m-auto max-w-7xl"
    >
      <div className="header flex flex-col gap-4  md:flex-row justify-between items-center py-4  ">
        <div className="nav-1">
          <h3 className="text-xl font-bold">Mustafa Varol</h3>
          <p className="text-lg text-slate-500">Frontend Developer</p>
        </div>
        <div className="flex justify-between items-center gap-10  py-2 px-2 rounded-full bg-slate-700">
          <Link
            scroll={false}
            href="#home"
            className=" hover:bg-black rounded-full px-2 py-1 inline-block"
          >
            Home
          </Link>
          <Link
            scroll={false}
            href="#skills"
            className=" hover:bg-black rounded-full px-2 py-1"
          >
            Skills
          </Link>
          <Link
            scroll={false}
            href="#works"
            className=" hover:bg-black rounded-full px-2 py-1"
          >
            Works
          </Link>
        </div>
        <div className="flex justify-between content-center w-28">
          <Link href={"https://github.com/mustafavrl55"} target="_blank">
            <AiFillGithub size={"30"} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mustafa-varol-22826a193/"}
            target="_blank"
          >
            <AiFillLinkedin size={"30"} />
          </Link>

          <Link href={"/CV.pdf"} target="_blank">
            <HiOutlineDocumentArrowDown size={"30"} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
//https://www.linkedin.com/in/mustafa-varol-22826a193/
