import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Monitor, Smartphone, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Floating animation definition
  const floatingY = [0, -15, 0];
  const floatTransition = (delay: number) => ({
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: delay
  });

  return (
    <section ref={targetRef} className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-island-sand/20 to-island-sand z-10"></div>
        <img 
          src="/dist/assets/Hero.jpeg" 
          alt="Siquijor Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-island-orange/10 text-island-orange font-semibold text-sm mb-6 border border-island-orange/20">
            Based in Siquijor. Built for Speed.
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-island-slate mb-6">
            Stop Losing Tourists to <span className="text-island-teal">Bad Signal.</span>
          </h1>
          <p className="text-lg md:text-xl text-island-slate/70 mb-8 leading-relaxed">
            Most visitors can't find your Facebook menu. Give them a fast, professional site they can actually load and explore. Get found on Google in 72 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              See Packages <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline">
              View Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Right: Layered Interactive Mockups */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
          
          {/* Mockup 3 (Back) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: floatingY }}
            transition={{ delay: 0.2, y: floatTransition(0) }}
            className="absolute top-10 right-0 w-3/4 aspect-video bg-white rounded-lg shadow-2xl border border-gray-100 p-2 overflow-hidden z-10 opacity-60 transform rotate-6"
          >
            <div className="w-full h-full bg-island-slate/5 rounded flex items-center justify-center">
              <Smartphone className="text-island-slate/20 w-12 h-12" />
            </div>
          </motion.div>

          {/* Mockup 2 (Middle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: floatingY }}
            transition={{ delay: 0.4, y: floatTransition(2) }}
            className="absolute bottom-20 left-4 w-3/4 aspect-video bg-white rounded-lg shadow-2xl border border-gray-100 p-2 overflow-hidden z-20 transform -rotate-3"
          >
            <div className="w-full h-full bg-island-teal/5 rounded flex items-center justify-center">
              <Globe className="text-island-teal/20 w-16 h-16" />
            </div>
          </motion.div>

          {/* Mockup 1 (Front/Hero) */}
          <motion.a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: floatingY }}
            transition={{ y: floatTransition(1) }}
            className="absolute w-5/6 aspect-video bg-white rounded-xl shadow-2xl shadow-island-teal/20 border border-gray-100 p-1 cursor-pointer z-30 overflow-hidden block"
          >
            {/* Browser Bar */}
            <div className="h-6 bg-gray-50 border-b border-gray-100 flex items-center px-2 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            {/* Content Preview */}
            <div className="relative w-full h-[calc(100%-1.5rem)] overflow-hidden">
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Resort Website Mockup" 
                 className="w-full h-full object-cover" 
               />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};