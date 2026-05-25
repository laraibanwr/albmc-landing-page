import { STATS } from '../../constants/data';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useInView } from '../../hooks/useInView';

export default function Stats() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#1A1D3B] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center ${index > 1 ? 'pt-8 lg:pt-0' : ''}`}>
              <div className="text-5xl font-extrabold text-white font-heading">
                {isVisible ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : '0'}
              </div>
              <div className="text-gray-400 text-sm mt-2 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}