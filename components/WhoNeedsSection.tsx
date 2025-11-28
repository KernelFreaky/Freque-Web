import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, BedDouble, Bike, Anchor, Check, X } from 'lucide-react';

const categories = [
  {
    icon: <Utensils className="w-6 h-6" />,
    name: "The Hidden Gems",
    sub: "Food & Dining",
    problem: "Tourists can't find your menu online, so they go to the same 3 tourist traps instead.",
    solution: "Digital Menu + Google Map Pin.",
    examples: ["Specialty Cafes & Bakeries", "Restobars & Sunset Lounges", "Authentic Eateries / Carinderias"]
  },
  {
    icon: <BedDouble className="w-6 h-6" />,
    name: "The Stay & Sleep",
    sub: "Accommodations",
    problem: "Foreigners want to see high-quality photos before booking. Facebook lowers photo quality.",
    solution: "High-res Gallery + Direct WhatsApp Booking.",
    examples: ["Homestays & Guesthouses", "Backpacker Hostels", "Boutique Resorts & Villas"]
  },
  {
    icon: <Bike className="w-6 h-6" />,
    name: "The Movers",
    sub: "Transport & Tours",
    problem: "Tourists want to book transportation before arriving at the port.",
    solution: "Inventory Showcase + Book Now button.",
    examples: ["Motorbike & Scooter Rentals", "Private Van/Car Charters", "Tricycle Tour Guides"]
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    name: "The Experience Makers",
    sub: "Activities",
    problem: "Tourists won't trust their safety/body to a business that looks sketchy online.",
    solution: "Professional Brochure + Certifications.",
    examples: ["Dive Centers & Freedive Schools", "Spas & Wellness Centers", "Event & Wedding Planners", "Tattoo Artists"]
  }
];

const checklistItems = [
  "You’re tired of answering the same questions on Messenger.",
  "You want more foreign customers (Google > Facebook).",
  "You own your business and make decisions quickly.",
  "You want to own your website (no monthly dev fees)."
];

const antiPersonaItems = [
  "You need full e-commerce.",
  "You need custom web apps with logins/databases.",
  "You have no photos of your business yet."
];

const WhoNeedsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-island-sand border-t border-island-teal/5">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-island-slate mb-4"
          >
            Who Needs a <span className="text-island-teal">Speed Web?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-island-slate/60 text-lg"
          >
            We build for island businesses ready to welcome more tourists.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-island-teal/10 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-island-teal/5 text-island-teal flex items-center justify-center mb-4">
                {cat.icon}
              </div>
              
              <div className="mb-4">
                <h3 className="font-heading font-bold text-lg text-island-slate leading-tight">{cat.name}</h3>
                <span className="text-xs font-semibold text-island-teal/80 uppercase tracking-wide">{cat.sub}</span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-island-slate/70 mb-3 italic">
                  "{cat.problem}"
                </p>
                <p className="text-sm font-semibold text-island-teal">
                  Solution: <span className="text-island-slate font-normal">{cat.solution}</span>
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-50">
                <ul className="space-y-2">
                  {cat.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-island-teal mt-1.5 flex-shrink-0"></div>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Qualifiers Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Is This You? */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-island-teal/10"
          >
            <h3 className="font-heading font-bold text-2xl text-island-slate mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                <Check size={18} strokeWidth={3} />
              </span>
              Is This You?
            </h3>
            <ul className="space-y-4">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-island-slate/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not the Right Fit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-50 rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="font-heading font-bold text-2xl text-gray-400 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500">
                <X size={18} strokeWidth={3} />
              </span>
              We Might Not Be the Right Fit If...
            </h3>
            <ul className="space-y-4">
              {antiPersonaItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 opacity-70">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoNeedsSection;