"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState, forwardRef } from "react";

export const TimelineStep = forwardRef<
  HTMLDivElement,
  {
    step: { number: number; stepLabel: string; title: string } | null;
    index: number;
    totalSteps: number;
  }
>(({ step, index, totalSteps }, ref) => {
  if (!step) return null;

  const localRef = useRef<HTMLDivElement>(null);
  const combinedRef = (ref as React.RefObject<HTMLDivElement>) || localRef;
  const inView = useInView(combinedRef, { margin: "-50% 0px -50% 0px" });
  const [lineHeight, setLineHeight] = useState(0);

  const showLine = index < totalSteps - 1;

  useEffect(() => {
    if (combinedRef.current && showLine) {
      const nextStep = combinedRef.current.nextElementSibling as HTMLDivElement | null;
      if (nextStep) {
        const distance =
          nextStep.offsetTop - combinedRef.current.offsetTop - combinedRef.current.offsetHeight;
        setLineHeight(distance * 2); // double height
      }
    }
  }, [combinedRef, showLine]);

  return (
    <div
      ref={combinedRef}
      className="relative flex items-center justify-center mb-32 last:mb-0"
    >
      {/* glowing line to next step */}
      {showLine && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? lineHeight : 0 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full
                     bg-gradient-to-b from-indigo-500 to-purple-400"
          style={{ top: "100%" }}
        />
      )}

      {/* number with black background */}
      <div className="relative z-20 text-6xl font-extrabold text-purple-400 bg-black px-6 py-2 rounded-lg">
        {step.number}
      </div>

      {/* step text */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-1/2 ${
          index % 2 === 0
            ? "left-[calc(50%+5rem)] text-left"
            : "right-[calc(50%+5rem)] text-right"
        }`}
      >
        <p className="text-sm text-gray-400 mb-1">{step.stepLabel}</p>
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {step.title}
        </h3>
      </div>
    </div>
  );
});

TimelineStep.displayName = "TimelineStep";
export default TimelineStep;
