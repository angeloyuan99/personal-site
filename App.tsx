import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import StrategyTool from './components/StrategyTool';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <section className="py-24 px-4 bg-zinc-50/30 border-t border-zinc-100">
          <StrategyTool />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;