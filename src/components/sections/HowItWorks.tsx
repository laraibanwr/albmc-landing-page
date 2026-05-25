import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { HOW_IT_WORKS } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function HowItWorks() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-[#F0F1FF] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="HOW IT WORKS" 
          title="Getting Started Is Simple" 
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#4B58FF]/20 via-[#4B58FF] to-[#4B58FF]/20 z-0" />
          
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[step.icon] || LucideIcons.CheckCircle;
              
              return (
                <div 
                  key={step.step}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 overflow-hidden relative"
                  style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="absolute top-4 right-4 text-7xl font-heading font-extrabold text-[#4B58FF]/5 leading-none select-none pointer-events-none">
                    {step.step}
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-[#4B58FF] flex items-center justify-center mx-auto -mt-2 mb-4 relative z-10 text-white shadow-lg">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}