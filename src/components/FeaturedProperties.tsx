
import React, { useEffect, useRef } from 'react';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';

const FeaturedProperties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Villa with Pool",
      price: "$4,500,000",
      address: "Beverly Hills, CA",
      beds: 5,
      baths: 6,
      sqft: 4500,
      type: "sale" as const,
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Penthouse",
      price: "$3,200,000",
      address: "Manhattan, NY",
      beds: 3,
      baths: 3.5,
      sqft: 2200,
      type: "sale" as const,
      featured: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Waterfront Estate",
      price: "$15,000/month",
      address: "Miami Beach, FL",
      beds: 6,
      baths: 7,
      sqft: 6500,
      type: "rent" as const,
      featured: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="fade-in-section">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient-gold">Properties</span>
            </h2>
            <p className="text-gray-400 mt-2">Exclusive listings you won't find anywhere else</p>
          </div>
          
          <div className="mt-4 md:mt-0 fade-in-section" style={{ transitionDelay: '300ms' }}>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">
              View All Properties
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="fade-in-section" 
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
