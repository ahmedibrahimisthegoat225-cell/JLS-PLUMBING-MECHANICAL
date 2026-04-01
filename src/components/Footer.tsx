import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                JLS
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight">
                PLUMBING & MECHANICAL
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your local experts for all plumbing and mechanical needs. 
              Available 24/7 for emergencies. Licensed, insured, and guaranteed.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-blue rounded-lg flex items-center justify-center transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'Services', 'About Us', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-brand-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                'Emergency Plumbing',
                'Boiler Repair',
                'Drain Cleaning',
                'Leak Detection',
                'Commercial Services',
                'General Maintenance'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-brand-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call Anytime</p>
                  <a href="tel:555-0123" className="text-lg font-bold hover:text-brand-blue transition-colors">
                    (555) 0123
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                  <a href="mailto:info@jlsplumbing.com" className="text-lg font-bold hover:text-brand-blue transition-colors">
                    info@jlsplumbing.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Service Areas</p>
                  <p className="text-lg font-bold">City Center & Surrounding Areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <p>© {currentYear} JLS Plumbing & Mechanical. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
