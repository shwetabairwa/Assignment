"use client";

import CountUp from "react-countup";
import MovingLine from "./MovingLine";

function Payouts() {
  return (
    <section
      id="payouts"
      className="min-h-[100dvh] flex flex-col justify-center py-16 px-6 md:px-10 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Animated Number */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-400">
          Payouts
        </h2>
        <p className="text-lg md:text-6xl text-gray-400">
          We’ve Paid Out Over
        </p>
        <p className="text-lg md:text-xl text-gray-400">
          Your Trust is Our Fuel—Power Up with Abcd
        </p>
        <div className="text-6xl md:text-[6rem] lg:text-[13rem] font-extrabold text-white">
          $<span className="text-indigo-400">
            <CountUp end={999716} duration={3} separator="," />
          </span>
          +
        </div>

        {/* Moving Line Component */}

      </div>
    </section>
  );
}

export default Payouts;
