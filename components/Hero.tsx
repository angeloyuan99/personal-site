import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 reveal">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-100 border border-zinc-200 flex-shrink-0 transition-all duration-700 overflow-hidden relative group">
          <img
            src="/images/website.jpg"
            alt="Angelo Yuan"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image is missing
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement?.classList.add(
                "flex",
                "items-center",
                "justify-center",
              );
              const span = document.createElement("span");
              span.className =
                "text-zinc-400 text-xs font-mono uppercase tracking-widest";
              span.innerText = "Photo";
              e.currentTarget.parentElement?.appendChild(span);
            }}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Angelo Yuan
          </h1>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-6">
            UWaterloo Math & Laurier Business | Marketing
          </p>
          <p className="text-zinc-600 text-base max-w-xl leading-relaxed">
            I help companies and brands grow by making content people watch.
          </p>
          <p className="text-zinc-600 text-base max-w-xl leading-relaxed">
            Specializing in ads, short-form videos, and strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
