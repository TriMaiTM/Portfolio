import React from 'react';

const Hero: React.FC = () => {

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="oc-section relative z-10 flex flex-col items-center text-center">
        
        {/* Massive Headline */}
        <h1 className="text-[56px] md:text-[80px] leading-[1.05] tracking-tight font-medium bg-text-gradient mb-6 max-w-4xl">
          The product development portfolio for frontend engineers
        </h1>

        <p className="text-xl md:text-[22px] text-[#8A8F98] max-w-3xl mb-16 leading-relaxed font-medium">
          Purpose-built for planning and building high-performance web applications. Designed for the modern era.
        </p>

        {/* Mac OS Window Placeholder */}
        <div className="w-full max-w-[1080px] rounded-xl border border-white/[0.08] bg-[#0A0A0A] mac-window-shadow overflow-hidden flex flex-col relative" style={{ aspectRatio: '16/9' }}>
          
          {/* Mac OS Toolbar */}
          <div className="h-10 bg-[#141414] border-b border-white/[0.05] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ED6A5E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
            <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
          </div>

          {/* Editor/Browser Body Placeholder */}
          <div className="flex-1 bg-[#0A0A0A] flex flex-col items-center justify-center relative overflow-hidden">
             
             {/* Some wireframe-like lines for placeholder feel */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20"></div>

             <div className="z-10 flex flex-col items-center">
                <span className="text-4xl mb-4">📸</span>
                <p className="text-[#8A8F98] font-medium tracking-wide">Screenshot of your best project goes here</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
