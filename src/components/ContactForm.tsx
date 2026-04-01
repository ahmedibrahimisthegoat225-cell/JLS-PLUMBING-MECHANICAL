import { Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-10 lg:p-16 bg-brand-blue text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                Get Your Free <br />Quote in Minutes
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Need a plumber today? Fill out the form and our team will get back to you immediately with a transparent estimate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium">Licensed & Fully Insured</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium">Upfront Pricing - No Surprises</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium">Workmanship Guarantee</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm uppercase tracking-widest font-bold text-white/60 mb-2">Direct Line</p>
              <a href="tel:555-0123" className="text-3xl font-black hover:text-brand-orange transition-colors">
                (555) 0123
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-16 bg-white">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for reaching out. One of our experts will call you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Service Needed</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all appearance-none">
                    <option>Emergency Repair</option>
                    <option>Boiler Service</option>
                    <option>Drain Cleaning</option>
                    <option>Leak Detection</option>
                    <option>Commercial Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Urgency</label>
                  <div className="flex flex-wrap gap-4">
                    {['Emergency', 'Today', 'This Week', 'Just a Quote'].map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="urgency" className="w-5 h-5 text-brand-blue border-gray-300 focus:ring-brand-blue" />
                        <span className="text-gray-700 group-hover:text-brand-blue transition-colors">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your plumbing issue..."
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-5 rounded-xl font-black text-xl shadow-xl transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  GET MY FREE QUOTE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
