import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { AMC_FEATURES } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function AMC() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-[#0D0E1A] relative overflow-hidden py-14 md:py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4B58FF]/20 rounded-full blur-3xl pointer-events-none select-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <SectionHeader 
              light={true} 
              align="left" 
              label="AMC" 
              title="Annual Maintenance Contracts" 
            />
            <p className="text-gray-300 text-base leading-relaxed mt-6 max-w-lg">
              Take the guesswork out of property maintenance. Our flexible AMC packages provide guaranteed preventive care, priority emergency response, and significant cost savings over ad-hoc repairs. Perfect for commercial buildings, residential towers, and multi-property portfolios.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#FF751F] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#e66a1c] transition-colors duration-200 mt-8"
            >
              Get AMC Pricing
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMC_FEATURES.map((feature, index) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[feature.icon] || LucideIcons.CheckCircle;
              
              return (
                <div 
                  key={feature.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-700 ease-out"
                  style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${(index * 150) + 200}ms`
                  }}
                >
                  <Icon size={24} className="text-[#FF751F] w-8 h-8" />
                  <h3 className="text-white font-heading font-semibold text-base mt-3 mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}