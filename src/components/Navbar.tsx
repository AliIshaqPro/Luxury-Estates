
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Search, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-gradient-gold">LuxuryEstates</h1>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/buy" className="text-white hover:text-gold transition-colors">Buy</Link>
            <Link to="/rent" className="text-white hover:text-gold transition-colors">Rent</Link>
            <Link to="/sell" className="text-white hover:text-gold transition-colors">Sell</Link>
            <Link to="/agents" className="text-white hover:text-gold transition-colors">Agents</Link>
            <Link to="/about" className="text-white hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="text-white hover:text-gold transition-colors">Contact</Link>
          </div>
        )}

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="h-5 w-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <User className="h-5 w-5 text-white" />
          </button>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="p-2 text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 bg-black/90 pt-20 z-40 transform transition-all duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col items-center gap-6 text-xl">
            <Link to="/buy" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>Buy</Link>
            <Link to="/rent" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>Rent</Link>
            <Link to="/sell" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>Sell</Link>
            <Link to="/agents" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>Agents</Link>
            <Link to="/about" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-white hover:text-gold p-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
