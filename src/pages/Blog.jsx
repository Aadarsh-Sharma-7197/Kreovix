import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Brand Storytelling in Digital Media",
    excerpt: "Explore how emerging technologies are reshaping the way brands connect with their audiences through immersive storytelling experiences.",
    author: "Sarah Chen",
    date: "2024-03-15",
    category: "Strategy",
    readTime: "5 min read",
    thumbnail: "/api/placeholder/400/250",
    tags: ["Branding", "Digital Strategy", "Storytelling"]
  },
  {
    id: 2, 
    title: "Mastering Video Content: Production Tips for 2024",
    excerpt: "From pre-production planning to post-production polish, learn the essential techniques that make video content stand out in today's market.",
    author: "Mike Rodriguez",
    date: "2024-03-12",
    category: "Production",
    readTime: "7 min read", 
    thumbnail: "/api/placeholder/400/250",
    tags: ["Video Production", "Content Creation", "Tips"]
  },
  {
    id: 3,
    title: "Color Psychology in Modern Design",
    excerpt: "Understanding how color choices influence user behavior and brand perception in digital and print design applications.",
    author: "Emma Thompson",
    date: "2024-03-08",
    category: "Design",
    readTime: "4 min read",
    thumbnail: "/api/placeholder/400/250", 
    tags: ["Design Theory", "Psychology", "Color"]
  },
  {
    id: 4,
    title: "Social Media Trends That Will Define 2024",
    excerpt: "Stay ahead of the curve with insights into the platforms, formats, and strategies that are shaping social media marketing.",
    author: "David Park",
    date: "2024-03-05",
    category: "Social Media",
    readTime: "6 min read",
    thumbnail: "/api/placeholder/400/250",
    tags: ["Social Media", "Marketing", "Trends"]
  },
  {
    id: 5,
    title: "Behind the Scenes: Creating Viral Content",
    excerpt: "A deep dive into the creative process, strategy, and execution behind our most successful viral campaigns.",
    author: "Lisa Wong",
    date: "2024-03-01", 
    category: "Case Study",
    readTime: "8 min read",
    thumbnail: "/api/placeholder/400/250",
    tags: ["Case Study", "Viral Marketing", "Creative Process"]
  },
  {
    id: 6,
    title: "The Art of Motion Graphics in Brand Identity",
    excerpt: "How animated elements are becoming essential components of modern brand identity systems and user experiences.",
    author: "Alex Johnson",
    date: "2024-02-28",
    category: "Motion Design", 
    readTime: "5 min read",
    thumbnail: "/api/placeholder/400/250",
    tags: ["Motion Graphics", "Animation", "Branding"]
  }
];

const categories = ['All', 'Strategy', 'Production', 'Design', 'Social Media', 'Case Study', 'Motion Design'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonTeal">
              Insights & Ideas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the latest trends, techniques, and insights from the world of 
            creative marketing and digital innovation.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neonPurple to-neonTeal text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neonPurple/30 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neonPurple/20 to-neonTeal/20 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full text-white text-sm font-medium">
                  {post.category}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neonPurple group-hover:to-neonTeal transition-all duration-300 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <motion.div
                    className="flex items-center gap-2 text-neonTeal group-hover:text-neonPurple transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neonPurple/30 to-neonTeal/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
