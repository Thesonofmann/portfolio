import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavaFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: { y: [10, -10],
    transition:{
      duration: duration,
      delay:0.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return  <motion.div 
  initial= {{opacity: 0, y:-100}}
  whileInView={{opacity:1, y: 0}}
  transition={{duration: 1}}
  id="skills" className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-3xl lg:text-4xl">
      Technologies <span className="text-sm">(Skills)</span>
    </h2>
    <motion.div 
    initial={{x: -100, opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
      variants={iconVariants(2.89)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(3.33)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavaFill className="text-7xl text-white"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(8)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiNodejsFill className="text-7xl text-green-400"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(4.4)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiTailwindCssFill className="text-7xl text-cyan-400"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(3)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-400"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(4.1)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-red-500"/>
      </motion.div>
      <motion.div 
      variants={iconVariants(6)}
      initial= "initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGithubSquare className="text-7xl text-sky-700"/>
      </motion.div>
    </motion.div>
  </motion.div>

}

export default Technologies