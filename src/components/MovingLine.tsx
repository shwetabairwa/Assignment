"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MovingLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move text horizontally within viewport
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["30vw", "0vw", "-50vw"]);

  return (
    <section ref={ref} className="h-[50vh] flex items-center justify-center bg-black">
      {/* parent wrapper with overflow-hidden */}
      <div className="overflow-hidden w-full">
        <motion.div
          style={{ x }}
          className="flex justify-center gap-6 text-4xl md:text-[8rem] lg:text-[6rem] font-extrabold whitespace-nowrap leading-none"
        >
          <span className="text-white">Trade Anytime, </span>
          <span className="text-purple-400">Anywhere</span>
        </motion.div>
      </div>
    </section>
  );
}

export default MovingLine;
