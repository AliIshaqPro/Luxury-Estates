
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bed, Bath, Square, MapPin, Heart, Share, Phone, Mail, Maximize2, Map, Image, Info } from 'lucide-react';

const PropertyDetail = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b46f2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753006-003e336cf179?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];
  
  const propertyFeatures = [
    "Swimming Pool",
    "Garden",
    "Garage for 3 cars",
    "Fitness Center",
    "Smart Home Technology",
    "Wine Cellar",
    "Home Theater",
    "Outdoor Kitchen",
    "Floor-to-ceiling Windows",
    "Security System",
    "Solar Panels",
    "Heated Floors"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Gallery Header */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={images[0]} 
              alt="Property Hero" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-gold text-black text-sm rounded-md">For Sale</span>
                <span className="px-3 py-1 bg-black/60 text-white text-sm rounded-md">Luxury Villa</span>
                <span className="px-3 py-1 bg-black/60 text-white text-sm rounded-md">Featured</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">Modern Luxury Villa with Ocean View</h1>
              
              <div className="flex items-center text-gray-300 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Beverly Hills, Los Angeles, CA 90210</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 text-lg">
                <div className="flex items-center">
                  <Bed className="h-6 w-6 mr-2 text-gold" />
                  <span>5 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-6 w-6 mr-2 text-gold" />
                  <span>6 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-6 w-6 mr-2 text-gold" />
                  <span>4,500 sq ft</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <span className="font-serif text-4xl font-bold text-gradient-gold">$4,500,000</span>
                
                <div className="ml-auto flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10"
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    <Image className="mr-2 h-5 w-5" />
                    View Photos
                  </Button>
                  
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    <Heart className="h-5 w-5" />
                  </Button>
                  
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="glass-card w-full grid grid-cols-4">
                  <TabsTrigger value="overview" className="text-white data-[state=active]:text-gold">
                    <Info className="mr-2 h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="features" className="text-white data-[state=active]:text-gold">
                    <Maximize2 className="mr-2 h-4 w-4" />
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="location" className="text-white data-[state=active]:text-gold">
                    <Map className="mr-2 h-4 w-4" />
                    Location
                  </TabsTrigger>
                  <TabsTrigger value="video" className="text-white data-[state=active]:text-gold">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                    Video
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="font-serif text-2xl font-medium mb-4">Property Details</h2>
                    
                    <p className="text-gray-300 mb-4">
                      This extraordinary modern luxury villa offers an unparalleled living experience with breathtaking ocean views. Nestled in the prestigious Beverly Hills neighborhood, this architectural masterpiece combines elegance and functionality with its contemporary design and premium finishes.
                    </p>
                    
                    <p className="text-gray-300 mb-4">
                      The property spans over 4,500 square feet of luxurious living space featuring five spacious bedrooms, six lavishly appointed bathrooms, and multiple entertainment areas. The open-concept main level showcases floor-to-ceiling windows that flood the space with natural light while framing the magnificent coastal panorama.
                    </p>
                    
                    <p className="text-gray-300 mb-4">
                      The gourmet kitchen is a chef's dream, equipped with top-of-the-line appliances, custom cabinetry, and a large center island perfect for casual dining and entertaining. Adjacent to the kitchen, the dining area opens to an expansive terrace, ideal for al fresco dining while enjoying sunset views.
                    </p>
                    
                    <p className="text-gray-300 mb-4">
                      The primary suite is a sanctuary of luxury, featuring a private balcony, walk-in closet, and a spa-like en-suite bathroom with a freestanding soaking tub and oversized shower. Each additional bedroom offers privacy and comfort with en-suite facilities.
                    </p>
                    
                    <p className="text-gray-300">
                      The outdoor living space is equally impressive, boasting an infinity pool that seems to merge with the horizon, a fully equipped outdoor kitchen, and meticulously landscaped gardens. Additional amenities include a state-of-the-art home theater, wine cellar, fitness center, and a three-car garage.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-6">
                  <h2 className="font-serif text-2xl font-medium mb-6">Property Features</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {propertyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="mt-6">
                  <h2 className="font-serif text-2xl font-medium mb-6">Location</h2>
                  
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center mb-6">
                    <p className="text-gray-400">Map would be displayed here</p>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">
                      Located in the prestigious Beverly Hills neighborhood, this property offers the perfect balance of privacy and accessibility. Enjoy proximity to world-class dining, high-end shopping, and cultural attractions while being just a short drive from the beautiful beaches of Los Angeles.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Nearby Amenities</h3>
                    
                    <ul className="space-y-2 text-gray-300">
                      <li>5 minutes to Rodeo Drive</li>
                      <li>10 minutes to Beverly Hills Hotel</li>
                      <li>15 minutes to Santa Monica Beach</li>
                      <li>20 minutes to Los Angeles International Airport</li>
                      <li>Walking distance to luxury shops and restaurants</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="video" className="mt-6">
                  <h2 className="font-serif text-2xl font-medium mb-6">Property Video Tour</h2>
                  
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-400">Video tour would be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="glass-card rounded-xl p-6 sticky top-28">
                <h3 className="font-serif text-xl font-medium mb-6">Contact Agent</h3>
                
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Agent" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Anderson</h4>
                    <p className="text-sm text-gray-400">Luxury Real Estate Specialist</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-transparent border border-gold text-gold hover:bg-gold/20">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Agent
                  </Button>
                  
                  <Button className="w-full bg-gold hover:bg-gold-light text-black">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Agent
                  </Button>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-medium mb-4">Schedule a Viewing</h4>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
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
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">Preferred Date</label>
                      <input
                        id="date"
                        type="date"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="I'm interested in scheduling a viewing for this property..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-gold hover:bg-gold-light text-black">
                      Request Viewing
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <Button 
              variant="ghost" 
              className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 p-0 bg-black/40"
              onClick={() => setIsGalleryOpen(false)}
            >
              ×
            </Button>
            
            <div className="aspect-video overflow-hidden rounded-xl">
              <img 
                src={images[currentImage]} 
                alt={`Gallery image ${currentImage + 1}`}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              >
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      currentImage === index ? 'w-6 bg-gold' : 'w-2 bg-white/40'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
