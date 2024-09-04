import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center mt-10">
            <img className="rounded-2xl w-full max-w-md h-auto" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
         <div className="flex flex-col items-center lg:items-start mt-9">
            <p className="my-2 max-w-xl py-5 mt-5" style={{ fontSize: '15px' }}>{ABOUT_TEXT}</p>
            <p className="max-w-xl py-5" style={{ fontSize: '15px' }}>{ABOUT_TEXT2}</p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
