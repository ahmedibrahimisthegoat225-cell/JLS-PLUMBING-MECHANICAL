import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'West End',
    text: 'JLS saved us when our pipe burst at 2 AM. They were here in 30 minutes and fixed everything perfectly. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Mark Thompson',
    location: 'City Center',
    text: 'Professional, clean, and honest pricing. They installed a new boiler for us and the workmanship is top-notch.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    location: 'Northside',
    text: 'Best plumbers I have ever used. They found a leak that two other companies missed. Very impressed with their technology.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don’t just take our word for it. We pride ourselves on delivering 
              exceptional service to every single client.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-4xl font-black text-brand-dark tracking-tighter">4.9/5</div>
            <div className="flex flex-col">
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Google Rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-gray-100" size={60} />
              <div className="flex text-brand-orange mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
