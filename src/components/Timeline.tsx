"use client";

import { steps } from "../data/index";
import TimelineStep from "./TimelineStep";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Timeline() {
  if (!steps || steps.length === 0) return null;

  const lastStepRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [extraLineHeight, setExtraLineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const inView = useInView(lastStepRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (containerRef.current && lastStepRef.current && buttonRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const lastStepBottom =
        lastStepRef.current.getBoundingClientRect().bottom - containerTop;
      const buttonTop =
        buttonRef.current.getBoundingClientRect().top - containerTop;

      const distance = buttonTop - lastStepBottom;
      setExtraLineHeight(distance > 0 ? distance : 0);
      setLineTop(lastStepBottom); // ✅ start line at bottom of last step
    }
  }, [lastStepRef, buttonRef, containerRef]);

  return (
    <section
      id="process"
      className="min-h-[150dvh] relative bg-black/90 py-12 px-6 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* baseline (faint track full height) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800 rounded-full" />

        {/* steps */}
        <div className="relative">
          {steps.map((s, idx) => (
            <TimelineStep
              key={s.number ?? idx}
              step={s}
              index={idx}
              totalSteps={steps.length}
              ref={idx === steps.length - 1 ? lastStepRef : null}
            />
          ))}
        </div>

        {/* glowing line to Open Free Account button */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? extraLineHeight : 0 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-gradient-to-b from-purple-400 to-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.7)]"
          style={{ top: lineTop }}
        />

        {/* Open Free Account button */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center relative"
        >
          {/* glowing motion behind button */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none z-0"
            animate={{
              boxShadow: [
                "0 0 10px rgba(168,85,247,0.5)",
                "0 0 20px rgba(168,85,247,0.9)",
                "0 0 10px rgba(168,85,247,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <button className="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-400 text-black font-bold rounded-full border-none z-10 hover:scale-105 transition-all">
            Open Free Account
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
