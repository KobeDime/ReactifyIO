import { FEATURED } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaRocket } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Featured Project
      </motion.h2>
      <div>
        {FEATURED.map((featured, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-center"
            >
              <img
                src={featured.image}
                width={210}
                height={220}
                alt={featured.title}
                className="mb-6 rounded-2xl"
              />
              <div
                className="flex justify-center gap-6 mt-4 mb-4"
                style={{ marginRight: "14.5rem" }}
              >
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-cyan-700 hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                )}
                {featured.youtube && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <FaRocket className="text-2xl text-cyan-700 hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                )}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{featured.title}</h6>
              <p className="mb-4 text-neutral-400">{featured.description}</p>
              {featured.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
