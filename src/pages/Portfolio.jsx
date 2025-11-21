import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Grid3X3,
  Film,
  Video,
  Camera,
  Palette,
  Edit3,
  Share2,
  Play,
  X,
  Sparkles
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  const portfolioRef = useRef(null);
  const isInView = useInView(portfolioRef, { once: true, margin: '-100px' });

  // Define neon colors
  const neonPurple = '#A259FF';
  const neonTeal = '#00F5D4';

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Work', icon: Grid3X3 },
    { id: 'shorts', label: 'Shorts', icon: Film },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'motion', label: 'Motion', icon: Edit3 },
    { id: 'social', label: 'Social', icon: Share2 }
  ];

  // Portfolio data
  const portfolioData = {
    shorts: [
      { id: 's1', youtubeId: '_J8eCsRXvcI', thumbnail: 'https://img.youtube.com/vi/_J8eCsRXvcI/maxresdefault.jpg' },
      { id: 's2', youtubeId: '7ldCgaTFgiM', thumbnail: 'https://img.youtube.com/vi/7ldCgaTFgiM/maxresdefault.jpg' },
      { id: 's3', youtubeId: 'IObybxqi0zs', thumbnail: 'https://img.youtube.com/vi/IObybxqi0zs/maxresdefault.jpg' },
      { id: 's4', youtubeId: 'VkFnmTwqSuE', thumbnail: 'https://img.youtube.com/vi/VkFnmTwqSuE/maxresdefault.jpg' },
      { id: 's5', youtubeId: 'd0UgUMYJ49w', thumbnail: 'https://img.youtube.com/vi/d0UgUMYJ49w/maxresdefault.jpg' }
    ],
    videos: [
      { id: 'v1', youtubeId: 'uz6purXLVnU', thumbnail: 'https://img.youtube.com/vi/uz6purXLVnU/maxresdefault.jpg' },
      { id: 'v2', youtubeId: '9C6yastA1qA', thumbnail: 'https://img.youtube.com/vi/9C6yastA1qA/maxresdefault.jpg' },
      { id: 'v3', youtubeId: 'HsySiWymOEw', thumbnail: 'https://img.youtube.com/vi/HsySiWymOEw/maxresdefault.jpg' },
      { id: 'v4', youtubeId: 'UvIHzsadU6Q', thumbnail: 'https://img.youtube.com/vi/UvIHzsadU6Q/maxresdefault.jpg' }
    ],
    photography: [
      { id: 'p1', path: 'public/ph-1.jpg' },
      { id: 'p2', path: 'public/ph-2.jpg' },
      { id: 'p3', path: 'public/ph-3.jpg' },
      { id: 'p4', path: 'public/ph-4.jpg' },
      { id: 'p5', path: 'public/ph-5.jpg' },
      { id: 'p6', path: 'public/ph-6.jpg' }
    ],
    design: [
      { id: 'd1', path: 'public/gd-1.png' },
      { id: 'd2', path: 'public/gd-2.png' },
      { id: 'd3', path: 'public/gd-3.png' },
      { id: 'd4', path: 'public/gd-4.png' }
    ],
    motion: [
      { id: 'm1', path: 'public/mg-1.jpg' },
      { id: 'm2', path: 'public/mg-2.jpg' },
      { id: 'm3', path: 'public/mg-3.jpg' },
      { id: 'm4', path: 'public/mg-4.jpg' }
    ],
    social: [
      { id: 'so1', path: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80' },
      { id: 'so2', path: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80' },
      { id: 'so3', path: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80' }
    ]
  };

  // Glassmorphism style
  const glassStyle = "bg-white/5 backdrop-blur-xl border border-white/10";

  // Section component
  const PortfolioSection = ({ title, items, type, icon: Icon }) => {
    const isShort = type === 'shorts';
    const isVideo = type === 'videos';
    
    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A259FF] to-[#00F5D4] flex items-center justify-center shadow-lg shadow-[#A259FF]/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#A259FF] via-white to-[#00F5D4] bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#A259FF]/30 via-[#00F5D4]/30 to-transparent" />
        </div>

        {/* Grid Layout */}
        <div className={`grid gap-4 md:gap-5 ${
          isShort 
            ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`group relative ${glassStyle} rounded-2xl overflow-hidden hover:border-[#A259FF]/50 transition-all duration-500 cursor-pointer ${
                isShort ? 'aspect-[9/16]' : 'aspect-video'
              }`}
              onClick={() => setSelectedMedia({ ...item, type })}
              style={{
                boxShadow: '0 0 0 0 rgba(162, 89, 255, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px 0 rgba(162, 89, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(162, 89, 255, 0)';
              }}
            >
              {/* Media */}
              <img
                src={item.thumbnail || item.path}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {(isVideo || isShort) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-[#A259FF] to-[#00F5D4] flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.15 }}
                      style={{
                        boxShadow: '0 0 40px rgba(162, 89, 255, 0.6)'
                      }}
                    >
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#00F5D4]/30">
                <span className="text-xs font-bold text-[#83eee0] uppercase tracking-wider">
                  {isShort ? 'Short' : isVideo ? 'Video' : 'Photo'}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A259FF]/20 to-[#00F5D4]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  // Filter sections based on active filter
  const shouldShowSection = (sectionId) => {
    return activeFilter === 'all' || activeFilter === sectionId;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A259FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00F5D4]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A259FF]/5 to-[#00F5D4]/5 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A259FF]/10 to-[#00F5D4]/10 border border-[#A259FF]/30 backdrop-blur-xl mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(162, 89, 255, 0.2)',
                  '0 0 40px rgba(162, 89, 255, 0.4)',
                  '0 0 20px rgba(162, 89, 255, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={18} className="text-[#00F5D4]" />
              <span className="text-sm font-semibold text-white">Portfolio Showcase</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-[#A259FF] via-[#00F5D4] to-[#A259FF] bg-clip-text text-transparent animate-gradient">
                Creative Work
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Explore our diverse portfolio of <span className="text-[#00F5D4] font-semibold">visual storytelling</span>
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`inline-flex flex-wrap items-center justify-center gap-2 p-2 ${glassStyle} rounded-2xl shadow-2xl`}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#A259FF] to-[#00F5D4] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={
                  activeFilter === filter.id
                    ? { boxShadow: '0 0 20px rgba(162, 89, 255, 0.5)' }
                    : {}
                }
              >
                <filter.icon size={16} />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10" ref={portfolioRef}>
        {/* Shorts Section */}
        {shouldShowSection('shorts') && (
          <PortfolioSection 
            title="Short Form Videos" 
            items={portfolioData.shorts} 
            type="shorts"
            icon={Film}
          />
        )}

        {/* Videos Section */}
        {shouldShowSection('videos') && (
          <PortfolioSection 
            title="Long Form Videos" 
            items={portfolioData.videos} 
            type="videos"
            icon={Video}
          />
        )}

        {/* Photography Section */}
        {shouldShowSection('photography') && (
          <PortfolioSection 
            title="Photography" 
            items={portfolioData.photography} 
            type="photography"
            icon={Camera}
          />
        )}

        {/* Design Section */}
        {shouldShowSection('design') && (
          <PortfolioSection 
            title="Graphic Design" 
            items={portfolioData.design} 
            type="design"
            icon={Palette}
          />
        )}

        {/* Motion Graphics Section */}
        {shouldShowSection('motion') && (
          <PortfolioSection 
            title="Motion Graphics" 
            items={portfolioData.motion} 
            type="motion"
            icon={Edit3}
          />
        )}

        {/* Social Media Section */}
        {shouldShowSection('social') && (
          <PortfolioSection 
            title="Social Media Content" 
            items={portfolioData.social} 
            type="social"
            icon={Share2}
          />
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedMedia(null)}
              className={`absolute top-6 right-6 w-12 h-12 rounded-full ${glassStyle} flex items-center justify-center text-white hover:bg-white/10 transition-all z-10 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{ boxShadow: '0 0 20px rgba(0, 245, 212, 0.3)' }}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative ${
                selectedMedia.type === 'shorts' 
                  ? 'w-full max-w-md aspect-[9/16]' 
                  : 'w-full max-w-6xl aspect-video'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#A259FF]/30`}
                style={{ boxShadow: '0 0 50px rgba(162, 89, 255, 0.4)' }}
              >
                {selectedMedia.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedMedia.path}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
