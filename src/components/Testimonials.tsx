
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      quote: "Working with LuxuryEstates was a dream. They found us the perfect property that exceeded all our expectations, and their attention to detail made the entire process seamless.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Michael Anderson",
      role: "Property Investor",
      quote: "The team's knowledge of luxury real estate markets is unmatched. They've helped me build an exceptional portfolio of properties with outstanding returns.",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "First-time Buyer",
      quote: "As a first-time buyer in the luxury market, I was nervous. LuxuryEstates guided me through every step, ensuring I found a home that was both a sound investment and a perfect fit.",
      image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Hear from the clients who found their dream properties with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="fade-in-section" 
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <svg className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.666h4v10.183h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.666h4v10.183h-10z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-300 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
