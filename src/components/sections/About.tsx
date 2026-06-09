import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  const [imgRef, imgVisible] = useInView<HTMLDivElement>();
  const [textRef, textVisible] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={imgRef} 
            className={`relative transition-all duration-1000 ease-out ${imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=75" 
              alt="ALBMC professional maintenance team" 
              loading="lazy" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-lg" 
            />
            <div className="absolute -bottom-6 right-4 lg:-right-10 bg-[#4B58FF] text-white px-6 py-4 rounded-2xl shadow-xl flex flex-col items-center justify-center">
              <span className="text-4xl font-heading font-extrabold leading-none mb-1">15+</span>
              <span className="text-xs font-semibold tracking-wide uppercase">Years of Excellence</span>
            </div>
          </div>

          <div 
            ref={textRef}
            className={`transition-all duration-1000 delay-200 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <SectionHeader align="left" label="WHO WE ARE" title="Built on Trust, Delivered with Excellence" />
            
            <div className="mt-6 space-y-4">
              <p className="text-gray-600 text-base leading-relaxed">
                ALASAD ALLAMEA BUILDING MAINTENANCE AND CLEANING L.L.C S.O.C is a premier facility management and maintenance provider operating across Dubai and Sharjah. With over 15 years of industry experience, we specialize in delivering comprehensive building solutions tailored to the unique needs of residential, commercial, and industrial properties.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our commitment is simple: we provide reliable, high-quality, and cost-effective maintenance services. From emergency plumbing repairs to annual maintenance contracts (AMC), our fully licensed operations ensure that your facilities remain safe, compliant, and operational year-round.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {['In-House & Outsourced', 'Certified Technicians', 'Supervisor On-Call'].map(chip => (
                <span key={chip} className="bg-[#F0F1FF] text-[#4B58FF] text-[13px] sm:text-sm font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}