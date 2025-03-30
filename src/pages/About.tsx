
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Estate" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient-gold">LuxuryEstates</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-200">
              Redefining luxury real estate since 2005
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2005, LuxuryEstates began with a vision to transform the luxury real estate experience. What started as a boutique agency in Beverly Hills has grown into an international network of exceptional properties and elite agents serving discerning clients worldwide.
            </p>
            <p className="text-gray-300">
              Our founding principle remains unchanged: to provide unparalleled service and expertise in the luxury real estate market. We believe that extraordinary properties deserve extraordinary representation, and that every client deserves white-glove service at every step of their journey.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-black/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Our Mission & Values</h2>
                <p className="text-gray-300 mb-8">
                  At LuxuryEstates, we are committed to exceeding expectations through integrity, expertise, and personalized service. We cultivate long-term relationships based on trust and discretion, ensuring that each client receives an experience as exceptional as the properties we represent.
                </p>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-gradient-gold text-lg font-medium mb-2">Excellence</h3>
                    <p className="text-gray-300 text-sm">We pursue excellence in every detail, from marketing to transaction management.</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-gradient-gold text-lg font-medium mb-2">Integrity</h3>
                    <p className="text-gray-300 text-sm">We operate with unwavering honesty and transparency in all our dealings.</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-gradient-gold text-lg font-medium mb-2">Innovation</h3>
                    <p className="text-gray-300 text-sm">We continuously evolve our approach to stay at the forefront of luxury real estate.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Luxury Property" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-xl overflow-hidden border-4 border-black/80">
                  <img 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Global Presence */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "New York", properties: 120, image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Los Angeles", properties: 95, image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Miami", properties: 78, image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "London", properties: 65, image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Paris", properties: 52, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Dubai", properties: 48, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Sydney", properties: 36, image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { city: "Tokyo", properties: 29, image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((location, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.city} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-medium">{location.city}</h3>
                  <p className="text-gold">{location.properties} Properties</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leadership */}
        <div className="bg-black/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jonathan Reynolds",
                  position: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Jonathan founded LuxuryEstates with a vision to redefine luxury real estate. With over 25 years of industry experience, he has personally overseen $2B+ in transactions."
                },
                {
                  name: "Alexandra Chen",
                  position: "Chief Operating Officer",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Alexandra brings 18 years of operational leadership in luxury markets. She oversees the company's global operations and strategic growth initiatives."
                },
                {
                  name: "Marcus Williams",
                  position: "Director of Global Sales",
                  image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Marcus leads our international sales division with expertise in luxury markets across four continents. His network of UHNW clients is unparalleled in the industry."
                },
              ].map((leader, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden">
                  <div className="aspect-square">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-1">{leader.name}</h3>
                    <p className="text-gold mb-4">{leader.position}</p>
                    <p className="text-gray-300 text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Experience the LuxuryEstates Difference</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you're looking to buy, sell, or explore the world's most exceptional properties, our team is ready to provide you with white-glove service and unparalleled expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gold hover:bg-gold-light text-black px-8 py-6 h-auto">Contact Us</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 h-auto">View Properties</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
