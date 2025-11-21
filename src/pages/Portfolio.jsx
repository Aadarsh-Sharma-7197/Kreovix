import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Play, 
  ExternalLink, 
  Eye,
  Award,
  Grid3X3,
  Share2,
  Camera,
  Video,
  Palette,
  Edit3,
  Film,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const portfolioRef = useRef(null);
  const isInView = useInView(portfolioRef, { once: true, margin: '-100px' });

  // Service categories
  const categories = [
    { id: 'all', name: 'All Work', icon: Grid3X3 },
    { id: 'short-form', name: 'Short Form Videos', icon: Film },
    { id: 'long-form', name: 'Long Form Videos', icon: Video },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'graphic-design', name: 'Graphic Design', icon: Palette },
    { id: 'motion-graphics', name: 'Motion Graphics', icon: Edit3 },
    { id: 'social-media', name: 'Social Media', icon: Share2 }
  ];

  // Portfolio items - ADD YOUR YOUTUBE VIDEO IDs HERE
  const portfolioItems = [
    // SHORT FORM VIDEOS - YouTube only
    {
      id: 1,
      category: "short-form",
      service: "Short Form Video",
      mediaType: "youtube",
      youtubeId: "_J8eCsRXvcI", // EDIT: Add your YouTube video ID here
      title: "Project Title 1",
      client: "Client Name",
      duration: "0:45"
    },
    {
      id: 2,
      category: "short-form",
      service: "Short Form Video",
      mediaType: "youtube",
      youtubeId: "7ldCgaTFgiM", // EDIT: Add your YouTube video ID here
      title: "Project Title 2",
      client: "Client Name",
      duration: "0:30"
    },
    {
      id: 3,
      category: "short-form",
      service: "Short Form Video",
      mediaType: "youtube",
      youtubeId: "IObybxqi0zs", // EDIT: Add your YouTube video ID here
      title: "Project Title 3",
      client: "Client Name",
      duration: "0:58"
    },

    // LONG FORM VIDEOS - YouTube only
    {
      id: 4,
      category: "long-form",
      service: "Long Form Video",
      mediaType: "youtube",
      youtubeId: "uz6purXLVnU", // EDIT: Add your YouTube video ID here
      title: "Project Title 4",
      client: "Client Name",
      duration: "15:30"
    },
    {
      id: 5,
      category: "long-form",
      service: "Long Form Video",
      mediaType: "youtube",
      youtubeId: "9C6yastA1qA", // EDIT: Add your YouTube video ID here
      title: "Project Title 5",
      client: "Client Name",
      duration: "22:15"
    },
    {
      id: 6,
      category: "long-form",
      service: "Long Form Video",
      mediaType: "youtube",
      youtubeId: "M7lc1UVf-VE", // EDIT: Add your YouTube video ID here
      title: "Project Title 6",
      client: "Client Name",
      duration: "18:45"
    },

    // PHOTOGRAPHY - Image paths
    {
      id: 7,
      category: "photography",
      service: "Photography",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 7",
      client: "Client Name"
    },
    {
      id: 8,
      category: "photography",
      service: "Photography",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 8",
      client: "Client Name"
    },
    {
      id: 9,
      category: "photography",
      service: "Photography",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 9",
      client: "Client Name"
    },

    // GRAPHIC DESIGN - Image paths
    {
      id: 10,
      category: "graphic-design",
      service: "Graphic Design",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 10",
      client: "Client Name"
    },
    {
      id: 11,
      category: "graphic-design",
      service: "Graphic Design",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 11",
      client: "Client Name"
    },
    {
      id: 12,
      category: "graphic-design",
      service: "Graphic Design",
      mediaType: "image",
      mediaPath: "", // EDIT: Add your image path
      title: "Project Title 12",
      client: "Client Name"
    },

    // MOTION GRAPHICS - YouTube only
    {
      id: 13,
      category: "motion-graphics",
      service: "Motion Graphics",
      mediaType: "youtube",
      youtubeId: "", // EDIT: Add your YouTube video ID here
      title: "Project Title 13",
      client: "Client Name",
      duration: "0:15"
    },
    {
      id: 14,
      category: "motion-graphics",
      service: "Motion Graphics",
      mediaType: "youtube",
      youtubeId: "", // EDIT: Add your YouTube video ID here
      title: "Project Title 14",
      client: "Client Name",
      duration: "0:20"
    },
    {
      id: 15,
      category: "motion-graphics",
      service: "Motion Graphics",
      mediaType: "youtube",
      youtubeId: "", // EDIT: Add your YouTube video ID here
      title: "Project Title 15",
      client: "Client Name",
      duration: "0:30"
    },

    // SOCIAL MEDIA - Image paths
    {
      id: 16,
      category: "social-media",
      service: "Social Media",
      mediaType: "image",
      mediaPath: "/portfolio/social-media/content1.jpg", // EDIT: Add your image path
      title: "Project Title 16",
      client: "Client Name"
    },
    {
      id: 17,
      category: "social-media",
      service: "Social Media",
      mediaType: "image",
      mediaPath: "/portfolio/social-media/content2.jpg", // EDIT: Add your image path
      title: "Project Title 17",
      client: "Client Name"
    },
    {
      id: 18,
      category: "social-media",
      service: "Social Media",
      mediaType: "image",
      mediaPath: "/portfolio/social-media/content3.jpg", // EDIT: Add your image path
      title: "Project Title 18",
      client: "Client Name"
    }
  ];

  // Filter items based on active category
  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  // Get service color based on category
  const getServiceColor = (category) => {
    switch(category) {
      case 'short-form':
        return 'from-red-500/80 to-red-600/80';
      case 'long-form':
        return 'from-purple-500/80 to-purple-600/80';
      case 'photography':
        return 'from-blue-500/80 to-blue-600/80';
      case 'graphic-design':
        return 'from-pink-500/80 to-pink-600/80';
      case 'motion-graphics':
        return 'from-orange-500/80 to-orange-600/80';
      case 'social-media':
        return 'from-teal-500/80 to-cyan-600/80';
      default:
        return 'from-neonPurple/80 to-neonTeal/80';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-[90px] md:pt-[100px] pb-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neonTeal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 glassmorphism px-6 py-3 rounded-full border border-neonPurple/30 mb-8"
            animate={{
              boxShadow: [
                '0 0 20px rgba(162, 89, 255, 0.2)',
                '0 0 40px rgba(162, 89, 255, 0.4)',
                '0 0 20px rgba(162, 89, 255, 0.2)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Award size={20} className="text-neonTeal" />
            <span className="text-white font-medium">Creative Portfolio Showcase</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Our Creative Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio spanning <span className="gradient-text font-semibold">videos, photography, design, and social media content</span>.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-neonPurple to-neonTeal border-transparent text-white shadow-lg shadow-neonPurple/30'
                  : 'glassmorphism border-white/20 text-gray-300 hover:border-neonPurple/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={16} />
              <span className="font-medium text-sm">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Showing <span className="text-neonTeal font-semibold">{filteredItems.length}</span> project{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={portfolioRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group glassmorphism rounded-2xl overflow-hidden border border-white/10 hover:border-neonPurple/30 transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Project Media */}
                <div className="relative aspect-video overflow-hidden bg-black/20">
                  {item.mediaType === 'youtube' && item.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                      title={item.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={item.mediaPath}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  {/* Service Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-gradient-to-r ${getServiceColor(item.category)} text-white shadow-lg`}>
                      {item.service}
                    </div>
                  </div>

                  {/* Duration Badge (for videos) */}
                  {item.duration && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 glassmorphism px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm">
                        <Clock size={12} />
                        {item.duration}
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                      <motion.button
                        onClick={() => setSelectedProject(item)}
                        className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center text-white border border-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div>
                      <div className="text-xs text-gray-400">Client</div>
                      <div className="text-white font-medium text-sm">{item.client}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Service</div>
                      <div className="text-neonTeal font-medium text-sm">{item.service}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-20 border-t border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert creative services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full font-semibold text-lg shadow-2xl text-white"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
            
            <Link to="/services"> 
              <motion.button  
                className="px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-neonTeal rounded-full font-semibold text-lg text-neonTeal hover:bg-gradient-to-r hover:from-neonTeal hover:to-cyan-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glassmorphism rounded-3xl p-8 max-w-5xl w-full max-h-[85vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Project Media - Full Width */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/20">
                  {selectedProject.mediaType === 'youtube' && selectedProject.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                      title={selectedProject.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedProject.mediaPath}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${getServiceColor(selectedProject.category)} text-white mb-3`}>
                        {selectedProject.service}
                      </div>
                      <h2 className="text-3xl font-bold gradient-text mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span>Client: <span className="text-white font-medium">{selectedProject.client}</span></span>
                        {selectedProject.duration && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {selectedProject.duration}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 glassmorphism rounded-xl text-white font-semibold border-2 border-white/30 hover:border-neonTeal/50 hover:bg-white/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;