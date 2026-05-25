interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'center' | 'left';
}
export default function SectionHeader({ label, title, subtitle, light = false, align = 'center' }: SectionHeaderProps) {
  const textAlign = align === 'left' ? 'text-left' : 'text-center';
  const mx = align === 'left' ? '' : 'mx-auto';
  return (
    <div className={`${textAlign} ${mx} max-w-2xl`}>
      {label && (
        <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
          light ? 'bg-white/15 text-white' : 'bg-[#F0F1FF] text-[#4B58FF]'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl font-extrabold leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-purple-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}