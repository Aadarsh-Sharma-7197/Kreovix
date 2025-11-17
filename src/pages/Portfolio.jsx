import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Play, 
  ExternalLink, 
  Calendar, 
  Eye, 
  ThumbsUp,
  Clock,
  Youtube,
  TrendingUp,
  Award,
  Filter,
  Grid3X3,
  MonitorPlay,
  Smartphone,
  Share2,
  Camera,
  Video,
  Palette,
  Edit3,
  Film,
  Image,
  Layers,
  PenTool,
  Zap,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const portfolioRef = useRef(null);
  const isInView = useInView(portfolioRef, { once: true, margin: '-100px' });

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'video-editing', name: 'Video Editing', icon: Video },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'graphic-design', name: 'Graphic Design', icon: Palette },
    { id: 'motion-graphics', name: 'Motion Graphics', icon: Edit3 },
    { id: 'social-media', name: 'Social Media', icon: Share2 },
    { id: 'branding', name: 'Branding', icon: Award }
  ];

  // Complete portfolio with all services
  const portfolioItems = [
    // Video Editing Projects
    {
      id: 1,
      title: "Complete Web Development Course",
      category: "video-editing",
      type: "YouTube Long Form",
      service: "Video Editing",
      duration: "45:32",
      views: "2.1M",
      likes: "87K",
      client: "TechEdu Academy",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://via.placeholder.com/800x450/A259FF/FFFFFF?text=Web+Dev+Course",
      tags: ["Tutorial", "Web Dev", "JavaScript", "React"],
      description: "Comprehensive web development course with professional editing and graphics.",
      deliverables: ["Final Cut Pro Editing", "Color Grading", "Audio Enhancement", "Custom Graphics"]
    },
    {
      id: 2,
      title: "Travel Vlog: Tokyo Adventures", 
      category: "video-editing",
      type: "YouTube Short",
      service: "Video Editing",
      duration: "0:58",
      views: "8.5M",
      likes: "420K",
      client: "Adventure Seekers",
      youtubeId: "jNQXAC9IVRw",
      image: "https://via.placeholder.com/450x800/00F5D4/FFFFFF?text=Tokyo+Vlog",
      tags: ["Travel", "Vlog", "Short Form", "Cinematic"],
      description: "Fast-paced travel short with dynamic transitions and music sync.",
      deliverables: ["Quick Cuts", "Trending Music", "Text Animations", "Color Correction"]
    },
    {
      id: 3,
      title: "Product Launch Commercial",
      category: "video-editing", 
      type: "Commercial",
      service: "Video Editing",
      duration: "2:30",
      views: "1.2M",
      likes: "45K",
      client: "TechNova Inc.",
      youtubeId: "M7lc1UVf-VE",
      image: "https://via.placeholder.com/800x450/FF6B6B/FFFFFF?text=Product+Launch",
      tags: ["Commercial", "Product", "Corporate", "Professional"],
      description: "High-end product launch video with cinematic quality.",
      deliverables: ["Professional Editing", "Motion Graphics", "Sound Design", "Color Grading"]
    },

    // Photography Projects  
    {
      id: 4,
      title: "Corporate Headshot Session",
      category: "photography",
      type: "Portrait Photography",
      service: "Photography",
      client: "Business Professionals Inc.",
      image: "https://via.placeholder.com/600x800/9B59B6/FFFFFF?text=Corporate+Headshots",
      tags: ["Portrait", "Corporate", "Professional", "Studio"],
      description: "Professional headshots for corporate executives and team members.",
      deliverables: ["High-res Images", "Retouching", "Multiple Poses", "Print Ready Files"],
      stats: { photos: "150+", clients: "25", rating: "5.0" }
    },
    {
      id: 5,
      title: "Wedding Photography Collection",
      category: "photography", 
      type: "Event Photography",
      service: "Photography",
      client: "Happy Couples Studio",
      image: "https://via.placeholder.com/800x600/FF69B4/FFFFFF?text=Wedding+Photos",
      tags: ["Wedding", "Event", "Romantic", "Candid"],
      description: "Complete wedding day coverage with cinematic storytelling approach.",
      deliverables: ["500+ Photos", "Same-day Preview", "Photo Album", "Online Gallery"],
      stats: { photos: "500+", hours: "12", rating: "5.0" }
    },
    {
      id: 6,
      title: "Food & Restaurant Photography",
      category: "photography",
      type: "Commercial Photography", 
      service: "Photography",
      client: "Gourmet Restaurants",
      image: "https://via.placeholder.com/800x600/FFA500/FFFFFF?text=Food+Photography",
      tags: ["Food", "Commercial", "Restaurant", "Menu"],
      description: "Mouth-watering food photography for restaurant menus and marketing.",
      deliverables: ["Menu Photos", "Lifestyle Shots", "Social Media Content", "Print Materials"],
      stats: { photos: "200+", dishes: "50", rating: "4.9" }
    },

    // Graphic Design Projects
    {
      id: 7,
      title: "Complete Brand Identity Design",
      category: "graphic-design",
      type: "Brand Identity",
      service: "Graphic Design", 
      client: "StartupX Technologies",
      image: "https://via.placeholder.com/800x600/20B2AA/FFFFFF?text=Brand+Identity",
      tags: ["Branding", "Logo", "Identity", "Corporate"],
      description: "Complete brand identity package including logo, colors, and guidelines.",
      deliverables: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterhead"],
      stats: { concepts: "5", revisions: "3", rating: "5.0" }
    },
    {
      id: 8,
      title: "Social Media Graphics Pack",
      category: "graphic-design",
      type: "Social Media Design",
      service: "Graphic Design",
      client: "Digital Marketing Agency", 
      image: "https://via.placeholder.com/800x800/FF1493/FFFFFF?text=Social+Graphics",
      tags: ["Social Media", "Instagram", "Facebook", "Marketing"],
      description: "Complete social media graphics package for consistent brand presence.",
      deliverables: ["Instagram Posts", "Stories Templates", "Facebook Covers", "Ad Banners"],
      stats: { graphics: "50+", platforms: "4", rating: "4.9" }
    },
    {
      id: 9,
      title: "Print Design Collection",
      category: "graphic-design",
      type: "Print Design",
      service: "Graphic Design",
      client: "Corporate Events Co.",
      image: "https://via.placeholder.com/600x800/4682B4/FFFFFF?text=Print+Design",
      tags: ["Print", "Brochure", "Flyer", "Corporate"],
      description: "Professional print materials for corporate events and marketing.",
      deliverables: ["Brochures", "Flyers", "Banners", "Event Materials"],
      stats: { designs: "20+", formats: "Multiple", rating: "5.0" }
    },

    // Motion Graphics Projects
    {
      id: 10,
      title: "Animated Logo Reveal",
      category: "motion-graphics",
      type: "Logo Animation",
      service: "Motion Graphics",
      duration: "0:10",
      client: "Brand Studios",
      youtubeId: "ZZ5LpwO-An4",
      image: "https://via.placeholder.com/800x450/32CD32/FFFFFF?text=Logo+Animation",
      tags: ["Animation", "Logo", "Branding", "Motion"],
      description: "Dynamic logo reveal animation for brand identity and video intros.",
      deliverables: ["After Effects File", "Multiple Formats", "Sound Effects", "Style Variations"]
    },
    {
      id: 11,
      title: "Explainer Video Animation",
      category: "motion-graphics",
      type: "Explainer Video",
      service: "Motion Graphics",
      duration: "2:45", 
      client: "SaaS Company",
      youtubeId: "ALZHF5UqnU4",
      image: "https://via.placeholder.com/800x450/FF4500/FFFFFF?text=Explainer+Video",
      tags: ["Explainer", "Animation", "SaaS", "Business"],
      description: "Animated explainer video breaking down complex SaaS features simply.",
      deliverables: ["Full Animation", "Voiceover Integration", "Custom Illustrations", "Multiple Versions"]
    },

    // Social Media Content
    {
      id: 12,
      title: "Instagram Content Strategy",
      category: "social-media",
      type: "Content Creation",
      service: "Social Media",
      client: "Fashion Brand",
      image: "https://via.placeholder.com/600x600/E6E6FA/000000?text=Instagram+Content",
      tags: ["Instagram", "Fashion", "Content", "Strategy"],
      description: "Complete Instagram content strategy with posts, stories, and reels.",
      deliverables: ["30 Posts", "Story Templates", "Reel Concepts", "Hashtag Strategy"],
      stats: { posts: "30", engagement: "+150%", followers: "+5K" }
    },
    {
      id: 13,
      title: "TikTok Viral Campaign",
      category: "social-media",
      type: "Viral Content",
      service: "Social Media",
      client: "Beauty Brand",
      image: "https://via.placeholder.com/450x800/FF69B4/FFFFFF?text=TikTok+Campaign",
      tags: ["TikTok", "Viral", "Beauty", "Campaign"],
      description: "Viral TikTok campaign that generated millions of views and engagement.",
      deliverables: ["10 TikTok Videos", "Trending Hashtags", "Influencer Kit", "Performance Analytics"],
      stats: { views: "5M+", engagement: "25%", shares: "100K+" }
    },

    // Branding Projects
    {
      id: 14,
      title: "Complete Brand Redesign",
      category: "branding",
      type: "Brand Strategy",
      service: "Branding",
      client: "Established Restaurant Chain",
      image: "https://via.placeholder.com/800x600/8A2BE2/FFFFFF?text=Brand+Redesign",
      tags: ["Rebranding", "Strategy", "Restaurant", "Identity"],
      description: "Complete brand transformation for established restaurant chain.",
      deliverables: ["Brand Strategy", "New Identity", "Menu Design", "Store Signage"],
      stats: { locations: "15", increase: "+30%", rating: "5.0" }
    },
    {
      id: 15,
      title: "Startup Brand Launch",
      category: "branding",
      type: "Brand Creation", 
      service: "Branding",
      client: "Tech Startup",
      image: "https://via.placeholder.com/800x600/00CED1/FFFFFF?text=Startup+Brand",
      tags: ["Startup", "Tech", "Launch", "Innovation"],
      description: "From concept to launch: complete brand creation for tech startup.",
      deliverables: ["Brand Identity", "Website Design", "Marketing Materials", "Launch Strategy"],
      stats: { timeline: "6 weeks", funding: "$2M+", rating: "5.0" }
    }
  ];

  // Filter items based on active category
  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

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
            Our Creative Masterpieces
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From viral videos and stunning photography to eye-catching graphics and complete brand identities, 
            explore our <span className="gradient-text font-semibold">full spectrum of creative services</span>.
          </p>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Videos Created", icon: Video },
              { number: "1K+", label: "Photos Taken", icon: Camera },
              { number: "300+", label: "Designs Made", icon: Palette },
              { number: "150+", label: "Animations", icon: Edit3 },
              { number: "200+", label: "Campaigns", icon: Share2 },
              { number: "100+", label: "Brands Built", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism p-4 rounded-xl border border-white/10"
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-neonPurple to-neonTeal rounded-lg flex items-center justify-center mx-auto mb-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                >
                  <stat.icon size={18} className="text-white" />
                </motion.div>
                <div className="text-lg font-bold gradient-text">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
                  ? 'bg-gradient-to-r from-neonPurple to-neonTeal border-transparent text-white'
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
                <div className="relative aspect-video overflow-hidden">
                  {item.youtubeId ? (
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
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  {/* Service Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      item.service === 'Video Editing' 
                        ? 'bg-gradient-to-r from-red-500/80 to-red-600/80 text-white'
                        : item.service === 'Photography'
                        ? 'bg-gradient-to-r from-blue-500/80 to-blue-600/80 text-white'
                        : item.service === 'Graphic Design'
                        ? 'bg-gradient-to-r from-purple-500/80 to-purple-600/80 text-white'
                        : item.service === 'Motion Graphics'
                        ? 'bg-gradient-to-r from-orange-500/80 to-orange-600/80 text-white'
                        : item.service === 'Social Media'
                        ? 'bg-gradient-to-r from-pink-500/80 to-pink-600/80 text-white'
                        : 'bg-gradient-to-r from-neonTeal/80 to-teal-600/80 text-white'
                    }`}>
                      {item.service}
                    </div>
                  </div>

                  {/* Duration or Stats Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    {item.duration ? (
                      <div className="flex items-center gap-1 glassmorphism px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm">
                        <Clock size={12} />
                        {item.duration}
                      </div>
                    ) : item.stats ? (
                      <div className="glassmorphism px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm">
                        {Object.values(item.stats)[0]}
                      </div>
                    ) : null}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{item.type}</span>
                      <motion.button
                        onClick={() => setSelectedProject(item)}
                        className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Project Stats */}
                  {item.views ? (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Eye size={14} />
                          {item.views}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <ThumbsUp size={14} />
                          {item.likes}
                        </span>
                      </div>
                    </div>
                  ) : item.stats ? (
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {Object.entries(item.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-neonTeal">{value}</div>
                          <div className="text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Client Info */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Client</div>
                        <div className="text-white font-medium">{item.client}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Service</div>
                        <div className="text-neonTeal font-medium">{item.service}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-20 border-t border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need stunning videos, captivating photography, or complete brand design, 
            we've got the expertise to make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
            <motion.button
              className="px-8 py-4 glassmorphism border border-white/30 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full font-medium text-lg shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              >
              Start Your Project
            </motion.button>
           </Link>
            
           <Link to="/services"> 
            <motion.button
              className="px-8 py-4 glassmorphism border border-white/30 rounded-full font-medium text-lg text-white hover:border-neonTeal/50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
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
              className="glassmorphism rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="aspect-video rounded-2xl overflow-hidden">
                  {selectedProject.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                      title={selectedProject.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="text-neonTeal font-medium mb-2">{selectedProject.service}</div>
                    <h2 className="text-3xl font-bold gradient-text mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  {selectedProject.deliverables && (
                    <div>
                      <div className="text-sm text-gray-400 mb-3">Deliverables</div>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.deliverables.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-white">
                            <div className="w-2 h-2 bg-neonTeal rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Tags */}
                  <div>
                    <div className="text-sm text-gray-400 mb-3">Project Tags</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glassmorphism rounded-full text-sm text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-3 glassmorphism rounded-xl text-white font-medium border border-white/30 hover:border-neonTeal/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Details
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
