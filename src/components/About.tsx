import React from 'react';

const About: React.FC = () => {
  return (
    <section id="features" className="py-24 border-b border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto md:text-left md:mx-0">
          <h2 className="text-[32px] md:text-[44px] leading-tight font-medium tracking-tight mb-4">
            A new breed of frontend developer. <span className="text-[#8A8F98]">Focusing on modern architectures, scalable components, and pixel-perfect rendering to set a new standard for web interfaces.</span>
          </h2>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="flex flex-col group">
            <div className="relative h-[240px] md:h-[320px] rounded-xl border border-white/[0.08] bg-[#0A0A0A] mb-6 overflow-hidden flex items-center justify-center transition-colors group-hover:bg-[#111]">
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#8A8F98]/50 font-mono">FIG 0.1</span>
              {/* Isometric Wireframe Box Stack - Custom generated SVG */}
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <path d="M100 30L170 65L100 100L30 65L100 30Z" stroke="white" strokeWidth="1" strokeDasharray="2 2" strokeLinejoin="round"/>
                <path d="M100 60L150 85L100 110L50 85L100 60Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M50 85V135L100 160V110" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M150 85V135L100 160" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M100 110V160" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-base font-medium text-[#F2F2F2] mb-2">Clean Architecture</h3>
            <p className="text-sm text-[#8A8F98] leading-relaxed">
              Shaped by the practices and principles of world-class software teams. Code is written to be easily maintained and infinitely scalable.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col group">
            <div className="relative h-[240px] md:h-[320px] rounded-xl border border-white/[0.08] bg-[#0A0A0A] mb-6 overflow-hidden flex items-center justify-center transition-colors group-hover:bg-[#111]">
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#8A8F98]/50 font-mono">FIG 0.2</span>
              {/* Isometric Connecting Blocks SVG */}
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <path d="M60 70L90 85V115L60 100V70Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M60 70L90 55L120 70L90 85L60 70Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M120 70V100L90 115" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                
                <path d="M110 30L140 45V75L110 60V30Z" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M110 30L140 15L170 30L140 45L110 30Z" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M170 30V60L140 75" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinejoin="round"/>
                
                <path d="M70 120L100 135V165L70 150V120Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M70 120L100 105L130 120L100 135L70 120Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M130 120V150L100 165" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-base font-medium text-[#F2F2F2] mb-2">Performant by Default</h3>
            <p className="text-sm text-[#8A8F98] leading-relaxed">
              Designed for speed and fluidity. Utilizing modern data-fetching constraints to reduce noise and restore rendering momentum.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col group">
            <div className="relative h-[240px] md:h-[320px] rounded-xl border border-white/[0.08] bg-[#0A0A0A] mb-6 overflow-hidden flex items-center justify-center transition-colors group-hover:bg-[#111]">
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#8A8F98]/50 font-mono">FIG 0.3</span>
              {/* Isometric Lines Array SVG */}
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 8 }).map((_, i) => (
                  <path 
                    key={i}
                    d={`M${50 + i*10} ${140 - i*5}L${120 + i*10} ${105 - i*5}V${65 - i*5}L${50 + i*10} ${100 - i*5}V${140 - i*5}Z`} 
                    stroke="white" 
                    strokeOpacity={1 - i*0.1}
                    strokeWidth="1.2" 
                    strokeLinejoin="round"
                  />
                ))}
              </svg>
            </div>
            <h3 className="text-base font-medium text-[#F2F2F2] mb-2">Pixel-Perfect UI</h3>
            <p className="text-sm text-[#8A8F98] leading-relaxed">
              Obsessive attention to detail. Interfaces are crafted with precision, incorporating subtle micro-interactions to delight users.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
