import React, { useState } from 'react';

const StrategyTool: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async () => {
    if (!idea.trim() || !email.trim() || !brand.trim()) {
      setStatus({ type: 'error', message: 'Please provide your email, brand, and idea.' });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    const webhookUrl = "https://discordapp.com/api/webhooks/1472435376902770749/wONZcBcL1YAvD2MmpC5ujMUdV1ZYpMJ7PcpeGhcO9dxuON24HlLDC4ZcXvGmrzxbkeon";

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [{
            title: "New Ad Idea Submitted",
            color: 0x000000,
            fields: [
              {
                name: "Email",
                value: email,
                inline: true
              },
              {
                name: "Brand / Product",
                value: brand,
                inline: true
              },
              {
                name: "Ad Idea",
                value: idea,
                inline: false
              }
            ],
            timestamp: new Date().toISOString()
          }]
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: "Sent! I'll get back to you soon." });
        setIdea('');
        setEmail('');
        setBrand('');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto border border-zinc-200 bg-white p-8 reveal">
      <h3 className="text-[10px] font-mono font-bold text-black uppercase tracking-[0.2em] mb-8">Direct Feedback</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">Your Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@example.com"
            className="w-full bg-zinc-50 border border-zinc-100 rounded-none p-4 text-black text-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">Brand / Product</label>
          <input 
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g. Kalshi, Nike, etc."
            className="w-full bg-zinc-50 border border-zinc-100 rounded-none p-4 text-black text-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">Ad idea / script</label>
        <textarea 
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Paste your hook, script, or idea here..."
          className="w-full bg-zinc-50 border border-zinc-100 rounded-none p-4 text-black text-sm focus:outline-none focus:border-black transition-colors h-32 resize-none"
        />
      </div>

      <button 
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all text-xs disabled:bg-zinc-400"
      >
        {loading ? "Sending..." : "get direct feedback from me"}
      </button>

      {status && (
        <div className={`mt-6 p-4 text-[11px] font-mono uppercase tracking-wider text-center ${
          status.type === 'success' ? 'bg-zinc-50 text-black border border-zinc-100' : 'bg-red-50 text-red-600 border border-red-100'
        }`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default StrategyTool;