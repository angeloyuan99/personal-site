import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-400 text-[9px] font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Angelo Yuan
        </div>
        <div className="flex gap-8 text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">LinkedIn</a>
          <a href="#" className="hover:text-black">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;