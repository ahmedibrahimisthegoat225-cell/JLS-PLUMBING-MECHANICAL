import { ShieldCheck, Clock, Award, DollarSign, Wrench, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Licensed & Fully Insured',
    description: 'We are fully certified and insured for your peace of mind and protection.',
    icon: ShieldCheck,
  },
  {
    title: 'Same-Day Service',
    description: 'We prioritize urgent calls and aim to resolve most issues on the same day.',
    icon: Clock,
  },
  {
    title: 'Upfront Pricing',
    description: 'No hidden costs or surprise fees. You get a clear quote before we start.',
    icon: DollarSign,
  },
  {
    title: 'Warranty-Backed Work',
    description: 'All our repairs and installations come with a comprehensive workmanship guarantee.',
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumbing Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue rounded-3xl -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-orange rounded-full -z-0 hidden md:block"></div>
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <p className="text-3xl font-black text-brand-dark leading-none">15+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Why Homeowners Trust <br />
              <span className="text-brand-blue">JLS Plumbing & Mechanical</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We’ve built our reputation on reliability, transparency, and 
              unmatched technical expertise. When you call JLS, you’re getting 
              more than just a fix—you’re getting a long-term solution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center">
                    <reason.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
