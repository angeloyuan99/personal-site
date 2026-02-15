import React from 'react';

const Services: React.FC = () => {
  const groups = [
    {
      title: "Marketing",
      skills: ["Ad creative", "Copywriting", "Media buying", "UGC strategy"]
    },
    {
      title: "Operations",
      skills: ["Creator management", "Data analysis", "Competitor research", "Project management"]
    },
    {
      title: "Technical",
      skills: ["Mathematical logic", "Business strategy", "Retention loops", "Product feedback"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12 reveal">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((group, idx) => (
            <div key={idx} className="reveal">
              <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-6 underline underline-offset-8 decoration-zinc-100">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-zinc-500 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;