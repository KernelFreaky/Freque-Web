import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: 'Why Us', href: '#problem' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-glass py-4 border-b border-white/20' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-2xl text-island-teal tracking-tight flex items-center gap-1">
          <img src="/FPJ Logo.png" alt="Freque Web Logo" width={40}/>
          <div className="w-2 h-2 rounded-full bg-island-orange mt-1"></div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-island-slate/80 hover:text-island-teal transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="py-2 px-5 text-sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-island-slate"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full"
        >
          <div className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-island-slate font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-2" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};