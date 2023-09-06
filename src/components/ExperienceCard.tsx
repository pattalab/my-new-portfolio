import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/dfpuh3zxb/image/upload/v1680285080/PattaLab_Konten_Instagram_Persegi_1_a2xz1x.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PATTALABS</h4>
        <p className="font-bold text-2xl mt-1">PATTALABS</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
            alt=""
          />
        </div>
        <p className="uppercase py-5 to-gray-300">
          Started work 2022 - Present
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumarry points Sumarry points Sumarry points</li>
          <li>Sumarry points Sumarry points Sumarry points</li>
          <li>Sumarry points Sumarry points Sumarry points</li>
          <li>Sumarry points Sumarry points Sumarry points</li>
          <li>Sumarry points Sumarry points Sumarry points</li>
        </ul>
      </div>
    </article>
  );
}
