import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      
      <footer className="bg-island-slate text-island-sand py-8 text-center text-sm opacity-90">
        <p>© {new Date().getFullYear()} FrequeWeb. Built with ♥ in Siquijor.</p>
      </footer>
    </div>
  );
};

export default App;