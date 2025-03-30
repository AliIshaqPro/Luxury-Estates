
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = Number((element as HTMLElement).dataset.speed) || 0.5;
        const yPos = -(scrollPosition * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      
      {/* Hero Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 pt-16 z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="parallax-element font-serif text-5xl md:text-7xl font-bold leading-tight animate-fade-in" data-speed="0.2">
            Find Your <span className="text-gradient-gold">Dream Home</span>
          </h1>
          
          <p className="parallax-element text-xl md:text-2xl text-gray-200 max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }} data-speed="0.3">
            Discover exclusive properties in the most desirable locations worldwide
          </p>
          
          {/* Search Box */}
          <div className="parallax-element mt-8 glass-card rounded-xl p-4 animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }} data-speed="0.4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search by location, property type..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="flex gap-2">
                <Button className="bg-gold hover:bg-gold-light text-black px-6 py-3 rounded-lg transition-all">
                  Search
                </Button>
                
                <Button variant="outline" className="border-white/30 hover:bg-white/10 rounded-lg">
                  <MapPin className="mr-2 h-4 w-4" />
                  Map View
                </Button>
              </div>
            </div>
          </div>
          
          <div className="parallax-element flex gap-4 mt-4 animate-slide-up opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }} data-speed="0.5">
            <span className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              200+ New listings
            </span>
            <span className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
              Luxury Properties
            </span>
          </div>
        </div>
      </div>
      
      {/* Arrow Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
