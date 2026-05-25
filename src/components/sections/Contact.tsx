import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { COMPANY } from '../../constants/data';
import { MapPin, Phone, MessageCircle, Mail, Globe, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${formData.name}. I need help with ${formData.service || 'maintenance'}. \nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="CONTACT US" 
          title="Let's Maintain Your Property Together" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Left: Contact Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {COMPANY.serviceAreas.map(area => (
                <span key={area} className="bg-[#4B58FF] text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex items-start gap-4 py-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Office Address</div>
                  <div className="text-gray-900 font-semibold text-sm mt-0.5">{COMPANY.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone Number</div>
                  <div className="text-gray-900 font-semibold text-sm mt-0.5">
                    <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#4B58FF] transition-colors">{COMPANY.phone}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">WhatsApp</div>
                  <div className="text-gray-900 font-semibold text-sm mt-0.5">
                    <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-[#4B58FF] transition-colors">{COMPANY.phone}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</div>
                  <div className="text-gray-900 font-semibold text-sm mt-0.5">
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-[#4B58FF] transition-colors">{COMPANY.email}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4">
                <div className="w-10 h-10 bg-[#F0F1FF] rounded-xl flex items-center justify-center text-[#4B58FF] flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Website</div>
                  <div className="text-gray-900 font-semibold text-sm mt-0.5">
                    <a href={`https://${COMPANY.website}`} target="_blank" rel="noreferrer" className="hover:text-[#4B58FF] transition-colors">{COMPANY.website}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#FF751F]/10 border border-[#FF751F]/20 rounded-2xl p-4 flex items-center gap-3">
              <AlertCircle size={24} className="text-[#FF751F] flex-shrink-0" />
              <div>
                <p className="text-[#FF751F] font-bold text-sm">24/7 Emergency Response Available</p>
                <p className="text-gray-600 text-xs mt-0.5">Call our hotline directly for immediate assistance.</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Request a Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="AC Maintenance">AC Maintenance</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Full Building Maintenance">Full Building Maintenance</option>
                  <option value="AMC Contract">AMC Contract</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4B58FF] focus:border-transparent transition-colors duration-200 bg-white resize-none"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 bg-[#4B58FF] text-white py-3.5 rounded-xl font-semibold hover:bg-[#3542E0] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send via WhatsApp <MessageCircle size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}