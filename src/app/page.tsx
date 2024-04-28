"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Background } from "@/components/ComponentExporter";


export default function Home() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
 
  // const translateX = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, 1000]),
  //   springConfig
  // );
  // const translateXReverse = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, -1000]),
  //   springConfig
  // );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 ">
          <Background />
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto w-full  left-0 top-0 min-h-screen">
      <h1 className="text-2xl md:text-7xl m-24 font-bold dark:text-white">
        Contact Us
      </h1>
      
    </div>
  );
};
