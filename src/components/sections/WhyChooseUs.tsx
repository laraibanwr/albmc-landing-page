import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { WHY_CHOOSE } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="why-us" className="bg-[#4B58FF] relative overflow-hidden py-14 md:py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none select-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          light={true} 
          label="WHY CHOOSE US" 
          title="Why Industry Leaders Trust ALBMC" 
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[item.icon] || LucideIcons.CheckCircle;
            
            return (
              <div 
                key={item.title}
                className="bg-white/10 border border-white/15 rounded-2xl p-6 overflow-hidden hover:bg-white/15 transition-colors duration-200"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF751F]/20 flex items-center justify-center text-[#FF751F]">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-heading font-bold text-lg mt-4 mb-2">{item.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}