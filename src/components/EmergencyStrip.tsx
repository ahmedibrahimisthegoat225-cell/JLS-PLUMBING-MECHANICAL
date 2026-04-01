import { Phone } from 'lucide-react';

export default function EmergencyStrip() {
  return (
    <div className="bg-brand-orange py-6 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold leading-none mb-1 uppercase tracking-tight">
              Emergency Plumbing?
            </h3>
            <p className="text-white/90 font-medium">
              Burst pipe? No heat? We’re available 24/7.
            </p>
          </div>
        </div>
        
        <a 
          href="tel:555-0123"
          className="bg-white text-brand-orange hover:bg-gray-100 px-10 py-4 rounded-xl font-black text-xl shadow-2xl transition-all transform hover:scale-105"
        >
          CALL NOW: (555) 0123
        </a>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="text-9xl font-black text-white whitespace-nowrap select-none">
          EMERGENCY 24/7 EMERGENCY 24/7 EMERGENCY 24/7
        </div>
      </div>
    </div>
  );
}
