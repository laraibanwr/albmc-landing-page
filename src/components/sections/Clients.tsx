import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { CLIENTS } from '../../constants/data';
import * as LucideIcons from 'lucide-react';

export default function Clients() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="clients" className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="OUR CLIENTS" 
          title="Trusted by UAE's Leading Institutions" 
        />
        
        <p className="text-center text-gray-500 max-w-xl mx-auto mt-4">
          From massive exhibition centers to high-end residential towers, our team has proven experience handling the UAE's most demanding facility needs.
        </p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {CLIENTS.map((client, index) => {
            const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[client.icon] || LucideIcons.Building;
            
            return (
              <div 
                key={client.name}
                className="relative bg-white rounded-2xl p-8 border-l-4 border-[#FF751F] border-t border-r border-b border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="w-12 h-12 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF]">
                  <Icon size={24} />
                </div>
                
                <h3 className="font-heading font-bold text-gray-900 text-xl mt-4 mb-2">{client.name}</h3>
                
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-[#FF751F] font-medium bg-[#FFF0E8] px-3 py-1 rounded-full">
                    <LucideIcons.MapPin size={12} />
                    {client.location}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                  "{client.description}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}