import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa"; // Import the link icon from react-icons

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Connect with me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <div className="mt-4 mb-5">
          <a
            href="https://seankobedimee.netlify.app"
            className="inline-flex items-center px-4 py-2 text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition duration-400"
          >
            <FaLink className="mr-2" /> 
            {CONTACT.whyme}
          </a>
        </div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 border-b hover:text-purple-600 transition duration-400 border-neutral-500"
        >
          {CONTACT.email}
        </a>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className=" text-neutral-500 my-4 hover:text-purple-600 transition duration-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className=" text-neutral-500 my-4 hover:text-purple-600 transition duration-400"
        >
          {CONTACT.address}
        </motion.p>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="mt-6 text-center text-m text-neutral-500"
      >
        <p>© {new Date().getFullYear()} ReactifyIO. Sean Kobe R. Dime</p>
      </motion.div>
    </div>
  );
};

export default Contact;
