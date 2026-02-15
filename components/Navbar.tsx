import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xs uppercase tracking-[0.2em] text-black">Angelo Yuan</span>
        <div className="flex items-center gap-8 text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
          <a href="#portfolio" className="hover:text-black transition-colors">Work</a>
          <a href="mailto:yuanangelo660@gmail.com" className="text-black hover:underline underline-offset-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;