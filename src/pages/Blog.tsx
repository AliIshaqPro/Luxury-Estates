
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Luxury Property Features That Attract High-End Buyers",
    excerpt: "Discover the most sought-after amenities and features that luxury property buyers are looking for in 2023.",
    category: "Buying",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How to Stage Your Luxury Home for a Quick Sale",
    excerpt: "Professional staging tips that can help sell your high-end property faster and for a better price.",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    date: "May 28, 2023",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Investment Opportunities in Emerging Luxury Markets",
    excerpt: "Explore untapped potential in these up-and-coming luxury real estate markets around the world.",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Elena Rodriguez",
    date: "April 10, 2023",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Sustainable Luxury: Eco-Friendly Features for High-End Homes",
    excerpt: "How sustainability is transforming luxury real estate and increasing property values.",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "James Peterson",
    date: "March 22, 2023",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Art of Negotiating in Ultra-Luxury Real Estate",
    excerpt: "Expert strategies for negotiating multi-million dollar property deals with success.",
    category: "Buying",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Olivia Washington",
    date: "February 15, 2023",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Technology Trends Reshaping the Luxury Real Estate Experience",
    excerpt: "From virtual reality tours to smart home innovations, how tech is changing the high-end property market.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Robert Tanaka",
    date: "January 30, 2023",
    readTime: "8 min read"
  },
  {
    id: 7,
    title: "Waterfront Paradises: The World's Most Exclusive Coastal Properties",
    excerpt: "A tour of breathtaking oceanfront estates from the Mediterranean to the Caribbean.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "December 12, 2022",
    readTime: "11 min read"
  },
  {
    id: 8,
    title: "How to Create the Ultimate Luxury Home Office",
    excerpt: "Design tips for creating a productive and sophisticated workspace in your luxury home.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Elena Rodriguez",
    date: "November 5, 2022",
    readTime: "6 min read"
  },
];

const categories = [
  "All",
  "Buying",
  "Selling",
  "Investment",
  "Design",
  "Lifestyle",
  "Technology",
  "Trends"
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="glass-card rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/20">
    <div className="aspect-video overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-gray-400 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-xl font-medium mb-3 line-clamp-2">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-300">
          <User className="h-4 w-4 mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center text-sm text-gray-300">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
      </div>
      <Link to={`/blog/${post.id}`} className="mt-4 flex items-center text-gold hover:text-gold-light">
        Read More <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  </div>
);

const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
    <img 
      src={post.image} 
      alt={post.title} 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-gray-300 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {post.readTime}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium mb-4 max-w-2xl">{post.title}</h2>
      <p className="text-gray-300 mb-6 max-w-2xl">{post.excerpt}</p>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center text-sm text-gray-300">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <Button className="bg-gold hover:bg-gold-light text-black">
            Read Article
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const featuredPost = blogPosts[0];
  const remainingPosts = filteredPosts.filter(post => post.id !== featuredPost.id);
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-4xl font-bold mb-4">
            Luxury Real Estate <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mb-8">
            Insights, advice, and inspiration for luxury property buyers, sellers, and enthusiasts.
          </p>
          
          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />
          
          {/* Search & Categories */}
          <div className="mt-12 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
                <div className="flex gap-2 min-w-max">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "secondary" : "outline"}
                      className={activeCategory === category ? "bg-gold text-black" : "border-white/20 hover:bg-white/10"}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="glass-card rounded-xl p-6 md:p-10 mt-16">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:flex-1">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  Subscribe to Our <span className="text-gradient-gold">Newsletter</span>
                </h2>
                <p className="text-gray-300 mb-4">
                  Stay up to date with the latest luxury real estate trends, market insights, and exclusive property listings.
                </p>
              </div>
              <div className="md:flex-1">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Your email address"
                    className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="bg-gold hover:bg-gold-light text-black sm:flex-shrink-0">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
