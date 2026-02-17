import React from 'react';

interface TimelineItem {
  period: string;
  brand: string;
  description: string;
  isCurrent?: boolean;
  link?: string;
}

const Portfolio: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      period: "2026 JAN - PRESENT",
      brand: "1851 Labs",
      description: "Currently doing marketing, business analysis, and product management in Toronto.",
      isCurrent: true
    },
    {
      period: "2025 DEC - PRESENT",
      brand: "E-commerce Growth",
      description: "Helped grow an e-commerce brand to over $2M in sales through swiping, creating, and iterating on facebook ads",
      isCurrent: true
    },
    {
      period: "2025 SEP - NOV",
      brand: "Kalshi",
      description: "Generated 80M+ views on short-form talking head content for Kalshi at a $0.4 CPM."
    },
    {
      period: "2025 JUN - AUG",
      brand: "Personal Brand",
      description: "Grew a personal Instagram to 80K+ followers in 2 months, generating 20M+ views.",
      link: "https://www.instagram.com/itz_angelo2006/"
    },
    {
      period: "2025 AUG - DEC",
      brand: "DeepRoyale",
      description: "Built a Clash Royale notetaking and match analysis web app that reached 2000+ active users.",
      link: "https://www.deeproyale.com/"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 border-y border-zinc-100 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.3em] mb-16 reveal">
          Experience & Results
        </h2>
        
        <div className="relative border-l border-zinc-100 ml-3 md:ml-0">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-16 ml-8 md:ml-12 relative reveal">
              {/* Timeline Dot */}
              <div className={`absolute -left-[37px] md:-left-[53px] w-3 h-3 border-2 ${
                item.isCurrent ? 'bg-black border-black' : 'bg-white border-zinc-200'
              } rounded-full z-10 top-1.5`} />
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest uppercase">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="text-[8px] font-mono bg-zinc-100 text-black px-1.5 py-0.5 rounded-sm">ACTIVE</span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline underline-offset-4 decoration-zinc-300"
                    >
                      {item.brand}
                    </a>
                  ) : (
                    item.brand
                  )}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;