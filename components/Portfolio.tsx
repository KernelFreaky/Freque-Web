import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

type Category = 'Eatery' | 'Resort' | 'Rental';

const projects: Record<Category, { title: string; desc: string; image: string }> = {
  Eatery: {
    title: "Coco Grove Bistro",
    desc: "A mobile-first menu and reservation system that loads instantly even on 3G.",
    image: "https://picsum.photos/1000/700?random=1"
  },
  Resort: {
    title: "San Juan Sunset Villas",
    desc: "Direct booking integration and gallery showcase to reduce OTA commissions.",
    image: "https://picsum.photos/1000/700?random=2"
  },
  Rental: {
    title: "Island Scoot Rentals",
    desc: "Inventory display and WhatsApp booking flow for fast conversion.",
    image: "https://picsum.photos/1000/700?random=3"
  }
};

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Resort');

  return (
    <section id="portfolio" className="py-24 bg-island-sand relative overflow-hidden">
      {/* Subtle Parallax/Background Element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 top-20 w-[600px] h-[600px] border-2 border-island-teal/5 rounded-full border-dashed z-0"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-island-slate mb-4">
              Recent Island <span className="text-island-teal">Projects</span>
            </h2>
            <p className="text-island-slate/70">
              See how we've helped other local businesses stand out.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
            {(Object.keys(projects) as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors z-10 ${
                  activeTab === tab ? "text-white" : "text-island-slate/60 hover:text-island-teal"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-island-teal rounded-lg -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px] bg-white rounded-3xl shadow-xl shadow-island-slate/5 border border-white/50 p-4 md:p-8 backdrop-blur-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-5 gap-8 h-full"
            >
              {/* Mockup Image */}
              <div className="lg:col-span-3 relative group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <img 
                  src={projects[activeTab].image} 
                  alt={projects[activeTab].title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <a 
                  href="/"
                  className="absolute inset-0 flex items-center justify-center bg-island-slate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                >
                  <button className="bg-white text-island-slate px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Live Site <ExternalLink size={16} />
                  </button>
                </a>
              </div>

              {/* Description */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-island-teal font-bold tracking-wider text-sm uppercase mb-2 block">{activeTab} Case Study</span>
                  <h3 className="text-3xl font-heading font-bold text-island-slate mb-4">{projects[activeTab].title}</h3>
                  <p className="text-island-slate/70 text-lg leading-relaxed mb-8">
                    {projects[activeTab].desc}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">98</div>
                      <div>
                        <p className="font-bold text-island-slate">Google PageSpeed</p>
                        <p className="text-xs text-island-slate/50">Performance Score</p>
                      </div>
                    </div>
                     <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3d</div>
                      <div>
                        <p className="font-bold text-island-slate">Turnaround Time</p>
                        <p className="text-xs text-island-slate/50">From concept to launch</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => window.location.href = '/projects'}
          >
            View More Projects <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};