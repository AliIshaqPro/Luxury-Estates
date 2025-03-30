
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Phone, Mail, Star } from 'lucide-react';

const agentsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "Senior Luxury Estate Agent",
    location: "Beverly Hills, CA",
    email: "sarah.j@luxuryestates.com",
    phone: "(310) 555-1234",
    rating: 4.9,
    reviews: 124,
    bio: "With over 15 years of experience in the luxury real estate market, Sarah specializes in high-end properties in Beverly Hills and Bel Air. Her client list includes celebrities, executives, and international investors.",
    specialties: ["Luxury Estates", "Celebrity Homes", "International Buyers"],
    languages: ["English", "French", "Spanish"],
    sales: "$285M+",
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "Executive Director",
    location: "Manhattan, NY",
    email: "michael.c@luxuryestates.com",
    phone: "(212) 555-6789",
    rating: 4.8,
    reviews: 97,
    bio: "Michael has established himself as one of Manhattan's top-producing agents, with a particular focus on luxury penthouses and exclusive co-ops on the Upper East Side and in Tribeca.",
    specialties: ["Penthouses", "Co-ops", "Investment Properties"],
    languages: ["English", "Mandarin", "Cantonese"],
    sales: "$320M+",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "Luxury Property Specialist",
    location: "Miami, FL",
    email: "elena.r@luxuryestates.com",
    phone: "(305) 555-4321",
    rating: 4.7,
    reviews: 89,
    bio: "Elena is Miami's waterfront property expert, specializing in ultra-luxury condos and waterfront estates throughout Miami Beach, Coral Gables, and Fisher Island.",
    specialties: ["Waterfront Estates", "Luxury Condos", "Resort Properties"],
    languages: ["English", "Spanish", "Portuguese"],
    sales: "$210M+",
  },
  {
    id: 4,
    name: "James Peterson",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "Principal Broker",
    location: "Aspen, CO",
    email: "james.p@luxuryestates.com",
    phone: "(970) 555-8765",
    rating: 4.9,
    reviews: 76,
    bio: "James specializes in exclusive mountain properties and luxury ski chalets in Aspen and Snowmass. He brings unparalleled knowledge of the local market and a passion for mountain living.",
    specialties: ["Mountain Estates", "Ski Properties", "Ranch Properties"],
    languages: ["English", "German"],
    sales: "$175M+",
  },
  {
    id: 5,
    name: "Olivia Washington",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "International Property Consultant",
    location: "Los Angeles, CA",
    email: "olivia.w@luxuryestates.com",
    phone: "(213) 555-9012",
    rating: 4.8,
    reviews: 112,
    bio: "Olivia specializes in connecting international buyers with trophy properties in Los Angeles. Her extensive network spans Asia, Europe, and the Middle East.",
    specialties: ["International Sales", "Architectural Properties", "Entertainment Industry"],
    languages: ["English", "Arabic", "Italian"],
    sales: "$295M+",
  },
  {
    id: 6,
    name: "Robert Tanaka",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    position: "Director of Estates Division",
    location: "San Francisco, CA",
    email: "robert.t@luxuryestates.com",
    phone: "(415) 555-3456",
    rating: 4.7,
    reviews: 82,
    bio: "Robert specializes in San Francisco's most prestigious neighborhoods, including Pacific Heights, Presidio Heights, and Sea Cliff, with expertise in historic homes and modern architectural masterpieces.",
    specialties: ["Historic Homes", "Modern Architecture", "Tech Executive Properties"],
    languages: ["English", "Japanese"],
    sales: "$230M+",
  },
];

const AgentCard = ({ agent }: { agent: typeof agentsData[0] }) => (
  <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-gold/20">
    <div className="relative">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={agent.photo} 
          alt={agent.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
        <Star className="h-4 w-4 text-gold fill-gold" />
        <span className="text-sm ml-1">{agent.rating}</span>
        <span className="text-xs text-gray-300 ml-1">({agent.reviews})</span>
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="font-serif text-xl font-medium mb-1">{agent.name}</h3>
      <p className="text-sm text-gray-400 mb-3">{agent.position}</p>
      
      <div className="flex items-center text-sm text-gray-300 mb-2">
        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
        <span>{agent.location}</span>
      </div>
      
      <div className="mt-4 mb-3">
        <p className="text-sm font-medium">Sales Volume</p>
        <p className="text-lg text-gradient-gold">{agent.sales}</p>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-xs text-gray-400">Specialties:</p>
        <div className="flex flex-wrap gap-1">
          {agent.specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="text-xs bg-white/10 px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      <Button className="w-full bg-gold hover:bg-gold-light text-black">
        View Profile
      </Button>
    </div>
  </div>
);

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = locationFilter === '' || agent.location.includes(locationFilter);
    
    return matchesSearch && matchesLocation;
  });
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Our <span className="text-gradient-gold">Agents</span>
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Meet our team of experienced luxury real estate professionals, dedicated to providing exceptional service and expertise.
            </p>
            
            {/* Search Box */}
            <div className="mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text"
                  placeholder="Search by name or specialty..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          {/* Filter by location */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button 
              variant={locationFilter === '' ? "secondary" : "outline"}
              className={locationFilter === '' ? "bg-gold text-black" : "border-white/20 hover:bg-white/10"}
              onClick={() => setLocationFilter('')}
            >
              All Locations
            </Button>
            {[...new Set(agentsData.map(agent => agent.location.split(',')[1].trim()))].map((city) => (
              <Button
                key={city}
                variant={locationFilter.includes(city) ? "secondary" : "outline"}
                className={locationFilter.includes(city) ? "bg-gold text-black" : "border-white/20 hover:bg-white/10"}
                onClick={() => setLocationFilter(city)}
              >
                {city}
              </Button>
            ))}
          </div>
          
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No agents found matching your search criteria.</p>
            </div>
          )}
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="glass-card rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-3xl mb-4">Join Our <span className="text-gradient-gold">Team</span></h2>
                <p className="text-gray-300 mb-4">
                  Are you an experienced luxury real estate professional looking to take your career to the next level? LuxuryEstates offers unparalleled support, advanced marketing tools, and a prestigious brand to help you succeed.
                </p>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gold mr-3 mt-1 flex-shrink-0"></div>
                    <p>Access to our exclusive network of high-net-worth clients</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gold mr-3 mt-1 flex-shrink-0"></div>
                    <p>Cutting-edge marketing and technology platform</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gold mr-3 mt-1 flex-shrink-0"></div>
                    <p>Global reach through our international partnerships</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gold mr-3 mt-1 flex-shrink-0"></div>
                    <p>Continuous professional development and training</p>
                  </li>
                </ul>
                <Button className="bg-gold hover:bg-gold-light text-black">Apply to Join</Button>
              </div>
              
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury real estate team" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agents;
