import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duratuion: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://yt3.ggpht.com/y_ZL6_JDvv1QgNc3YAG1zWUJs7ODf92oJLe6E2zBHlK8TveGmHKltB6LsxsTUwpRCr1x66GVXDCejQ=s640-c-fcrop64=1,00002af3fffff7bf-nd-v1"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I'm Merson Putra, a dedicated student at IAKN Toraja, Indonesia. You
          can just call me Merson. Currently, I'm deeply immersed in the world
          of computer programming, a passion that drives me forward. Through
          self-directed learning, I've embarked on a remarkable journey that has
          allowed me to become proficient in developing various applications,
          whether they're web-based or tailored for mobile platforms like
          Android and iOS. This skill set enables me to design, develop, and
          implement functional and captivating applications.
        </p>
      </div>
    </motion.div>
  );
}
