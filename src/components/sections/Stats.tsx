import { STATS } from '../../constants/data';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useInView } from '../../hooks/useInView';

export default function Stats() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#F0F1FF] py-14 border-t border-b border-[#4B58FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-gray-300/70 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-[#4B58FF] font-heading">
                {isVisible ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : '0'}
              </div>
              <div className="text-gray-600 text-sm mt-2 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}