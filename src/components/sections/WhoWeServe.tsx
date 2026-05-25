import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { WHO_WE_SERVE } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function WhoWeServe() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="who-we-serve" className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="WHO WE SERVE" 
          title="Every Property Type, One Reliable Partner" 
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {WHO_WE_SERVE.map((item, index) => {
            const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[item.icon] || LucideIcons.Building;

            return (
              <div 
                key={item.title}
                className="relative rounded-2xl overflow-hidden h-72 group cursor-default"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2 text-[#FF751F]">
                    <Icon size={20} />
                    <h3 className="text-white font-heading font-bold text-xl">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">{item.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF751F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}