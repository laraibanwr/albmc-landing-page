import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="WHAT WE DO" 
          title="Our Core Services" 
          subtitle="From plumbing to full building management — one trusted partner for it all." 
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[service.icon] || LucideIcons.Wrench;
            const isPurple = service.accent === 'purple';
            const bgClass = isPurple ? 'bg-[#F0F1FF]' : 'bg-[#FFF0E8]';
            const textClass = isPurple ? 'text-[#4B58FF]' : 'text-[#FF751F]';
            const borderHoverClass = isPurple ? 'hover:border-[#4B58FF]' : 'hover:border-[#FF751F]';

            return (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col ${borderHoverClass}`}
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${bgClass} ${textClass}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${textClass.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}