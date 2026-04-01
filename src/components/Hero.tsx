import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
          alt="Plumbing Professional"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-blue/20 text-brand-blue border border-brand-blue/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Available 24/7 for Emergencies
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              24/7 Plumbing & <br />
              <span className="text-brand-blue">Mechanical Experts</span> <br />
              You Can Trust
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Fast response. Licensed professionals. No hidden costs. 
              We provide guaranteed workmanship for all your residential and commercial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:555-0123"
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                Call Now: (555) 0123
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-10"
          >
            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck className="text-brand-blue" size={24} />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Clock className="text-brand-blue" size={24} />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 hidden md:flex">
              <Award className="text-brand-blue" size={24} />
              <span className="font-medium">Warranty Backed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
