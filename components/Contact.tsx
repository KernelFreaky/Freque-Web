import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Facebook, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-island-slate text-island-sand overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-island-teal rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text & Personal Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold mb-6">Let's Get Your Business <span className="text-island-orange">Online.</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm a local developer right here in Siquijor. I understand the island's internet challenges and what tourists are looking for. Let's meet for a coffee or hop on a call.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <img 
                  src="/public/dev-profile.png" 
                  alt="Developer" 
                  className="w-16 h-16 rounded-full border-2 border-island-teal object-cover"
                />
                <div>
                  <p className="font-bold text-white">Frequemarf Paculba Jr.</p>
                  <p className="text-island-teal text-sm">Web Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <a href="mailto:frequeverse@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  frequeverse@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  +63 999 912 9152
                </div>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Facebook size={18} />
                  </div>
                  /FrequeWebPH
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 text-island-slate"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-island-teal focus:ring-1 focus:ring-island-teal transition-all" placeholder="Juan Dela Cruz" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Business Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-island-teal focus:ring-1 focus:ring-island-teal transition-all" placeholder="Coco Resort" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Email / Phone</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-island-teal focus:ring-1 focus:ring-island-teal transition-all" placeholder="How can we reach you?" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-island-teal focus:ring-1 focus:ring-island-teal transition-all" placeholder="Tell me about your business..." />
              </div>

              <Button variant="primary" className="w-full justify-center mt-2">
                Send Inquiry
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};