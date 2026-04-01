import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: ShieldCheck, text: 'Licensed & Insured' },
    { icon: Clock, text: '24/7 Emergency Service' },
    { icon: Award, text: 'Certified Professionals' },
    { icon: Star, text: '4.9/5 Google Rating', sub: 'Based on 200+ reviews' },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8 relative z-20 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gray-50 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <item.icon size={24} />
              </div>
              <div>
                <p className="font-bold text-brand-dark leading-tight">{item.text}</p>
                {item.sub && <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
