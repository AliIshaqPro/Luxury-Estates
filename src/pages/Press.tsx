
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, ChevronDown, Download, Mail, Phone } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: "LuxuryEstates Expands to European Market with New Offices in Paris and Monaco",
    date: "June 15, 2023",
    excerpt: "Global luxury real estate leader LuxuryEstates announces expansion to European markets with new flagship offices in Paris and Monaco, strengthening its international presence.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdf: "#"
  },
  {
    id: 2,
    title: "LuxuryEstates Reports Record-Breaking $5 Billion in Sales for 2022",
    date: "February 8, 2023",
    excerpt: "LuxuryEstates achieves unprecedented success with $5 billion in luxury property sales for 2022, marking a 35% increase over the previous year despite market challenges.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdf: "#"
  },
  {
    id: 3,
    title: "LuxuryEstates Launches Exclusive Partnership with Renowned Interior Design Firm",
    date: "November 19, 2022",
    excerpt: "LuxuryEstates announces strategic partnership with acclaimed interior design firm Studio Elemental to offer clients complimentary design consultations and exclusive services.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdf: "#"
  },
  {
    id: 4,
    title: "LuxuryEstates Named 'Best Global Luxury Real Estate Agency' for Third Consecutive Year",
    date: "September 5, 2022",
    excerpt: "International Real Estate Awards recognizes LuxuryEstates as the top luxury real estate agency worldwide for the third year in a row, highlighting the company's excellence in service and innovation.",
    image: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdf: "#"
  }
];

const mediaFeatures = [
  {
    id: 1,
    publication: "Forbes",
    title: "Inside the World's Most Exclusive Real Estate Agency",
    date: "May 2023",
    excerpt: "Forbes takes a deep dive into how LuxuryEstates has revolutionized the high-end property market with its innovative approach to luxury real estate.",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Forbes_logo.svg/800px-Forbes_logo.svg.png"
  },
  {
    id: 2,
    publication: "The Wall Street Journal",
    title: "How LuxuryEstates is Redefining Property Marketing for the Ultra-Wealthy",
    date: "March 2023",
    excerpt: "The Wall Street Journal explores LuxuryEstates' cutting-edge marketing strategies that have captured the attention of billionaire property buyers worldwide.",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/WSJ_Logo.svg/800px-WSJ_Logo.svg.png"
  },
  {
    id: 3,
    publication: "Architectural Digest",
    title: "CEO of LuxuryEstates Reveals the 5 Features Every Luxury Home Must Have in 2023",
    date: "January 2023",
    excerpt: "In an exclusive interview with Architectural Digest, LuxuryEstates' CEO shares insights on the most sought-after features in today's ultra-luxury properties.",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Architectural_Digest_Logo.svg/800px-Architectural_Digest_Logo.svg.png"
  },
  {
    id: 4,
    publication: "Financial Times",
    title: "LuxuryEstates: Building a Billion-Dollar Real Estate Empire",
    date: "December 2022",
    excerpt: "Financial Times profiles the meteoric rise of LuxuryEstates from boutique agency to global powerhouse in the competitive luxury real estate market.",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Financial_Times_masthead.svg/800px-Financial_Times_masthead.svg.png"
  }
];

const faqItems = [
  {
    question: "What makes LuxuryEstates different from other real estate agencies?",
    answer: "LuxuryEstates specializes exclusively in the ultra-luxury market, offering unparalleled expertise and service. Our global network, proprietary marketing platforms, and white-glove approach ensure that we deliver exceptional experiences for both buyers and sellers of the world's most prestigious properties."
  },
  {
    question: "How many properties does LuxuryEstates currently represent?",
    answer: "LuxuryEstates represents over 2,500 ultra-luxury properties worldwide, with a combined value exceeding $15 billion. Our portfolio includes everything from historic estates and urban penthouses to private islands and architectural masterpieces."
  },
  {
    question: "In which markets does LuxuryEstates operate?",
    answer: "LuxuryEstates operates in over 20 countries across North America, Europe, Asia, and the Middle East. Our flagship offices are located in Beverly Hills, New York, London, Paris, Monaco, Dubai, and Hong Kong, with additional presence in other luxury markets worldwide."
  },
  {
    question: "How can I arrange an interview with LuxuryEstates executives?",
    answer: "Media interview requests can be submitted through our Press Contact form on this page, or by directly contacting our Media Relations team at press@luxuryestates.com. Please provide details about your publication, the focus of your story, and your deadline."
  },
  {
    question: "Does LuxuryEstates offer high-resolution images for media use?",
    answer: "Yes, LuxuryEstates maintains an extensive media library with high-resolution images of select properties, offices, and executives. Approved media partners can request access to these resources through our Media Relations department."
  }
];

const PressRelease = ({ release }: { release: typeof pressReleases[0] }) => (
  <div className="glass-card rounded-xl overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-full">
        <img 
          src={release.image} 
          alt={release.title} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="md:col-span-2 p-6">
        <div className="flex items-center text-sm text-gold mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{release.date}</span>
        </div>
        <h3 className="text-xl font-medium mb-3">{release.title}</h3>
        <p className="text-gray-300 text-sm mb-6">{release.excerpt}</p>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-gold hover:bg-gold-light text-black flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            Read More
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const MediaFeature = ({ feature }: { feature: typeof mediaFeatures[0] }) => (
  <div className="glass-card rounded-xl p-6">
    <div className="h-12 mb-4">
      <img 
        src={feature.logo} 
        alt={feature.publication} 
        className="h-full object-contain object-left"
      />
    </div>
    <div className="flex items-center text-sm text-gray-400 mb-2">
      <span>{feature.date}</span>
    </div>
    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
    <p className="text-gray-300 text-sm mb-6">{feature.excerpt}</p>
    <a 
      href={feature.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center text-gold hover:text-gold-light"
    >
      Read Article <ExternalLink className="h-4 w-4 ml-1" />
    </a>
  </div>
);

const FAQ = ({ question, answer, isOpen, onClick }: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onClick: () => void 
}) => (
  <div className="border-b border-white/10 py-4">
    <button
      onClick={onClick}
      className="flex w-full justify-between items-center text-left focus:outline-none"
    >
      <h3 className="text-lg font-medium">{question}</h3>
      <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="mt-3 text-gray-300">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const Press = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Press & <span className="text-gradient-gold">Media</span>
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Find the latest news, press releases, and media resources from LuxuryEstates.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Press Kit Section */}
          <div className="glass-card rounded-xl p-6 md:p-10 mb-16">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  LuxuryEstates Press Kit
                </h2>
                <p className="text-gray-300 mb-6">
                  Access our comprehensive press kit, including company background, leadership bios, high-resolution logos, brand guidelines, and approved imagery for media use.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gold hover:bg-gold-light text-black flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Press Kit
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Media Contact Information
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="aspect-square max-w-xs mx-auto relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full transform -rotate-6"></div>
                  <div className="absolute inset-0 glass-card rounded-full transform rotate-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Press Kit" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Press Releases Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-medium">Press Releases</h2>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                View All Releases
              </Button>
            </div>
            
            <div className="space-y-6">
              {pressReleases.map(release => (
                <PressRelease key={release.id} release={release} />
              ))}
            </div>
          </div>
          
          {/* Media Features Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-medium">Featured In</h2>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                View All Features
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaFeatures.map(feature => (
                <MediaFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
          
          {/* Press FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Media FAQ</h2>
            
            <div className="glass-card rounded-xl p-6">
              <div className="space-y-2">
                {faqItems.map((faq, index) => (
                  <FAQ 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Media Contacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">Press Inquiries</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-1">Email</p>
                      <p className="text-white">press@luxuryestates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-1">Phone</p>
                      <p className="text-white">+1 (310) 555-9876</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mb-4">For urgent media inquiries or interview requests:</p>
                  <Button className="w-full bg-gold hover:bg-gold-light text-black">
                    Contact Press Team
                  </Button>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">Media Assets</h3>
                <p className="text-gray-300 mb-6">
                  Approved journalists and media professionals can request access to our media library containing high-resolution images and videos of our properties, executives, and events.
                </p>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                  Request Media Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;
