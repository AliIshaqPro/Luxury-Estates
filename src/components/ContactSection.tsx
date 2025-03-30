
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your <span className="text-gradient-gold">Dream Home?</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Our luxury real estate experts are ready to help you find the perfect property that matches your lifestyle and investment goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Personalized property search tailored to your needs</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Expert guidance through every step of the process</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Access to exclusive off-market luxury properties</span>
              </li>
            </ul>
          </div>
          
          <div className="fade-in-section" style={{ transitionDelay: '300ms' }}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-serif font-medium mb-6 text-center">Contact an Agent</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">I'm interested in</label>
                  <select
                    id="interest"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a property</option>
                    <option value="selling">Selling a property</option>
                    <option value="renting">Renting a property</option>
                    <option value="investing">Investment opportunities</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gold hover:bg-gold-light text-black font-medium py-2.5 h-auto text-base rounded-lg transition-all">
                  Send Message
                </Button>
                
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
