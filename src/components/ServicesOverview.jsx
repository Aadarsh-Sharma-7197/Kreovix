import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Palette, 
  Share2, 
  Edit3,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic campaigns that amplify your brand across all platforms",
    color: "from-neonPurple to-pink-500",
    delay: 0.1
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual storytelling that captures attention and drives engagement",
    color: "from-neonTeal to-blue-500",
    delay: 0.2
  },
  {
    icon: Edit3,
    title: "Video Editing",
    description: "Post-production magic that brings your vision to life",
    color: "from-purple-500 to-neonPurple",
    delay: 0.3
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic content creation that tells compelling stories",
    color: "from-teal-500 to-neonTeal",
    delay: 0.4
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional imagery that showcases your brand's essence",
    color: "from-neonPurple to-neonTeal",
    delay: 0.5
  }
];

const ServicesOverview = ({ setCursorVariant }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonTeal">
            Our Expertise
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From concept to creation, we deliver comprehensive digital solutions 
          that elevate your brand and captivate your audience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 100, rotateY: -30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateY: 0,
              transition: { 
                duration: 0.8, 
                delay: service.delay,
                ease: "easeOut"
              }
            }}
            whileHover={{ 
              y: -10,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
            className="group relative"
          >
            {/* Glassmorphism Card */}
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-neonPurple/30 transition-all duration-500 overflow-hidden">
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glowing Edge Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: `linear-gradient(45deg, transparent, ${index % 2 ? '#A259FF' : '#00F5D4'}20, transparent)`,
                     filter: 'blur(1px)'
                   }} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon size={28} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neonPurple group-hover:to-neonTeal transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center text-neonTeal group-hover:text-neonPurple transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neonPurple/50 to-neonTeal/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
