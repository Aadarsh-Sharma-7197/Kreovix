import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Palette, 
  Share2, 
  Edit3,
  ArrowRight,
  Play,
  Eye,
  Code,
} from 'lucide-react';

/* -------------------------------------------------------
   SERVICES DATA
   Add your media files to public/services/ folder
------------------------------------------------------- */
const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic campaigns that amplify your brand across all platforms with data-driven content that converts.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"],
    color: "from-neonPurple to-pink-500",
    delay: 0.08,
    mediaType: "image",
    mediaPath: "/3.png",
    serviceLink: "/services/social-media-marketing"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual storytelling that captures attention and drives engagement through stunning, purposeful design.",
    features: ["Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design"],
    color: "from-neonTeal to-blue-500",
    delay: 0.12,
    mediaType: "image",
    mediaPath: "/1.jpg",
    serviceLink: "/services/graphic-design"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technology for optimal performance and user experience.",
    features: ["Responsive Design", "E-commerce Solutions", "Web Applications", "CMS Development"],
    color: "from-purple to-green-400",
    delay: 0.16,
    mediaType: "image",
    mediaPath: "/dev.jpg",
    serviceLink: "/services/web-development"
  },
  {
    icon: Edit3,
    title: "Video Editing",
    description: "Post-production magic that brings your vision to life with cinematic quality and creative flair.",
    features: ["Color Grading", "Motion Graphics", "Audio Enhancement", "Visual Effects"],
    color: "from-purple-500 to-neonPurple",
    delay: 0.20,
    mediaType: "image",
    mediaPath: "/6.jpg",
    serviceLink: "/services/video-editing"
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic content creation that tells compelling stories and showcases your brand beautifully.",
    features: ["Corporate Videos", "Product Showcases", "Event Coverage", "Commercial Production"],
    color: "from-teal-500 to-neonTeal",
    delay: 0.24,
    mediaType: "image",
    mediaPath: "/5.jpg",
    serviceLink: "/services/videography"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional imagery that showcases your brand's essence and captures perfect moments.",
    features: ["Product Photography", "Corporate Portraits", "Event Photography", "Lifestyle Shots"],
    color: "from-purple to-cyan-600",
    delay: 0.28,
    mediaType: "image",
    mediaPath: "/4.jpg",
    serviceLink: "/services/photography"
  }
];

/* -------------------------------------------------------
   MAIN SECTION
------------------------------------------------------- */
const ServicesScroll = ({ setCursorVariant }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-5 gradient-text">
          Our Creative Arsenal
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From concept to creation, we deliver comprehensive digital solutions 
          that elevate your brand and captivate your audience.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-32">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
            setCursorVariant={setCursorVariant}
          />
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------
   SERVICE CARD (OPTIMIZED)
------------------------------------------------------- */
const ServiceCard = ({ service, index, setCursorVariant }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: service.delay, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ${
        isEven ? "" : "lg:grid-flow-col-dense"
      }`}
    >

      {/* ----------------- LEFT SIDE (CONTENT) ----------------- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: service.delay + 0.15 }}
        className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >

        {/* Icon Block */}
        <motion.div
          whileHover={{ rotate: 25, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
        >
          <service.icon size={40} className="text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: service.delay + 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <div className="w-2 h-2 bg-neonTeal rounded-full" />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-5">
          
          {/* Primary Button - Learn More */}
          <motion.a
            href={service.serviceLink}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            className={`group/btn px-8 py-4 bg-gradient-to-r ${service.color} rounded-xl font-semibold text-white shadow-2xl  transition-all duration-300 text-center cursor-pointer`}
          >
            <span className="flex items-center justify-center gap-3">
              Learn More
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          {/* Secondary Button - View Portfolio */}
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            className="group/btn px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm border-2 border-neonTeal text-neonTeal rounded-xl font-semibold hover:bg-gradient-to-r hover:from-neonTeal transition-all duration-300 shadow-lg hover:shadow-neonTeal/50 text-center cursor-pointer"
          >
            <span className="flex items-center justify-center gap-3">
              <Eye size={20} />
              View Portfolio
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* ----------------- RIGHT SIDE (VISUAL WITH MEDIA) ----------------- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: service.delay + 0.25 }}
        className={`relative group ${isEven ? "lg:order-2" : "lg:order-1"}`}
        onMouseEnter={() => setCursorVariant("button")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        {/* Visual Container */}
        <div className="relative aspect-square glassmorphism rounded-3xl overflow-hidden shadow-xl">

          {/* Background Media (Image or Video) */}
          <div className="absolute inset-0">
            {service.mediaType === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={service.mediaPath} type="video/mp4" />
              </video>
            ) : (
              <img
                src={service.mediaPath}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Subtle Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/10 group-hover:to-black/30 transition-all duration-500`} />

          {/* Hover Overlay with Link */}
          <motion.a
            href="/portfolio"
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer z-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                <Play size={32} className="text-white ml-1" />
              </div>
              <span className="text-white text-xl font-bold tracking-wide mb-2">Preview Work</span>
              <p className="text-gray-300 text-sm">View Portfolio →</p>
            </motion.div>
          </motion.a>

        </div>

        {/* Project Counter */}
        
      </motion.div>

    </motion.div>
  );
};

export default ServicesScroll;      