
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

const SearchProperties = () => {
  return (
    <section className="py-20 bg-black glass-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Find Your <span className="text-gradient-gold">Perfect Property</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Search through thousands of luxury properties available for sale and rent worldwide
          </p>
        </div>
        
        <div className="glass-card max-w-5xl mx-auto rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="property-type" className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
              <select
                id="property-type"
                className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2.5 text-white focus:ring-2 focus:ring-gold/50"
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <select
                id="location"
                className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2.5 text-white focus:ring-2 focus:ring-gold/50"
              >
                <option value="">Any Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="miami">Miami</option>
                <option value="chicago">Chicago</option>
                <option value="san-francisco">San Francisco</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <select
                id="price-range"
                className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2.5 text-white focus:ring-2 focus:ring-gold/50"
              >
                <option value="">Any Price</option>
                <option value="1000000">Up to $1,000,000</option>
                <option value="5000000">Up to $5,000,000</option>
                <option value="10000000">Up to $10,000,000</option>
                <option value="25000000">Up to $25,000,000</option>
                <option value="50000000">$25,000,000+</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-gold hover:bg-gold-light text-black py-2.5 h-auto rounded-lg transition-all">
                <SearchIcon className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-sm rounded-full py-1 px-3 h-auto">
              Beachfront
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-sm rounded-full py-1 px-3 h-auto">
              Pool
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-sm rounded-full py-1 px-3 h-auto">
              Mountain View
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-sm rounded-full py-1 px-3 h-auto">
              Smart Home
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-sm rounded-full py-1 px-3 h-auto">
              Garage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProperties;
