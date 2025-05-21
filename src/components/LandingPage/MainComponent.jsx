import React, { useState } from "react";
import Button from "../Common/Button";
import iphone from "../../assets/phone.png";
import gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";
const MainComponent = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col sm:gap-10 items-center lg:justify-between justify-center  flex-wrap  lg:items-start py-[0.5rem] px-[3rem] ">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[7rem] text-[var(--white)] m-0 text-stroke  xl:text-[5rem] xl:m-0 transition  text-stroke-2"
          style={{
            color: hover ? "var(--black)" : "var(--white)",
            WebkitTextStroke: hover ? "1px var(--white)" : "1px var(--white)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[7rem] text-[var(--blue)]  xl:text-[5rem] xl:m-0 m-0"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[1rem] text-[var(--grey)]"
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex justify-start gap-[1.5rem] items-center mt-6"
        >
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="relative flex-1 p-1 flex justify-end items-center">
        <img
          src={gradient}
          alt="Gradient Background"
          className="absolute top-16 max-w-[250px] z-0 rounded-3xl"
        />

        <motion.img
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iphone}
          alt="iPhone Mockup"
          className="relative  max-w-[300px] right-5 z-10"
        />
      </div>
    </div>
  );
};

export default MainComponent;
