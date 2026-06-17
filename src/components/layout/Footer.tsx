import { COMPANY, SERVICES, NAV_LINKS, FOOTER_CONTENT } from '../../constants/data';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#030712' }} className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4B58FF] to-transparent opacity-50" />
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-heading font-extrabold text-2xl text-white block mb-4">
              {COMPANY.name}
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              {COMPANY.tagline}
            </p>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`${FOOTER_CONTENT.whatsappUs} (opens in a new tab)`} className="inline-flex items-center gap-2 text-[#4B58FF] font-medium text-sm hover:text-white transition-colors duration-200">
              <MessageCircle size={16} /> {FOOTER_CONTENT.whatsappUs}
            </a>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-heading font-bold text-base mb-4">{FOOTER_CONTENT.servicesTitle}</h3>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-heading font-bold text-base mb-4">{FOOTER_CONTENT.contactTitle}</h3>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              <li className="text-gray-400 text-sm">{COMPANY.address}</li>
              <li className="text-gray-400 text-sm">
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} aria-label={`Call ALBMC hotline at ${COMPANY.phone}`} className="hover:text-white transition-colors duration-200">{COMPANY.phone}</a>
              </li>
              <li className="text-gray-400 text-sm">
                <a href={`mailto:${COMPANY.email}`} aria-label={`Send an email to ALBMC at ${COMPANY.email}`} className="hover:text-white transition-colors duration-200">{COMPANY.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-heading font-bold text-base mb-4">{FOOTER_CONTENT.linksTitle}</h3>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. {FOOTER_CONTENT.rightsReserved}
          </p>
          <span className="bg-[#F0F1FF] text-[#4B58FF] text-xs px-3 py-1.5 rounded-full font-medium">
            {FOOTER_CONTENT.licenseBadge}
          </span>
        </div>
      </div>
    </footer>
  );
}