import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Smartphone } from 'lucide-react';

const Card: React.FC<{ icon: React.ReactNode; title: string; text: string; delay: number }> = ({ icon, title, text, delay }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-island-teal/10 border border-transparent hover:border-island-teal/20 transition-all duration-300"
  >
    <div className="w-14 h-14 bg-island-teal/10 rounded-2xl flex items-center justify-center text-island-teal mb-6">
      {icon}
    </div>
    <h3 className="font-heading font-bold text-xl text-island-slate mb-3">{title}</h3>
    <p className="text-island-slate/70 leading-relaxed">{text}</p>
  </motion.div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-island-sand rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-island-slate mb-4"
          >
            Why Facebook <span className="text-island-orange">Isn't Enough</span> Anymore.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-island-slate/60 text-lg"
          >
            Social media is for engagement, not information. Don't make your customers dig for details.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card 
            delay={0}
            icon={<MapPin className="w-8 h-8" />}
            title="Tourists Search Google"
            text="Travelers look for 'best breakfast near me' or 'scooter rental Siquijor'. They don't scroll through months of Facebook posts to find your location."
          />
          <Card 
            delay={0.2}
            icon={<ShieldCheck className="w-8 h-8" />}
            title="Instant Credibility"
            text="A professional .com website tells customers you are an established, trustworthy business, not just a temporary pop-up."
          />
          <Card 
            delay={0.4}
            icon={<Smartphone className="w-8 h-8" />}
            title="Own Your Presence"
            text="Don't rely on an algorithm that hides your posts unless you pay. With a website, you control the content, the photos, and the experience."
          />
        </motion.div>
      </div>
    </section>
  );
};