
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, MapPin, Grid3X3, List } from 'lucide-react';

const PropertyListings = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const propertyData = [
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
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mountain View Retreat",
      price: "$2,900,000",
      address: "Aspen, CO",
      beds: 4,
      baths: 4,
      sqft: 3800,
      type: "sale" as const,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Beach House",
      price: "$8,500,000",
      address: "Malibu, CA",
      beds: 5,
      baths: 6,
      sqft: 5200,
      type: "sale" as const,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Skyline Apartment",
      price: "$7,500/month",
      address: "Chicago, IL",
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: "rent" as const,
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Luxury <span className="text-gradient-gold">Properties</span>
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Explore our selection of premium properties available for sale and rent in the most desirable locations.
            </p>
            
            {/* Search Box */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search by location, property type..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto border-white/20 hover:bg-white/10"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
                
                <div>
                  <Button className="w-full md:w-auto bg-gold hover:bg-gold-light text-black px-6 py-3 h-auto rounded-lg transition-all">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="glass-card rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-medium mb-4">Property Type</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox id="house" />
                    <label htmlFor="house" className="ml-2 text-gray-300">House</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="apartment" />
                    <label htmlFor="apartment" className="ml-2 text-gray-300">Apartment</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="condo" />
                    <label htmlFor="condo" className="ml-2 text-gray-300">Condo</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="villa" />
                    <label htmlFor="villa" className="ml-2 text-gray-300">Villa</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="penthouse" />
                    <label htmlFor="penthouse" className="ml-2 text-gray-300">Penthouse</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider defaultValue={[25, 75]} max={100} step={1} className="my-6" />
                  <div className="flex justify-between text-sm">
                    <span>$500,000</span>
                    <span>$25,000,000+</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Bedrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, "6+"].map((num) => (
                    <Button 
                      key={num} 
                      variant="outline"
                      className="h-9 w-12 border-white/20 hover:bg-white/10"
                    >
                      {num}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox id="pool" />
                    <label htmlFor="pool" className="ml-2 text-gray-300">Pool</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="garage" />
                    <label htmlFor="garage" className="ml-2 text-gray-300">Garage</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="gym" />
                    <label htmlFor="gym" className="ml-2 text-gray-300">Gym</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="security" />
                    <label htmlFor="security" className="ml-2 text-gray-300">Security System</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="waterfront" />
                    <label htmlFor="waterfront" className="ml-2 text-gray-300">Waterfront</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-400">Showing {propertyData.length} properties</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-400">Sort by:</label>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50">
                  <option value="price-high">Price (High to Low)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsGridView(true)}
                  className={isGridView ? "bg-white/10" : ""}
                >
                  <Grid3X3 className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsGridView(false)}
                  className={!isGridView ? "bg-white/10" : ""}
                >
                  <List className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Property Grid */}
          <div className={`grid gap-6 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {propertyData.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 h-10 w-10 p-0">
                &lt;
              </Button>
              <Button className="bg-gold hover:bg-gold-light text-black h-10 w-10 p-0">1</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 h-10 w-10 p-0">2</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 h-10 w-10 p-0">3</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 h-10 w-10 p-0">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyListings;
