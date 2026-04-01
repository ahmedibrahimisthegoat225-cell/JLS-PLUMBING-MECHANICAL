import { Droplets, Flame, Wind, Search, Building2, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Emergency Plumbing',
    description: 'Burst pipes, major leaks, or overflowing toilets? We respond fast to save your home from damage.',
    icon: Droplets,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Boiler Repair & Installation',
    description: 'Expert diagnostics and repairs for all boiler makes and models. New energy-efficient installations.',
    icon: Flame,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional drain unblocking and cleaning using advanced high-pressure water jetting technology.',
    icon: Wind,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Leak Detection',
    description: 'Non-invasive leak detection to find hidden water leaks behind walls or under floors accurately.',
    icon: Search,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Commercial Services',
    description: 'Tailored plumbing and mechanical solutions for businesses, landlords, and property managers.',
    icon: Building2,
    color: 'bg-gray-50 text-gray-600',
  },
  {
    title: 'General Maintenance',
    description: 'From dripping taps to radiator bleeding, we handle all your routine plumbing maintenance needs.',
    icon: Wrench,
    color: 'bg-red-50 text-red-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of plumbing and mechanical solutions 
            delivered by certified professionals with years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-brand-blue hover:gap-3 transition-all"
              >
                Learn More
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
