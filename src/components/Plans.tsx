"use client";

import { plans } from "@/data";
import { motion } from "framer-motion";

function Plans() {
  const labels = [
    "Who It’s For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ];

  return (
    <>
 <section className="pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* ✅ Label / Tag */}
          <span className="inline-block px-6 py-2 mb-6 text-sm text-gray-200 
            border border-purple-400/70 rounded-[30px]
            shadow-[0_0_10px_rgba(168,85,247,0.2)]
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            transition">
            Compare Plans
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Compare your <span className="text-purple-400">Abcd Plan</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-100 text-lg md:text-xl">
            Flexible Deposits for Every Trader
          </p>
        </div>
      </div>
    </section>
    <section id="plans" className="py-16 px-6 md:px-10">
    

      <div className="max-w-6xl mx-auto overflow-x-auto">
        <div className="grid grid-cols-4 gap-6 text-center">
          {/* First column - labels */}
          <div className="bg-gray-900/60 p-6 rounded-2xl border-b border-gray-700 flex flex-col justify-center">
            {labels.map((label, idx) => (
              <div
                key={idx}
                className="text-gray-400 text-sm py-2 border-b border-gray-700 last:border-b-0"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Plan columns */}
          {plans.map((p, index) => {
            // Determine if this column should glow
            const isGlowing = index % 2 === 1; // e.g., 2nd, 4th column (0-based index)

            const ColumnWrapper = isGlowing ? motion.div : "div";

            return (
              <ColumnWrapper
                key={p.name}
                className={`${
                  isGlowing
                    ? "bg-gray-900/60 p-6 rounded-2xl border border-purple-400 shadow-lg shadow-purple-500/50"
                    : "bg-gray-900/60 p-6 rounded-2xl border border-gray-800"
                } flex flex-col justify-center`}
                animate={
                  isGlowing
                    ? {
                        boxShadow: [
                          "0 0 10px rgba(128, 0, 255, 0.6)",
                          "0 0 20px rgba(128, 0, 255, 0.9)",
                          "0 0 10px rgba(128, 0, 255, 0.6)",
                        ],
                      }
                    : {}
                }
                transition={isGlowing ? { duration: 2, repeat: Infinity } : {}}
              >
                <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-400 mb-4">{p.tagline}</p>

                <div className="text-sm text-gray-300 flex flex-col">
                  {[
                    p.who,
                    p.initial,
                    p.spread,
                    p.fees,
                    p.leverage,
                    p.lotSize,
                    p.execLimit,
                    p.openPos,
                    p.stopOut,
                    p.marginCall,
                    p.swap,
                    p.risk,
                    p.assets,
                  ].map((value, idx) => (
                    <div
                      key={idx}
                      className="py-2 border-b border-gray-700 last:border-b-0"
                    >
                      {value}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 text-black font-semibold">
                  Choose {p.name}
                </button>
              </ColumnWrapper>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}

export default Plans;
