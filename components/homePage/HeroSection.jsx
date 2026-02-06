import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/herosection_01.jpg"
        alt="Kraviona Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-bg-main"></div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="max-w-2xl">

            <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
              Building Scalable <br />
              <span className="text-accent-primary">Digital Platforms</span>
            </h1>

            <p className="mt-6 text-lg text-text-secondary">
              We design, build, and scale secure technology systems for startups
              and growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-accent-primary text-white font-semibold
                hover:bg-accent-hover transition shadow-lg shadow-accent-primary/30"
              >
                Start a Project
              </Link>

              <Link
                href="/solutions"
                className="px-6 py-3 rounded-xl border border-bg-divider text-text-primary
                hover:bg-bg-surface transition"
              >
                Explore Solutions
              </Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
