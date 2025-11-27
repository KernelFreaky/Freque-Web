import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

const PricingCard: React.FC<{ 
  title: string; 
  price: string; 
  features: string[]; 
  isPopular?: boolean;
  delay: number;
}> = ({ title, price, features, isPopular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 50 }}
      className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
        isPopular 
          ? "bg-island-slate text-island-sand border-island-slate shadow-xl" 
          : "bg-white text-island-slate border-gray-100 shadow-sm"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-island-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          MOST POPULAR
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`font-heading font-bold text-xl mb-2 ${isPopular ? "text-white" : "text-island-slate"}`}>
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">₱{price}</span>
          <span className={`text-sm ${isPopular ? "text-gray-400" : "text-gray-500"}`}>/ one-time</span>
        </div>
        <p className={`text-xs mt-2 ${isPopular ? "text-gray-400" : "text-gray-400"}`}>
          No monthly subscription fees.
        </p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${isPopular ? "text-island-teal" : "text-island-teal"}`} />
            <span className={`text-sm leading-tight ${isPopular ? "text-gray-300" : "text-gray-600"}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button 
        variant={isPopular ? "primary" : "outline"} 
        className={`w-full justify-center ${!isPopular && "border-gray-200 text-gray-600"}`}
      >
        Select Package
      </Button>
    </motion.div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-island-slate mb-4">
            Simple Pricing. <br/><span className="text-island-teal">No Hidden Fees.</span>
          </h2>
          <p className="text-island-slate/60 text-lg">
            Invest once, profit forever. Standard hosting fees apply annually (approx ₱3k/yr).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="The Starter"
            price="4,999"
            delay={0}
            features={[
              "Single Page Scroll Layout",
              "Google Maps Integration",
              "Click-to-Call / WhatsApp",
              "Mobile Optimized",
              "1 Week Support"
            ]}
          />
          <PricingCard
            title="The Professional"
            price="9,000"
            isPopular={true}
            delay={0.1}
            features={[
              "3-5 Custom Pages",
              "Photo Gallery Showcase",
              "Basic SEO (Get found on Google)",
              "Contact Form to Email",
              "Social Media Integration",
              "1 Month Support"
            ]}
          />
          <PricingCard
            title="The Business"
            price="15,000"
            delay={0.2}
            features={[
              "Up to 10 Pages",
              "Inventory / Booking Links",
              "Advanced SEO Setup",
              "Terms & Privacy Pages",
              "Blog / News Section",
              "Priority Support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};