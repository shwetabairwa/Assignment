function Hero() {
  return (
    <section id="home" className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* ✅ Our Process Box */}
          <span className="inline-block px-6 py-2 mb-6 text-sm text-gray-200 
            border border-purple-400/70 rounded-[30px]
            shadow-[0_0_10px_rgba(168,85,247,0.2)]
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            transition">
            Our Process
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Become a <span className="text-purple-400">SHBA Pro</span> in sec…
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-8">
            🚀 Sign up. Fund. Trade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
