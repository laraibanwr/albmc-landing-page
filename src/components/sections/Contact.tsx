import { useState, useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { COMPANY, SERVICES_OPTIONS, CONTACT_CONTENT } from '../../constants/data';
import { MapPin, Phone, MessageCircle, Mail, AlertCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const text = `Hi, I'm ${formData.name}. I need help with ${formData.service}. \nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label={CONTACT_CONTENT.sectionLabel} 
          title={CONTACT_CONTENT.sectionTitle} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                {COMPANY.serviceAreas.map(area => (
                  <span key={area} className="bg-[#4B58FF] text-white text-[11px] sm:text-xs px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full font-medium whitespace-nowrap">
                    {area}
                  </span>
                ))}
              </div>

              <div className="flex flex-col">
                <div className="flex items-start gap-4 py-[22px] border-b border-gray-200">
                  <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{CONTACT_CONTENT.labelAddress}</div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">{COMPANY.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-[22px] border-b border-gray-200">
                  <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{CONTACT_CONTENT.labelPhone}</div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">
                      <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#4B58FF] transition-colors">{COMPANY.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-[22px] border-b border-gray-200">
                  <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{CONTACT_CONTENT.labelWhatsapp}</div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">
                      <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-[#4B58FF] transition-colors">{COMPANY.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-[22px]">
                  <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{CONTACT_CONTENT.labelEmail}</div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">
                      <a href={`mailto:${COMPANY.email}`} className="hover:text-[#4B58FF] transition-colors">{COMPANY.email}</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="mt-6 bg-[#FF751F]/10 border border-[#FF751F]/20 rounded-2xl p-4 flex items-center gap-3">
              <AlertCircle size={24} className="text-[#FF751F] flex-shrink-0" />
              <div>
                <p className="text-[#FF751F] font-bold text-sm">{CONTACT_CONTENT.emergencyTitle}</p>
                <p className="text-gray-600 text-xs mt-0.5">{CONTACT_CONTENT.emergencySubtitle}</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">{CONTACT_CONTENT.formTitle}</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{CONTACT_CONTENT.fieldFullName}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder={CONTACT_CONTENT.placeholderFullName}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{CONTACT_CONTENT.fieldPhone}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder={CONTACT_CONTENT.placeholderPhone}
                />
              </div>

              <div className="relative" ref={dropdownRef}>
                <label id="service-select-label" className="block text-sm font-medium text-gray-700 mb-1">{CONTACT_CONTENT.fieldService}</label>
                <button
                  type="button"
                  id="service-select-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                  aria-labelledby="service-select-label"
                  className={`w-full flex items-center justify-between px-4 py-2.5 border rounded-xl text-sm focus:outline-none transition-all duration-200 bg-white ${
                    showError 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500 text-red-500 font-semibold' 
                      : 'border-gray-200 focus:ring-2 focus:ring-[#4B58FF] text-gray-900'
                  }`}
                >
                  <span className={formData.service ? "text-gray-900" : "text-gray-500"}>
                    {formData.service || CONTACT_CONTENT.placeholderService}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#4B58FF]' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden py-1.5"
                    >
                      <div 
                        role="listbox"
                        aria-labelledby="service-select-label"
                        className="max-h-60 overflow-y-auto overscroll-y-contain custom-scrollbar pr-1"
                      >
                        {SERVICES_OPTIONS.map((option) => (
                          <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={formData.service === option}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, service: option }));
                              setDropdownOpen(false);
                              setShowError(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center justify-between ${
                              formData.service === option 
                                ? 'bg-[#F0F1FF] text-[#4B58FF] font-semibold' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {showError && (
                  <p className="text-red-500 text-xs mt-1">{CONTACT_CONTENT.errorService}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{CONTACT_CONTENT.fieldMessage}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white resize-none"
                  placeholder={CONTACT_CONTENT.placeholderMessage}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#4B58FF] text-white py-3 rounded-xl font-semibold hover:bg-[#3542E0] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {CONTACT_CONTENT.submitButton} <MessageCircle size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}