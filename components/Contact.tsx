import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center reveal">
        <h2 className="text-3xl font-bold mb-8">Work with me</h2>
        <p className="text-zinc-500 text-sm mb-12">
          I work with startups, e-commerce brands/shipping agencies, and crypto projects.
        </p>

        <a 
          href="mailto:yuanangelo660@gmail.com" 
          className="inline-block px-12 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all text-[10px]"
        >
          yuanangelo660@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;