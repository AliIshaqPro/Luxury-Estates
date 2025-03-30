
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Briefcase, Clock, Search, CheckCircle2, ArrowUpRight } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Luxury Real Estate Agent",
    location: "Beverly Hills, CA",
    type: "Full-Time",
    description: "Join our team of elite agents specializing in high-end properties in Beverly Hills and surrounding areas. You'll work with ultra-high-net-worth clients and the most exclusive properties in the market.",
    requirements: [
      "5+ years of experience in luxury real estate",
      "Proven track record of $10M+ in annual sales",
      "Strong network of high-net-worth clients",
      "Exceptional negotiation and communication skills",
      "Active real estate license in California"
    ]
  },
  {
    id: 2,
    title: "Marketing Director - Luxury Properties",
    location: "New York, NY",
    type: "Full-Time",
    description: "Lead our marketing team in creating sophisticated campaigns for our portfolio of luxury properties. You'll develop comprehensive strategies to reach affluent audiences and showcase our exclusive listings.",
    requirements: [
      "7+ years of marketing experience, preferably in luxury or real estate",
      "Proven track record of successful high-end marketing campaigns",
      "Strong understanding of digital marketing and social media strategy",
      "Experience managing a team of marketing professionals",
      "Excellent project management and communication skills"
    ]
  },
  {
    id: 3,
    title: "International Sales Consultant",
    location: "Miami, FL",
    type: "Full-Time",
    description: "Facilitate international real estate transactions and build relationships with global investors. You'll work with clients from Latin America, Europe, and beyond who are interested in luxury Miami properties.",
    requirements: [
      "3+ years of experience in international real estate sales",
      "Fluency in English and Spanish (additional languages a plus)",
      "Experience with international transactions and legal requirements",
      "Strong network of international clients or investors",
      "Willingness to travel internationally"
    ]
  },
  {
    id: 4,
    title: "Luxury Property Photographer",
    location: "Los Angeles, CA",
    type: "Contract",
    description: "Capture stunning photos and videos of high-end properties for marketing materials. You'll work closely with our agents and marketing team to showcase each property's unique features and ambiance.",
    requirements: [
      "Professional experience in architectural/interior photography",
      "Portfolio demonstrating high-quality real estate photography",
      "Experience with drone photography and videography",
      "Knowledge of photo editing software and virtual staging",
      "Availability for flexible shooting schedule"
    ]
  },
  {
    id: 5,
    title: "Client Relations Specialist",
    location: "Aspen, CO",
    type: "Full-Time",
    description: "Provide exceptional service to our high-net-worth clients throughout their property buying or selling journey. You'll coordinate viewings, manage client communications, and ensure a seamless experience.",
    requirements: [
      "3+ years of experience in luxury client services",
      "Exceptional communication and problem-solving skills",
      "Ability to maintain discretion and confidentiality",
      "Excellent organizational and time management skills",
      "Experience in real estate or hospitality preferred"
    ]
  },
  {
    id: 6,
    title: "Luxury Real Estate Content Writer",
    location: "Remote",
    type: "Part-Time",
    description: "Create compelling content for our blog, social media, and property descriptions. You'll write articles about luxury real estate trends, market insights, and lifestyle content to engage affluent audiences.",
    requirements: [
      "Professional writing experience, preferably in real estate or luxury markets",
      "Strong portfolio of published work",
      "Excellent research skills and attention to detail",
      "Knowledge of SEO best practices",
      "Ability to meet deadlines consistently"
    ]
  }
];

const JobCard = ({ job, onClick }: { job: typeof jobOpenings[0], onClick: () => void }) => (
  <div onClick={onClick} className="glass-card rounded-xl p-6 hover:border-gold/20 transition-all duration-300 hover:shadow-gold/10 cursor-pointer">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-xl font-medium mb-2">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gold" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1 text-gold" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>
      <Button variant="outline" className="border-white/20 hover:bg-white/10 flex items-center gap-2">
        View Details
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

const JobDetailModal = ({ job, onClose }: { job: typeof jobOpenings[0], onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
    <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>
    <div className="relative glass-card rounded-xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 h-8 w-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20"
      >
        &times;
      </button>
      
      <h2 className="text-2xl font-medium mb-4">{job.title}</h2>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300 mb-6">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gold" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="h-4 w-4 mr-1 text-gold" />
          <span>{job.type}</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Job Description</h3>
          <p className="text-gray-300">{job.description}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Requirements</h3>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span>Competitive commission structure or salary based on experience</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span>Comprehensive health, dental, and vision insurance</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span>401(k) retirement plan with employer matching</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span>Advanced marketing support and resources</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span>Professional development and continuing education</span>
            </li>
          </ul>
        </div>
        
        <div className="pt-4">
          <Button className="w-full bg-gold hover:bg-gold-light text-black">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  
  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesLocation = locationFilter === '' || job.location.includes(locationFilter);
    const matchesType = typeFilter === '' || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Office" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-gradient-gold">Team</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-200 mb-8">
              Build your career with the world's leading luxury real estate company
            </p>
            <Button className="bg-gold hover:bg-gold-light text-black px-8 py-6 h-auto text-lg">
              View Open Positions
            </Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose LuxuryEstates?</h2>
            <p className="text-gray-300 mb-8">
              At LuxuryEstates, we're more than just a real estate company—we're a global brand that represents excellence, integrity, and innovation. Our team members are passionate about delivering exceptional experiences to our clients and are driven to be the best in the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="h-16 w-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Career Growth</h3>
                <p className="text-gray-300 text-sm">Unmatched opportunities for advancement and professional development.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="h-16 w-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Prestigious Brand</h3>
                <p className="text-gray-300 text-sm">Be part of a globally recognized leader in luxury real estate.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="h-16 w-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Global Network</h3>
                <p className="text-gray-300 text-sm">Connect with industry professionals and clients worldwide.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-8">Current Openings</h2>
            
            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text"
                  placeholder="Search job titles or keywords..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Location</label>
                  <select
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    <option value="Beverly Hills">Beverly Hills</option>
                    <option value="New York">New York</option>
                    <option value="Miami">Miami</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Aspen">Aspen</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Job Type</label>
                  <select
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onClick={() => setSelectedJob(job)} 
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No job openings match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Company Culture */}
          <div className="py-8">
            <h2 className="text-3xl font-serif font-bold mb-8">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="text-gray-300 mb-6">
                  At LuxuryEstates, we foster a collaborative environment where excellence is recognized and rewarded. Our culture is built on mutual respect, continuous innovation, and unwavering commitment to our clients and each other.
                </p>
                <p className="text-gray-300 mb-6">
                  We believe that our people are our greatest asset. That's why we invest in your growth through mentorship programs, advanced training opportunities, and clear paths for advancement. Whether you're an experienced real estate professional or just beginning your career, LuxuryEstates provides the platform for you to achieve your highest potential.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl overflow-hidden h-40">
                    <img 
                      src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Team meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-40">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Office celebration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  Learn More About Our Culture
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">Employee Testimonials</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-300 italic mb-2">
                      "Joining LuxuryEstates was the best career decision I've made. The support, resources, and opportunities have been exceptional."
                    </p>
                    <p className="text-sm text-gold">— Sarah J., Senior Agent (5 years)</p>
                  </div>
                  <div>
                    <p className="text-gray-300 italic mb-2">
                      "The collaborative culture and mentorship program helped me grow from an assistant to a top-performing agent in just three years."
                    </p>
                    <p className="text-sm text-gold">— Michael T., Luxury Agent (3 years)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Application CTA */}
        <div className="bg-black/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Take Your Career to the Next Level?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join our team of exceptional professionals and be part of something extraordinary. We're always looking for talented individuals who share our passion for luxury real estate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gold hover:bg-gold-light text-black px-8">
                View All Positions
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Submit Your Resume
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Careers;
