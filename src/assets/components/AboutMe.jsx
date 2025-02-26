import { ABOUT_TEXT } from "../../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
  <section className="border-b border-neutral-900 pb-4" id="aboutMe">
    <motion.h2
    initial= {{opacity: 0, y: -30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    className="my-20 text-center text-3xl lg:text-4xl">About Me</motion.h2>
    <div className="flex flex-wrap">
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1, delay: 0.5}}
      className="w-full lg:p-8 justify-center items-center">
        <motion.p
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
        className="my-2 maxw-xl py-6">
          {ABOUT_TEXT}
        </motion.p>
      </motion.div>
    </div>
  </section>
  )
}

export default AboutMe;