import { useInView } from '../../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { COMPANY, ABOUT_CHIPS, ABOUT_CONTENT } from '../../constants/data';

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
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85" 
              alt="ALBMC professional maintenance team" 
              loading="lazy" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-lg" 
            />
            <div className="absolute -bottom-6 right-4 lg:-right-10 bg-[#4B58FF] text-white px-6 py-4 rounded-2xl shadow-xl flex flex-col items-center justify-center">
              <span className="text-4xl font-heading font-extrabold leading-none mb-1">{ABOUT_CONTENT.badgeValue}</span>
              <span className="text-xs font-semibold tracking-wide uppercase">{ABOUT_CONTENT.badgeLabel}</span>
            </div>
          </div>

          <div 
            ref={textRef}
            className={`transition-all duration-1000 delay-200 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <SectionHeader align="left" label={ABOUT_CONTENT.sectionLabel} title={ABOUT_CONTENT.sectionTitle} />
            
            <div className="mt-6 space-y-4">
              {COMPANY.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-gray-600 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {ABOUT_CHIPS.map(chip => (
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